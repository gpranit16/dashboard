import { useSmartFootData } from "@/hooks/useSmartFootData";
        import { StatCard } from "@/components/dashboard/StatCard";
        import { EnergyChart } from "@/components/dashboard/EnergyChart";
        import { TrafficChart } from "@/components/dashboard/TrafficChart";
        import { SystemStatus } from "@/components/dashboard/SystemStatus";
        import { Zap, Footprints, Power, CheckCircle } from "lucide-react";
        import { motion } from "framer-motion";
        import { usePrevious } from "@uidotdev/usehooks";

        export function DashboardPage() {
          const { stats, chartData, tilePerformance } = useSmartFootData();
          const prevStats = usePrevious(stats);

          return (
            <div className="container mx-auto p-4 md:p-8 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center"
              >
                <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 animate-glow">
                  Smart Footstep Energy Dashboard
                </h1>
              </motion.div>
        
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Total Energy" value={stats.totalEnergy} previousValue={prevStats?.totalEnergy ?? 0} unit="J" icon={<Zap className="h-4 w-4 text-muted-foreground" />} toFixed={0} />
                <StatCard title="Steps Count" value={stats.stepsCount} previousValue={prevStats?.stepsCount ?? 0} unit="" icon={<Footprints className="h-4 w-4 text-muted-foreground" />} toFixed={0} />
                <StatCard title="Avg Power" value={stats.avgPower} previousValue={prevStats?.avgPower ?? 0} unit="mW" icon={<Power className="h-4 w-4 text-muted-foreground" />} toFixed={1} />
                <StatCard title="Active Tiles" value={stats.activeTiles} previousValue={prevStats?.activeTiles ?? 0} unit="" icon={<CheckCircle className="h-4 w-4 text-muted-foreground" />} />
              </div>
        
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              >
                <EnergyChart data={chartData} />
                <TrafficChart data={chartData} />
                <SystemStatus battery={stats.battery} tiles={tilePerformance} />
              </motion.div>
            </div>
          );
        }
