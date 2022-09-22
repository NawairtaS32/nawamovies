<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Session;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    private function activePlan()
    {
        //  untuk mengeck user activePlan sedang belangsung
        // kalo ada maka LastActiveUserSubscription
        // kalo tidak maka null
        $activePlan = Auth::user() ? Auth::user()->LastActiveUserSubscription : null;

        // kalo tidak maka null
        if (!$activePlan) {
            return null;
        }

        // untuk mengetahui kapan expired
        $lastDay = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->subscriptionPlan->active_period_in_months);
        // untuk mengetahui user masa aktifnya
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        $remaingActiveDays = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now());

        return [
            'name' => $activePlan->subscriptionPlan->name,
            'remainingActiveDays' => $remaingActiveDays,
            'activeDays' => $activeDays,
        ];
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan(),
            ],
            'flashMessage' => [
                'message' => Session::get('message'),
                'type' => Session::get('type'),
            ],
            'env' => [
                'MIDTRANS_CLIENTKEY' => env('MIDTRANS_CLIENTKEY')
            ],
            'ziggy' => function () {
                return (new Ziggy)->toArray();
            },
        ]);
    }
}
