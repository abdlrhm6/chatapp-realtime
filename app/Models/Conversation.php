<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Conversation extends Model
{
    use HasFactory;

    protected $fillable = [
        'part1',
        'part2',
    ];

    public function userPart1(): BelongsTo
    {
        return $this->belongsTo(User::class, 'part1', 'id');
    }

    public function userPart2(): BelongsTo
    {
        return $this->belongsTo(User::class, 'part2', 'id');
    }

    public function messages(){
        return $this->hasMany(Message::class);
    }
}
