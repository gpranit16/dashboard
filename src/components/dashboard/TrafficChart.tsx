import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
        import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
        
        interface ChartData {
            time: string;
            traffic: number;
        }
        
        interface TrafficChartProps {
            data: ChartData[];
        }
        
        export function TrafficChart({ data }: TrafficChartProps) {
          return (
            <Card className="bg-card/70 border-border/60">
              <CardHeader>
                <CardTitle>Foot Traffic per Minute</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        borderColor: "hsl(var(--border))",
                      }}
                      cursor={{fill: 'hsl(var(--secondary))'}}
                    />
                    <Legend />
                    <Bar dataKey="traffic" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          );
        }
