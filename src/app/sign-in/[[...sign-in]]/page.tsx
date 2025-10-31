"use client";

import { SignIn } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Battery, Footprints } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-[#0a0f1e] dark:to-[#0d1428] transition-colors">
      {/* Theme Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding & Features */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex flex-col justify-center space-y-8 px-8"
        >
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 dark:from-emerald-500 dark:to-cyan-600 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                SmartFoot
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
              Energy Harvesting Analytics Platform
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Transform footsteps into actionable insights. Monitor real-time energy generation,
              track performance metrics, and optimize your piezoelectric systems.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <TrendingUp className="w-6 h-6 text-emerald-500 mb-2" />
              <h3 className="font-semibold text-gray-800 dark:text-white">Live Analytics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Real-time data updates</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <Battery className="w-6 h-6 text-cyan-500 mb-2" />
              <h3 className="font-semibold text-gray-800 dark:text-white">Energy Tracking</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Monitor generation</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <Footprints className="w-6 h-6 text-blue-500 mb-2" />
              <h3 className="font-semibold text-gray-800 dark:text-white">Foot Traffic</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Visualize patterns</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <Zap className="w-6 h-6 text-purple-500 mb-2" />
              <h3 className="font-semibold text-gray-800 dark:text-white">Smart Insights</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">AI-powered reports</p>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-4">
            <div>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Installations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">1.2M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Energy Units Tracked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Sign In Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden flex flex-col items-center mb-8 space-y-3">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 dark:from-emerald-500 dark:to-cyan-600 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                SmartFoot
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Energy Harvesting Analytics
              </p>
            </div>

            {/* Clerk Sign In Component */}
            <div className="clerk-container">
              <SignIn
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "bg-white dark:bg-gray-800 shadow-2xl border-0 rounded-2xl",
                    headerTitle: "text-2xl font-bold text-gray-900 dark:text-white",
                    headerSubtitle: "text-gray-600 dark:text-gray-400",
                    socialButtonsBlockButton:
                      "bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200",
                    formButtonPrimary:
                      "bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg shadow-lg",
                    formFieldInput:
                      "bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg",
                    formFieldLabel: "text-gray-700 dark:text-gray-300 font-medium",
                    footerActionLink:
                      "text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold",
                    identityPreviewText: "text-gray-700 dark:text-gray-300",
                    identityPreviewEditButton: "text-cyan-600 dark:text-cyan-400",
                  },
                }}
                routing="path"
                path="/sign-in"
                afterSignInUrl="/dashboard"
                signUpUrl="/sign-up"
              />
            </div>

            {/* Footer Links */}
            <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <a
                href="/sign-up"
                className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold"
              >
                Sign up for free
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl -z-10" />
    </div>
  );
}
