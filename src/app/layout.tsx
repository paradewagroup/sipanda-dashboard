import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sidebar } from "@/components/sidebar"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "SIPANDA Dashboard",
  description: "Sistem Informasi Pendapatan Daerah",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="flex h-screen overflow-hidden bg-background text-foreground transition-colors duration-300">

            {/* SIDEBAR */}
            <Sidebar />

            {/* MAIN APPLICATION */}
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden">

              {/* TOP HEADER */}
              <header className="relative z-10 flex h-16 shrink-0 items-center justify-between border-b border-border bg-background/95 px-5 backdrop-blur-xl transition-colors duration-300 md:px-7">

                <div className="flex items-center gap-3">
                  <div className="md:hidden">
                    <span className="text-lg font-bold tracking-wider text-foreground">
                      SIPANDA
                    </span>
                  </div>

                  <div className="hidden text-xs text-muted-foreground md:block">
                    Intelligence Command Center
                  </div>
                </div>

                <div className="ml-auto flex items-center gap-3">
                  <ThemeToggle />
                </div>

              </header>

              {/* PAGE CONTENT */}
              <main className="custom-scrollbar min-h-0 flex-1 overflow-y-auto bg-background p-4 transition-colors duration-300 md:p-6 lg:p-8">
                {children}
              </main>

            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}