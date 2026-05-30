import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold">404 Not Found!</h2>
      <p className="text-black/70 text-xl">
        The page you are looking for isn't available at the moment
      </p>
      <div className="flex flex-row gap-4 mt-10">
        <Link
          className="btn btn-primary border-0 bg-[#738f6d] text-white"
          href="/"
        >
          Go to Dashboard
        </Link>
        <Link className="btn btn-ghost" href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
