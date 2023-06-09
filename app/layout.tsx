import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Rent a Car",
  description: "Discover the best cars for rent in your city",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
