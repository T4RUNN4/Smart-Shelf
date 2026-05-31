"use client";

import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { addDays, format, subDays } from "date-fns";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AddProductsModal() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      productNote: data.productNote || "No note added",
      expiryWarningDate: format(
        subDays(new Date(data.productExpiryDate), 3),
        "MM/dd/yyyy",
      ),
      productExpiryDate: format(new Date(data.productExpiryDate), "MM/dd/yyyy"),
      deleteProductDate: format(
        addDays(new Date(data.productExpiryDate), 30),
        "MM/dd/yyyy",
      ),
      user: user?.email,
    };
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });

    const result = await res.json();
    if(result.acknowledged === true) {
      toast.success(`${data.productName} added for tracking`);
      reset();
      document.getElementById("add_products_modal").close();
      router.refresh();
    } else {
      toast.error("There is an issue. Please try again");
    }

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
