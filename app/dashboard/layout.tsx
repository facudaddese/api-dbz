import type { Metadata } from "next";

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
    <div>
      <h1>{children}</h1>
    </div>
  );
}
