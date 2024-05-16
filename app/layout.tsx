import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ConvexClientProvider from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskable",
  description: "The fastest and easiest way to manage notes",
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme:dark)",
        url:"/dark-logo.png",
        href: "/dark-logo.png"
      },
      {
        media:"(prefers-color-scheme:light)",
        url:"/light-logo.png",
        href: "/light-logo.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
        <ThemeProvider 
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="taskable-theme"
        >
        {children}
        </ThemeProvider>
        </ConvexClientProvider>
        </body>
    </html>
  );
}
