import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import ProductListClient from "@/components/ProductListClient";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userEmail = session?.user?.email;

  const productsPromise = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products?user=${userEmail}`,
  );
  const products = await productsPromise.json();

  return (
    <ProductListClient products={products} />
  );
}
