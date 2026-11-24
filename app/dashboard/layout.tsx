import { Sidebar } from "../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-screen w-screen overflow-hidden bg-slate-800 layout-grid-responsive md:layout-grid">
      <Sidebar />
      <main className="md:min-h-screen overflow-y-auto [grid-area:main]">
        {children}
      </main>
    </div>
  );
}
