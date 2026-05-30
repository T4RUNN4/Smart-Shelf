"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    if (searchParams.has("not-logged-in")) {
      document.getElementById("login_modal")?.showModal();
    }
  }, [searchParams]);

  return <p>Hello World!</p>;
}
