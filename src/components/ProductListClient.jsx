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
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 mt-10 border-2 border-dotted border-gray-300 rounded-lg p-6">
          <MessageCircleWarning size={48} className="text-gray-400" />
          <p className="text-gray-400 text-sm">No products found.</p>
        </div>
      )}
    </>
  );
}
