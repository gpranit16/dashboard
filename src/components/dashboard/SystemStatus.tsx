import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
        import { Progress } from "@/components/ui/progress";
        import { Separator } from "@/components/ui/separator";
        import { BatteryFull, Wifi } from "lucide-react";
        
        interface Tile {
          id: number;
          name: string;
          lastUpdate: Date;
          energy: number;
        }
        
        interface SystemStatusProps {
          battery: number;
          tiles: Tile[];
        }
        
        export function SystemStatus({ battery, tiles }: SystemStatusProps) {
          return (
            <Card className="bg-card/70 border-border/60">
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-emerald-400" />
                    <span className="font-medium">Connection Status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse-led" />
                    <span className="text-emerald-400">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <BatteryFull className="h-5 w-5 text-emerald-400" />
                        <span className="font-medium">Battery</span>
                    </div>
                    <div className="w-1/2 flex items-center gap-2">
                        <Progress value={battery} className="h-2" />
                        <span className="text-sm text-muted-foreground">{battery.toFixed(0)}%</span>
                    </div>
                </div>
                <Separator />
                <div>
                  <h4 className="text-sm font-medium mb-4">Active Tile Performance</h4>
                  <div className="space-y-4">
                    {tiles.map((tile) => (
                      <div key={tile.id} className="text-sm">
                        <div className="flex justify-between mb-1">
                          <span>{tile.name}</span>
                          <span className="text-muted-foreground">{tile.energy.toFixed(0)} J</span>
                        </div>
                        <Progress value={tile.energy} className="h-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        }
