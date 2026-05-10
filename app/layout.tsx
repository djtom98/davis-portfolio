import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "./components/Sidebar";
import { InteractiveGrid } from "./components/InteractiveGrid";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Davis Jacob Thomas",
  description: "ML Engineer · AI Platform · LLMs · Agents · MLOps · Barcelona",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Apply saved accent before paint to prevent flash */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var a=localStorage.getItem('accent')||'indigo';document.documentElement.dataset.accent=a;})();` }} />
      </head>
      <body style={{ fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif" }}>
        <Providers>
          <InteractiveGrid />
          {/* Outer wrapper — flex row on desktop */}
          <div className="flex min-h-screen" style={{ position: "relative", zIndex: 1 }}>

            {/* ── Content column ── */}
            <div className="flex-1 flex flex-col min-w-0">

              {/* Mobile top-bar (hidden on lg+) */}
              <MobileBar />

              <main className="flex-1">
                <div className="max-w-2xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
                  {children}
                </div>
              </main>

            </div>

            {/* ── Desktop sidebar: floating glass panel, right side ── */}
            <div
              className="hidden lg:flex shrink-0 flex-col"
              style={{ width: "16rem", padding: "12px 12px 12px 0" }}
            >
              <div
                className="sticky top-3 overflow-y-auto"
                style={{
                  height: "calc(100vh - 24px)",
                  borderRadius: "14px",
                  background: "var(--sidebar-glass)",
                  border: "1.5px solid var(--sidebar-glass-border)",
                  backdropFilter: "blur(24px) saturate(200%)",
                  WebkitBackdropFilter: "blur(24px) saturate(200%)",
                  boxShadow: "var(--sidebar-glass-shadow)",
                }}
              >
                <Sidebar />
              </div>
            </div>

          </div>
        </Providers>
      </body>
    </html>
  );
}

/* ── Thin import shim so MobileBar stays in this file ─────────── */
import { MobileBar } from "./components/MobileBar";
