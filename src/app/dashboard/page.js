import DashboardInfo from "@/sections/DashboardInfo";
import ProductList from "@/sections/ProductList";
import { Funnel, Search } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <DashboardInfo />
      <div className="flex justify-between mt-14 mb-4">
        <div className="flex gap-3">
          <label className="input">
            <input type="search" required placeholder="Napa Extra" />
          </label>
          <button className="btn btn-primary bg-[#738f6d] border-0 text-white">
            <Search /> Search Product
          </button>
        </div>
        <details className="dropdown">
          <summary className="btn m-1"><Funnel /> Filter Products</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm pl-6 py-4 flex flex-col gap-2">
            <li>All Products</li>
            <li>Fresh Products</li>
            <li>Expiring Products</li>
            <li>Expired Products</li>
          </ul>
        </details>
      </div>
      <ProductList />
    </>
  );
}
