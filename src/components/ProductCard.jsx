import { CalendarDays, Pencil, Trash } from "lucide-react";

export default function ProductCard({ name, category, date, note, status }) {
  return (
    <div className="border border-solid border-black/30 rounded-lg flex flex-col gap-2 justify-center px-8 py-6 bg-base-100">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-black/50">{category.toUpperCase()}</p>
        <div className="flex">
          <button className="text-black/50 btn btn-ghost">
            <Pencil size={18} />
          </button>
          <button className="text-red-400 hover:text-red-600 btn btn-ghost">
            <Trash size={18} />
          </button>
        </div>
      </div>
      <h1
        className={`text-2xl ${status === "expired" ? "text-red-500" : status === "expiring" ? "text-yellow-500" : "text-[#738f6d]"} font-black flex items-center gap-2`}
      >
        {name}
      </h1>
      <p className="text-sm text-black/70 flex items-center gap-2">
        <CalendarDays size={20} /> {date}
      </p>
      <p className="text-sm text-black/50 mt-4">
        {note ? `Note: ${note}` : "No note added"}
      </p>

      {status === "expired" ? (
        <p className="text-red-400 text-sm font-bold mt-4">
          Warning: Expired products will be removed after 30 days
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
