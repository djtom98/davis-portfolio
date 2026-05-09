import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Davis Jacob Thomas",
  description: "ML Engineer · AI Platform · LLMs · Agents · MLOps · Barcelona",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif" }}>
        <Providers>
          {/* Outer wrapper — flex row on desktop */}
          <div className="flex min-h-screen">

            {/* ── Desktop sidebar: occupies its own flex column ── */}
            <div
              className="hidden lg:block shrink-0"
              style={{ width: "15rem" }}   /* 240 px, matches w-60 */
            >
              {/* Sticky inner so nav stays in view while page scrolls */}
              <div
                className="sticky top-0 h-screen overflow-y-auto"
                style={{ background: "var(--sidebar)" }}
              >
                <Sidebar />
              </div>
            </div>

            {/* ── Content column ── */}
            <div className="flex-1 flex flex-col min-w-0">

              {/* Mobile top-bar (hidden on lg+) */}
              <MobileBar />

              <main className="flex-1">
                <div
                  className="max-w-2xl mx-auto px-6 sm:px-10 py-10 sm:py-14"
                >
                  {children}
                </div>
              </main>

            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

/* ── Thin import shim so MobileBar stays in this file ─────────── */
import { MobileBar } from "./components/MobileBar";
