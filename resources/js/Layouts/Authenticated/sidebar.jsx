import SubscriptionDetail from "@/Layouts/Authenticated/SubscriptionDetail";
import MenuItem from "./MenuItem";
import { UserMenu, UserOthers } from "./MenuList";
import { Link } from "@inertiajs/inertia-react";
import { Head } from '@inertiajs/inertia-react';

export default function Sidebar({auth}){
    return(
        <aside className="fixed z-50 w-[300px] h-full">
            <Head title="Payments" />

            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/nawairtas2.jpg"
                        className="hidden laptopLg:block laptopLg:max-w-[320px]  ml-[-20px] laptopXl:max-w-[280px] " alt=""
                    />
                </a>
                <div className="links flex flex-col mt-[40px] h-full gap-[50px]">

                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {UserMenu.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                            />
                        ))}
                    </div>
                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {UserOthers.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                                method={menu.method}
                            />
                        ))}
                    </div>

                    {auth.activePlan && (
                            <SubscriptionDetail
                                name={auth.activePlan.name}
                                isPremium={auth.activePlan.name === "Premium"}
                                remainingActiveDays={
                                    auth.activePlan.remainingActiveDays
                                }
                                activeDays={auth.activePlan.activeDays}
                            />
                    )}
                </div>
            </div>
        </aside>
    );
}
