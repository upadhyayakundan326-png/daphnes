import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Daphnes Cafe",
  description: "Premium Cafe Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}