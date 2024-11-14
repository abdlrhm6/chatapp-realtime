export default function MessageBubble({ message }) {
    return (
        <div key={message.id} className={`flex items-start gap-3 ${message.sender === 'me' ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* Avatar */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
                <img 
                    src={message.avatar || '/default-avatar.png'} 
                    alt={`${message.name}'s avatar`}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col">
                {/* Sender Name */}
                <span className={`text-xs text-gray-400 mb-1 ${message.sender === 'me' ? 'text-right' : 'text-left'}`}>
                    {message.name}
                </span>

                {/* Message Bubble */}
                <div className={`w-fit rounded-lg p-2 sm:p-3 shadow-md ${message.sender === 'me' ? 'bg-blue-800' : 'bg-gray-800'}`}>
                    <p className="text-xs sm:text-sm">{message.text}</p>
                    <span className="text-[10px] sm:text-xs text-gray-400 mt-1 block">{message.time}</span>
                </div>
            </div>
        </div>
    )
}
