import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="container mx-auto flex flex-col items-center justify-center text-center px-4 py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-cyan-400 to-purple-500"
      >
        Unlock the Power of Every Step.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="max-w-2xl mt-6 text-lg md:text-xl text-muted-foreground"
      >
        A modern, animated analytics dashboard for your piezoelectric energy-harvesting system. Turn foot traffic into actionable data.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-8 flex flex-col sm:flex-row items-center gap-4"
      >
        <Link to="/dashboard">
          <Button size="lg" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20">
            Get Started for Free
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button size="lg" variant="ghost" className="w-full sm:w-auto text-muted-foreground hover:text-foreground">
            View a Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-16 w-full max-w-4xl"
      >
        <div className="relative rounded-xl animate-border-glow">
            <img
                src="https://i.ibb.co/67X3xfS/smartfoot-dashboard-preview.png"
                alt="SmartFoot Dashboard Preview"
                className="rounded-xl w-full h-auto border-2 border-emerald-500/30"
            />
        </div>
      </motion.div>
    </motion.div>
  );
}
