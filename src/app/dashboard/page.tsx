import React from "react";
import dynamic from "next/dynamic";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/ThemeToggle";

const DashboardPage = dynamic(() => import("../../components/DashboardPage"), { ssr: false });

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#061422] dark:to-[#071029] transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-extrabold text-2xl bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            ⚡ SmartFoot
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="p-6 max-w-7xl mx-auto">
        <DashboardPage />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-white/60">
        Powered by Piezoelectric Innovation | © 2025 SmartFoot Labs
      </footer>
    </div>
  );
}
