"use client";

import { SignUp } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { Zap, Shield, Sparkles, Globe, CheckCircle } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-[#0a0f1e] dark:to-[#0d1428] transition-colors">
      {/* Theme Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding & Benefits */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex flex-col justify-center space-y-8 px-8"
        >
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-500 dark:from-purple-500 dark:to-blue-600 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                SmartFoot
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
              Join the Future of Energy Analytics
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Get started in seconds. No credit card required. Access powerful analytics and
              monitoring tools for your piezoelectric energy systems.
            </p>
          </div>

          {/* Benefits List */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 mt-0.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Real-Time Monitoring</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Track energy generation and foot traffic with live updates every 5 seconds
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 mt-0.5">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Beautiful Dashboards</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Stunning visualizations with interactive charts and animated metrics
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 mt-0.5">
                <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Enterprise Security</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Bank-level encryption and secure authentication powered by Clerk
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 mt-0.5">
                <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Global Access</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Access your analytics anywhere, anytime, on any device
                </p>
              </div>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Trusted by leading organizations</p>
            <div className="flex gap-6 opacity-60">
              <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">ENERGY</div>
              <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">TECH</div>
              <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">IOT</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Sign Up Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden flex flex-col items-center mb-8 space-y-3">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-500 dark:from-purple-500 dark:to-blue-600 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                SmartFoot
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Create your free account
              </p>
            </div>

            {/* Clerk Sign Up Component */}
            <div className="clerk-container">
              <SignUp
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "bg-white dark:bg-gray-800 shadow-2xl border-0 rounded-2xl",
                    headerTitle: "text-2xl font-bold text-gray-900 dark:text-white",
                    headerSubtitle: "text-gray-600 dark:text-gray-400",
                    socialButtonsBlockButton:
                      "bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200",
                    formButtonPrimary:
                      "bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg",
                    formFieldInput:
                      "bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg",
                    formFieldLabel: "text-gray-700 dark:text-gray-300 font-medium",
                    footerActionLink:
                      "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold",
                    identityPreviewText: "text-gray-700 dark:text-gray-300",
                    identityPreviewEditButton: "text-blue-600 dark:text-blue-400",
                  },
                }}
                routing="path"
                path="/sign-up"
                afterSignUpUrl="/dashboard"
                signInUrl="/sign-in"
              />
            </div>

            {/* Footer Links */}
            <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a
                href="/sign-in"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
              >
                Sign in
              </a>
            </p>

            <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
              By signing up, you agree to our{" "}
              <a href="#" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                Privacy Policy
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl -z-10" />
    </div>
  );
}
