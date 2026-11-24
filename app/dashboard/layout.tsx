import { Sidebar } from "../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-dvh w-screen overflow-hidden bg-slate-800 layout-grid-responsive md:layout-grid">
      <Sidebar />
      <main className="lg:min-h-screen overflow-x-hidden overflow-y-auto [grid-area:main] ">
        {children}
      </main>
    </div>
  );
}
