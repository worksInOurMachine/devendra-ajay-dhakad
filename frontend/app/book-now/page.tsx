"use client";
import { Input } from "@/components/ui/ac-input";
import { Label } from "@/components/ui/ac-label";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { strapi } from "@/lib/api/sdk";
export default function SignupFormDemo() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { data: session } = useSession();
    const userId = session?.user?.id;


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (!userId) {
                return router.push("/auth/register");
            }
            //@ts-ignore
            const name = e.currentTarget.name.value;
            const phone = e.currentTarget.phone.value;
            await strapi.create("bookinggs", {
                name,
                phone: Number(phone),
                user: Number(userId),
            });
            toast.success("Booking successful");
            router.push("/");

        } catch (error) {
            console.log("Login Error", error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="shadow-input mt-10 mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                Book now your BMW-i8!
            </h2>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                        id="name"
                        placeholder="John Doe"
                        type="text"
                        required
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                        id="phone"
                        placeholder="8305183569"
                        type="number"
                        required
                    />
                </LabelInputContainer>
                <button
                    className="group/btn relative cursor-pointer block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? (
                        <div className=" flex justify-center items-center w-full">
                            <LoaderCircle className=" rotate-180 spin-in animate-spin text-center" />
                        </div>
                    ) : (
                        <>
                            Book now &rarr;
                            <BottomGradient />
                        </>
                    )}
                </button>


                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
