import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "./components/Sidebar";

export const metadata: Metadata = {
  title: "Davis Jacob Thomas",
  description:
    "ML Engineer · AI Platform · LLMs · Agents · MLOps · Barcelona",
  openGraph: {
    title: "Davis Jacob Thomas",
    description:
      "ML Engineer with 6 years of experience building production-grade ML platforms, MLOps pipelines, and LLM/agentic systems.",
    url: "https://djtom98.github.io",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col lg:flex-row">
            <Sidebar />
            <main className="flex-1 lg:ml-64 min-h-screen">
              <div className="max-w-2xl mx-auto px-6 py-12 lg:py-16">
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
