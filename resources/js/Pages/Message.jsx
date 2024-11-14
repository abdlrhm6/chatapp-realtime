import BgPattern from "@/Components/BgPattern";
import MessageBubble from "@/Components/MessageBubble";
import MessageInput from "@/Components/MessageInput";
import UserTopNav from "@/Components/UserTopBar";
import { Head, usePage } from "@inertiajs/react";
import { useEffect, useState, useRef } from "react";


function MessageComp({ messages: initialMessages }) {
    const [messages, setMessages] = useState(initialMessages);
    const { auth } = usePage().props;
    const user = auth.user.id == messages.part1 ? messages.user_part1 : messages.user_part2;
    const otherUser = auth.user.id == messages.part1 ? messages.user_part2 : messages.user_part1;

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages.messages]);

    useEffect(() => {
        // Subscribe to the private channel
        const channel = window.Echo.private(`conversation.${messages.id}`);
        
        channel.listen('NewMessage', (e) => {

            const newMessage = {
                id: e.message.id,
                content: e.message.content,
                sender_id: e.message.sender_id,
                created_at: e.message.created_at
            };
            
            setMessages(prev => ({
                ...prev,
                messages: [...prev.messages, newMessage]
            }));
        });

        return () => {
            channel.stopListening('NewMessage');
        };
    }, [messages.id]);

    function extractUserAvatar(message) {
        if (message.sender_id == user.id) {
            return user.avatar
        } else {
            return otherUser.avatar
        }
    }
    function extractUserName(message) {
        if (message.sender_id == user.id) {
            return "You"
        } else {
            return otherUser.name
        }
    }


    const refinedMessages = messages?.messages?.map((message) => {
        return {
            id: message.id,
            text: message.content,
            sender: message.sender_id == user.id ? 'me' : 'notme',
            time: new Date(message.created_at).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            avatar: extractUserAvatar(message),
            name: extractUserName(message)

        }
    }) || [];

    

    return (
        <>
            <Head title="My chats" />
            <BgPattern />
            <div className="h-screen flex flex-col">
                <UserTopNav user={otherUser} />
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {refinedMessages.map((message) => (
                        <MessageBubble key={message.id} message={message} />
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <MessageInput user={otherUser} />
            </div>
        </>
    )
}


export default MessageComp
