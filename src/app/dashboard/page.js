import DashboardInfo from "@/sections/DashboardInfo";
import ProductList from "@/sections/ProductList";

export default function Dashboard() {
  return (
    <>
      <DashboardInfo />
      <div className="flex gap-2 mt-14 mb-4">
        <button className="btn btn-primary bg-[#738f6d] text-white border-0">All Products</button>
        <button className="btn btn-ghost">Expiring soon</button>
        <button className="btn btn-ghost">Expired</button>
      </div>
      <ProductList />
    </>
  );
}
