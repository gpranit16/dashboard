import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "SmartFoot Dashboard",
  description: "Smart Energy Analytics with Footstep Energy Harvesting",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#061422] dark:to-[#071029] text-gray-900 dark:text-slate-100 transition-colors">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
