import type { Metadata } from "next";
import { Sidebar } from "../components";

export const metadata: Metadata = {
  title: "Title",
  description: "Description",
};

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-screen w-screen bg-slate-800 layout-grid">
      <Sidebar />
      <main className="h-screen">{children}</main>
    </div>
  );
}
