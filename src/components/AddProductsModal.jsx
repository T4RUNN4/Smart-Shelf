"use client";

import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

export default function AddProductsModal() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      productNote: data.productNote || "No note added",
      productExpiryDate: new Date(data.productExpiryDate),
      deleteDate: deleteDate.setDate(productExpiryDate.getDate() + 30),
      user: user.email,
    };
    console.log(formattedData);
    // reset();
  };

  const handleClear = () => {
    reset();
  };

  return (
    <dialog id="add_products_modal" className="modal">
      <div className="modal-box flex flex-col items-center justify-center gap-4 py-8 max-w-2xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col items-center justify-center mb-2">
          <h3 className="font-bold text-lg">Add product to track</h3>
          <p className="text-sm text-black/50">
            <span className="text-red-500">* </span>indicates required
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <div className="mb-2">
              <label className="label text-base mb-1">
                Name of the product <span className="text-red-500">* </span>
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Ruchi Barbeque Chanachur"
                {...register("productName", { required: true })}
              />
              {errors.productName && (
                <span className="text-red-500">Product name is required</span>
              )}
            </div>

            <div className="flex gap-3">
              <div className="mb-2">
                <label className="label text-base mb-1">
                  Category of Product <span className="text-red-500">* </span>
                </label>

                <select
                  className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#738f6d]"
                  defaultValue=""
                  {...register("productCategory", { required: true })}
                >
                  <option disabled value="">
                    Select a category
                  </option>

                  <option value="Food">Food</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Cosmetics">Cosmetics</option>
                  <option value="Households">Households</option>
                  <option value="Others">Others</option>
                </select>

                {errors.productCategory && (
                  <span className="text-red-500">
                    Product category is required
                  </span>
                )}
              </div>

              <div className="mb-2">
                <label className="label text-base mb-1">
                  Expiring Date <span className="text-red-500">* </span>
                </label>
                <input
                  type="date"
                  className="input w-full"
                  placeholder="Ruchi Barbeque Chanachur"
                  {...register("productExpiryDate", { required: true })}
                />
                {errors.productExpiryDate && (
                  <span className="text-red-500">Add an expiry date</span>
                )}
              </div>
            </div>

            <div className="mb-2">
              <label className="label text-base mb-1">
                Note related to product
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Top of the red shelf"
                {...register("productNote", { required: false })}
              />
            </div>

            <div className="flex gap-2">
              <button className="btn bg-[#738f6d] text-white mt-4">
                <Plus /> Add Product
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="btn btn-ghost mt-4"
              >
                Clear Form
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </dialog>
  );
}
