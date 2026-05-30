import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import ProductCard from "@/components/ProductCard";

export default async function ProductList() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userEmail = session?.user?.email;

  const productsPromise = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products?user=${userEmail}`,
  );
  const products = await productsPromise.json();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      }
    </div>
  );
}
