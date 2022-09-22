<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Str;
use Midtrans;

class SubscriptionPlanController extends Controller
{

    // public function __construct()
    // {
    //     // Set your Merchant Server Key
    //     \Midtrans\Config::$serverKey = env('MIDTRANS_SERVERKEY');
    //     // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
    //     \Midtrans\Config::$isProduction = false;
    //     // Set sanitization on (default)
    //     \Midtrans\Config::$isSanitized = false;
    //     // Set 3DS transaction for credit card to true
    //     \Midtrans\Config::$is3ds = false;
    // }

    public function index()
    {
        $subscriptionPlans = SubscriptionPlan::all();

        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscriptionPlans' => SubscriptionPlan::all(),
            'userSubscription' => null,
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan)
    {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'payment_status' => 'pending',
        ];
        $userSubscription = UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));

        // return inertia('User/Dashboard/SubscriptionPlan/Index', [
        //     'userSubscription' => $userSubscription,
        // ]);
    }
}
