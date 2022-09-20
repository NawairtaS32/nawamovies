import React from 'react';
import Input from "@/Components/Input";
import InputLabel from "@/Components/InputLabel";
import Button from "@/Components/Button";
import { Link,  Head } from "@inertiajs/inertia-react";

export default function Register(){
    return(
        <>
        <Head title="Sign Up" />
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <div className="fixed top-[-50px] hidden lg:block">
                <img src="/images/gambar2.jpg"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px] ml-[80px]" alt=""
                />
            </div>
            <div className="py-20 flex laptopLg:ml-[680px] laptopXl:ml-[810px]">
                <div>
                    <img src="/images/nawairtas.jpg"
                        className="hidden laptopLg:block laptopLg:max-w-[250px] laptopXl:max-w-[440px] ml-[-80px] " alt=""
                    />
                    <div className="my-[40px]">
                        <div className="font-semibold text-[32px] mb-3">
                            Sign Up
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br />
                            the better insight for your life
                        </p>
                    </div>
                    <form className="w-[370px]">
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel
                                forInput="fullname"
                                value="Full Name"
                                />
                                <Input
                                    type="text"
                                    name="fullname"
                                    placeholder="Your fullname..."
                                    defaultValue="Your fullname..."
                                />
                            </div>
                            <div>
                                <InputLabel
                                    forInput="email"
                                    value="Email Address"
                                    defaultValue="Email Address"
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    defaultValue="Your Email Address"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    forInput="password"
                                    value="Password"
                                />
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Your Password"
                                    value="eeeeeeeeeeeeeee"
                                />
                            </div>
                        </div>

                        <div className="grid space-y-[14px] mt-[30px]">
                            <Link href={route("prototype.dashboard")}>
                                <Button>
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                            </Link>
                            <Link href={route("prototype.login")}>
                                <Button variant="light-outline">
                                    <span className="text-base text-white">
                                        Sign In to My Account
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}
