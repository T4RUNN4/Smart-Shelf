"use client";

import ProductCard from "@/components/ProductCard";
import { MessageCircleWarning } from "lucide-react";
import { useForm } from "react-hook-form";

export default function ProductListClient({ products }) {
  const { register, watch } = useForm();

  const keyword = watch("keyword", "");

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <>
      <label className="input my-8">
        <input
          type="search"
          required
          placeholder="Search Products..."
          {...register("keyword", { required: true })}
        />
      </label>
      <div className="flex gap-3 items-center justify-center border border-solid border-red-400 rounded-md p-4 mt-4 mb-6 text-red-400 text-xs sm:text-sm font-bold">
        <MessageCircleWarning /> Warning: Expired products will automatically be deleted from the list after 30 days
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}
