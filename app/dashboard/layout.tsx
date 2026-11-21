import { Sidebar } from "../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-screen w-screen overflow-hidden bg-slate-800 layout-grid">
      <Sidebar />
      <main className="min-h-screen overflow-hidden overflow-y-auto">{children}</main>
    </div>
  );
}
