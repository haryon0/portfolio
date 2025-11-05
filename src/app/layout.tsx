import { Navigation } from "@/components/portfolio/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="ml-24">{children}</main>
    </div>
  );
}