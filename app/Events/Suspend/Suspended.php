<?php

namespace App\Events\Suspend;

use App\Models\User;
use Illuminate\Queue\SerializesModels;

class Suspended
{
    use SerializesModels;

    public function __construct(
        public User $user
    ) {
    }
}
