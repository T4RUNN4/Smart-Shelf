"use client";

import { authClient } from "@/lib/auth-client";
import { LogIn, LogOut, Plus, UserPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data } = authClient.useSession();
  const pathname = usePathname();

  return (
    <div className="navbar bg-base-100 shadow-sm py-6 px-40">
      <div className="navbar-start flex flex-col gap-0.5 items-start">
        <Link href="/" className="text-3xl font-extrabold">
          <span className="text-[#738f6d]">Smart</span> Shelf
        </Link>
        <p className="text-sm text-black/50">
          Never forget your products expiration date
        </p>
      </div>
      <div className="navbar-end gap-1">
        {!data ? (
          <>
            <button
              onClick={() => document.getElementById("login_modal").showModal()}
              className="btn btn-primary bg-[#738f6d] border-0 text-white"
            >
              <UserPlus /> Register
            </button>
            <button
              onClick={() => document.getElementById("login_modal").showModal()}
              className="btn btn-ghost"
            >
              <LogIn /> Log In
            </button>
          </>
        ) : (
          <>
            {pathname === "/dashboard" ? (
              <button className="btn btn-primary bg-[#738f6d] border-0 text-white">
                <Plus /> Add Item
              </button>
            ) : (
              <Link
                href="/dashboard"
                className="btn btn-primary bg-[#738f6d] border-0 text-white"
              >
                Dashboard
              </Link>
            )}
            <button
              onClick={async () => await authClient.signOut()}
              className="btn btn-error text-white"
            >
              <LogOut /> Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

{
  /*
   */
}
