"use client";
import { BellRing, CalendarCheck, MoveRight, PackagePlus, UserPlus } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Hero from "../../public/hero.jpeg";
import Image from "next/image";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has("not-logged-in")) {
      document.getElementById("login_modal")?.showModal();
    }
  }, [searchParams]);

  return (
    <>
      <div className="flex items-center justify-center gap-18 mt-20">
        <Image src={Hero} height={500} width={500} />
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-[#738f6d]">
            Tired Of Products Getting Expired?
          </h2>
          <p className="text-black/70 mt-6 mb-8 max-w-4xl">
            Well, just sign-up, add products and let{" "}
            <span className="font-bold text-[#738f6d]">Smart Shelf</span> handle
            that for you. You will be notified when the day approaching
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => document.getElementById("login_modal").showModal()}
              className="btn btn-primary bg-[#738f6d] border-0 text-white"
            >
              <UserPlus /> Register
            </button>
            <Link
              href="/dashboard"
              className="btn btn-ghost border-2 border-gray-300"
            >
              Get Started <MoveRight />
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-20 border-2 border-gray-200"></hr>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-[#738f6d]">How it works</h2>
        <p className="text-black/70 mt-3 mb-8">
          Your product tracking happens in just 3 steps
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
          <div className="bg-base-200 flex flex-col items-center justify-center rounded-md border-2 border-gray-300 px-6 py-8">
            <PackagePlus size={40} />
            <h3 className="text-2xl font-bold mt-2">Add your items</h3>
            <p className="text-sm mt-4 text-black/70 text-center">
              Log anything with an expiration date — food, medicine, cosmetics,
              pet supplies.
            </p>
          </div>
          <div className="bg-base-200 flex flex-col items-center justify-center rounded-md border-2 border-gray-300 px-6 py-8">
            <CalendarCheck size={30} />
            <h3 className="text-2xl font-bold mt-2">Track dates</h3>
            <p className="text-sm mt-4 text-black/70 text-center">
              See everything at a glance, sorted by expiration, with clear
              status badges.
            </p>
          </div>
          <div className="bg-base-200 flex flex-col items-center justify-center rounded-md border-2 border-gray-300 px-6 py-8">
            <BellRing size={30} />
            <h3 className="text-2xl font-bold mt-2">Get notified</h3>
            <p className="text-sm mt-4 text-black/70 text-center">
              Allow notifications and we'll ping you the exact day something
              expires.
            </p>
          </div>
        </div>
      </div>
      <hr className="my-20 border-2 border-gray-200"></hr>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-[#738f6d]">Free Forever</h2>
        <p className="text-black/70 mt-3 mb-8">
          No credit card, no product limit. Just log-in and start tracking your
          product
        </p>
        <Link
          href="/dashboard"
          className="btn btn-primary bg-[#738f6d] border-0 text-white"
        >
          Go to Dashboard <MoveRight />
        </Link>
      </div>
    </>
  );
}
