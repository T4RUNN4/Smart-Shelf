import InfoCard from "@/components/InfoCard";

export default function DashboardInfo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <InfoCard digit="2" text="Tracking" />
      <InfoCard digit="1" text="Expiring within 3 days.." type="expiring" />
      <InfoCard digit="0" text="Expired" type="expired" />
    </div>
  );
}
