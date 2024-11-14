<?php

namespace App\Http\Middleware;

use App\Models\Conversation;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{

    protected $rootView = 'app';


    public function version(Request $request): ?string
    {
        return parent::version($request);
    }


    public function share(Request $request): array
    {

        $conversations = $request->user() ?  Conversation::where(function($query) use ($request) {
            $query->where('part1', $request->user()->id)
            ->orWhere('part2', $request->user()->id);
        })->with(['messages','userPart1', 'userPart2'])->get()->toArray() : null;

        return [
            ...parent::share($request),
            'auth' => [
                'user' => fn () => $request->user() ? $request->user()->only('id','avatar' ,'email', 'name') : null,
            ],
            'conversations' => fn () => $request->user() ? $conversations : null,
        ];
    }
}
