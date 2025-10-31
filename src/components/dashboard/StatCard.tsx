import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
        import { motion } from "framer-motion";
        import { AnimatedCounter } from "./AnimatedCounter";
        
        interface StatCardProps {
          title: string;
          value: number;
          previousValue: number;
          unit: string;
          icon: React.ReactNode;
          toFixed?: number;
        }
        
        export function StatCard({ title, value, previousValue, unit, icon, toFixed = 0 }: StatCardProps) {
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card/70 border-border/60">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
                  {icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    <AnimatedCounter from={previousValue} to={value} toFixed={toFixed} /> {unit}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        }
