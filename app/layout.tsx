import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "./components/Sidebar";

export const metadata: Metadata = {
  title: "Davis Jacob Thomas",
  description: "ML Engineer · AI Platform · LLMs · Agents · MLOps · Barcelona",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ background: "var(--bg)" }}>
        <Providers>
          <div
            className="flex min-h-screen"
            style={{ background: "var(--bg-gradient)" }}
          >
            <Sidebar />
            {/* Main content — offset by sidebar width on desktop */}
            <main className="flex-1 lg:pl-60 min-h-screen flex flex-col">
              <div className="max-w-2xl w-full px-6 sm:px-10 py-10 sm:py-14">
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
