<?php

namespace App\Repositories\Admin;

use App\Repositories\BaseRepository;
use App\Models\Status;

class StatusRepository extends BaseRepository
{
    protected $data;

    public function __construct(Status $status)
    {
        $this->data = $status;
    }
    
}
