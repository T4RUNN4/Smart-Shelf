"use client";

import ProductCard from "@/components/ProductCard";
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}
