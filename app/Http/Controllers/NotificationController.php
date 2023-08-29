<?php

namespace App\Http\Controllers;

use App\Services\NotificationService;
use Illuminate\Http\Request;

class NotificationController extends Controller
{

    protected $notification;

    public function __construct(NotificationService $notification)
    {
        $this->notification = $notification;
    }

    public function index(Request $request)
    {
        $data = $this->notification->getList($request);
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $this->notification->create($request);        
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Notifications  $notifications
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = $this->notification->getById($id);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Notifications  $notifications
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $this->notification->update($id, $request);
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Notifications  $notifications
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->notification->delete($id);
    }

    public function preview(Request $request)
    {
        $data = $this->notification->getPreview($request);
        return response()->json($data);
    }
}