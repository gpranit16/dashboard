"use client";

import React, { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (isSignedIn) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-[#0a0f1e] dark:to-[#0d1428] transition-colors">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-500 dark:from-emerald-500 dark:to-cyan-600 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-500 dark:from-emerald-500 dark:to-cyan-600 shadow-2xl">
                <Zap className="w-16 h-16 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent leading-tight">
              SmartFoot Dashboard
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
              Piezoelectric Energy Harvesting Analytics
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Transform every footstep into actionable insights. Monitor real-time energy generation,
              visualize foot traffic patterns, and optimize your piezoelectric systems with our
              beautiful, AI-powered analytics platform.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <a
              href="/sign-up"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/sign-in"
              className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Sign In
            </a>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center pt-8"
          >
            <div className="px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              Real-time Analytics
            </div>
            <div className="px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-500" />
              Live Monitoring
            </div>
            <div className="px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-500" />
              Beautiful Charts
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 dark:bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
    </div>
  );
}
