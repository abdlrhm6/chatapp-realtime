<?php

namespace App\Http\Controllers;

use App\Events\NewMessage;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;

class ChatController extends Controller
{

    public function index()
    {

        return inertia('Home', [
            'users' => User::all()
        ]);
    }

    public function message(Conversation $conversation)
    {
        // Load the conversation with its messages
        $conversation->load('messages','userPart1', 'userPart2');
        
        // Get the other user in the conversation
        $otherUser = $conversation->part1 == auth()->id() 
            ? $conversation->userPart2
            : $conversation->userPart1;

        return inertia('Message', [
            'messages' => $conversation,
            'user' => $otherUser
        ]);
    }

    public function send(Request $request)
    {

        $fields = $request->validate([
            'to' => ['required', 'string', 'max:255', 'exists:users,id'],
            'content' => ['required', 'string', 'max:255'],
        ]);


        $conversation = Conversation::where(function ($query) use ($fields) {
            $query->where(function ($q) use ($fields) {
                $q->where('part1', auth()->id())
                    ->where('part2', $fields['to']);
            })->orWhere(function ($q) use ($fields) {
                $q->where('part1', $fields['to'])
                    ->where('part2', auth()->id());
            });
        })->first();

        if (!$conversation) {
            $conversation = Conversation::create([
                'part1' => auth()->id(),
                'part2' => $fields['to'],
            ]);
        }

        $message = $conversation->messages()->create([
            'sender_id' => auth()->id(),
            'reciever_id' => $fields['to'],
            'content' => $fields['content']
        ]);

        broadcast(new NewMessage($message))->toOthers();

        return to_route('chat.message',$conversation->id);
    }


    public function users(){
        $users = User::where('id', '!=', auth()->id())->get();

       return inertia('Users', ['users'=>$users]);

    }


    public function newConversation(User $user){

        $conversation =Conversation::create(
            [
                'part1' => $user->id,
                'part2' => auth()->id()
            ]
            );
        
         return to_route('chat.message',$user->id);   
    }
}
