"use client";

import { authClient } from "@/lib/auth-client";
import { LayoutDashboard, LogIn, LogOut, Plus, UserPlus } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Navbar() {
  const { data } = authClient.useSession();
  const pathname = usePathname();

  const router = useRouter();

  const handleLogout = async () => {
    const response = await authClient.signOut();

    if(response.data.success === true) {
      toast.success("Logged out successfully");
      router.push('/');
    } else {
      toast.error("Something went wrong");
    }
  };

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
              <button
                onClick={() =>
                  document.getElementById("add_products_modal").showModal()
                }
                className="btn btn-primary bg-[#738f6d] border-0 text-white"
              >
                <Plus /> Add Product
              </button>
            ) : (
              <Link
                href="/dashboard"
                className="btn btn-primary bg-[#738f6d] border-0 text-white"
              >
                <LayoutDashboard /> Dashboard
              </Link>
            )}
            <button
              onClick={handleLogout}
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
