import "../styles/globals.css";

import Link from "next/link";

export const metadata = {
  title: "Scheduling Platform",
  description: "Cal.com inspired scheduling application"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-root">
        {/* HEADER */}
        <header className="header">
          <Link href="/" className="header-title">
            Smart Scheduling Platform
          </Link>
        </header>

        {/* MAIN CONTENT */}
        <main className="main-content">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <Link href="/">
            <button className="footer-btn">Home</button>
          </Link>

          <Link href="/dashboard">
            <button className="footer-btn">Dashboard</button>
          </Link>

          <Link href="/book/30-min-meeting">
            <button className="footer-btn">Book Meeting</button>
          </Link>
        </footer>
      </body>
    </html>
  );
}
