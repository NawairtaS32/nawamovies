import Authenticated from "@/Layouts/Authenticated/index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";

export default function SubscriptionPlan({auth, subscriptionPlans, env}){
    const selectSubscription = (id) => {
        Inertia.post(
            route("user.dashboard.subscriptionPlan.userSubscribe", {
                subscriptionPlan: id,
            }),
            {},
            {
                only: ["userSubscription"],
                onSuccess: ({ props }) => {
                    onSnapMidtrans(props.userSubscription);
                },
            }
        );
    };
    return (

        <Authenticated auth={auth}> {/* Authenticated Nama file */}
            {/* <Head title="Subscription Plan">
                <script
                    src="https://app.sandbox.midtrans.com/snap/snap.js"
                    data-client-key={env.MIDTRANS_CLIENTKEY}
                ></script>
            </Head> */}
            {/*  START: Content */}
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences from movies.
                    </p>

                    {/*  Pricing Card */}
                    <div className="flex justify-center gap-10 mt-[70px]">
                        {/*  Basic */}
                        {subscriptionPlans.map((subscriptionPlan) => (
                            <SubscriptionCard
                                name={subscriptionPlan.name}
                                price={subscriptionPlan.price}
                                durationInMonth={
                                    subscriptionPlan.active_period_in_months
                                }
                                features={JSON.parse(subscriptionPlan.features)}
                                isPremium={subscriptionPlan.name === "Premium"}
                                key={subscriptionPlan.id}
                                onSelectSubscription={() =>
                                    selectSubscription(subscriptionPlan.id)
                                }
                            />
                        ))}
                    </div>
                    {/*  /Pricing Card */}
                </div>
            {/*  END: Content */}
        </Authenticated>
    );
}

