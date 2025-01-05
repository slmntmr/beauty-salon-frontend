import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <div className="container">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
