import ProductCard from "@/components/ProductCard";

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <ProductCard
        name="রুচি বারবিকিউ চানাচুর"
        category="food"
        date="Sat, 29th May, 2026"
        note="ওয়ার্ড্রোবের নিচের তাকে"
        status="not expired"
      />
      <ProductCard
        name="Napa Syrup"
        category="medicine"
        date="Sat, 31th May, 2026"
        status="expiring"
      />
      <ProductCard
        name="Sunscreen Spf30++"
        category="cosmetic"
        date="Sat, 31th June, 2026"
        status="not expired"
      />
      <ProductCard
        name="রুচি বারবিকিউ চানাচুর"
        category="food"
        date="Sat, 29th May, 2026"
        note="ওয়ার্ড্রোবের নিচের তাকে"
        status="expired"
      />
    </div>
  );
}
