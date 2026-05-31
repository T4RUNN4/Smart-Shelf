"use client";
import { addDays, compareAsc, format, startOfToday } from "date-fns";
import { CalendarDays, Pencil, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function ProductCard({ product }) {
  const router = useRouter();
  const today = startOfToday();
  const expiryDate = new Date(product.productExpiryDate);

  const result = compareAsc(today, expiryDate);

  let status = "";

  if (result === 1) {
    status = "expired";
  } else if (compareAsc(addDays(today, 4), expiryDate) >= 0) {
    status = "expiring";
  } else {
    status = "not expired";
  }

  const handleDelete = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${product._id}`,
      {
        method: "DELETE",
      },
    );
    const result = await response.json();
    
    if(result.acknowledged === true) {
      toast.success(`${product.productName} is removed from tracking`);
      router.refresh();
    } else {
      toast.error("There is a issue. Please try again");
    }
  };

  return (
    <div className="border border-solid border-black/30 rounded-lg flex flex-col gap-2 justify-center px-8 py-6 bg-base-100">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-black/50">
          {product.productCategory.toUpperCase()}
        </p>
        <div className="flex">
          <button className="text-black/50 btn btn-ghost">
            <Pencil size={18} />
          </button>
          <button
            onClick={handleDelete}
            className="text-red-400 hover:text-red-600 btn btn-ghost"
          >
            <Trash size={18} />
          </button>
        </div>
      </div>
      <h1
        className={`text-2xl ${status === "expired" ? "text-red-500" : status === "expiring" ? "text-yellow-500" : "text-[#738f6d]"} font-black flex items-center gap-2`}
      >
        {product.productName}
      </h1>
      <p className="text-sm text-black/70 flex items-center gap-2">
        <CalendarDays size={20} />{" "}
        {format(new Date(product.productExpiryDate), "do MMM, yyyy")}
      </p>
      <p className="text-sm text-black/50 mt-4">
        {product.productNote ? `Note: ${product.productNote}` : "No note added"}
      </p>

      {status === "expired" ? (
        <p className="text-red-400 text-sm font-medium mt-4">
          Expired products will be removed after 30 days
        </p>
      ) : status === "expiring" ? (
        <p className="text-yellow-500 text-sm font-medium mt-4">
          {product.productName} is about to expire
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
