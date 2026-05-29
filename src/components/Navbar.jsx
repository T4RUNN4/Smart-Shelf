"use client";

import { LogIn, LogOut, Plus, UserPlus } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
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
        <button
          onClick={() => document.getElementById("login_modal").showModal()}
          className="btn btn-primary bg-[#738f6d] border-0 text-white"
        >
          <UserPlus /> Register
        </button>
        <button
          onClick={() => document.getElementById("login_modal").showModal()} className="btn btn-ghost">
          <LogIn /> Log In
        </button>
        {/* <a className="btn btn-primary bg-[#738f6d] border-0 text-white">
          <Plus /> Add Item
        </a>
        <a className="btn btn-error text-white"><LogOut /> Logout</a> */}
      </div>
    </div>
  );
}
