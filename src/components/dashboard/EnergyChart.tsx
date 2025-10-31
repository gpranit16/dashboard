import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
        import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
        
        interface ChartData {
          time: string;
          energy: number;
        }
        
        interface EnergyChartProps {
          data: ChartData[];
        }
        
        export function EnergyChart({ data }: EnergyChartProps) {
          return (
            <Card className="bg-card/70 border-border/60 col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Energy Generated Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        borderColor: "hsl(var(--border))",
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="energy" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} dot={{ r: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          );
        }
