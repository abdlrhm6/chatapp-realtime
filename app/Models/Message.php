<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'sender_id',
        'reciever_id',
        'content',
        'conversation_id',
    ];

    public function conversation(){
        return $this->belongsTo(Conversation::class);
    }
}
