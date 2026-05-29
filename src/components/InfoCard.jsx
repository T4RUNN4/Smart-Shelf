export default function InfoCard({ digit, text, type }) {
  return (
    <div className="border border-solid border-black/30 rounded-lg flex flex-col gap-2 items-center justify-center p-4 bg-base-100">
      <h1
        className={`text-4xl ${type === "expired" ? "text-red-500" : type === "expiring" ? "text-yellow-500" : "text-[#738f6d]"} font-black`}
      >
        {digit}
      </h1>
      <p className="text-sm text-black/50">{text}</p>
    </div>
  );
}
