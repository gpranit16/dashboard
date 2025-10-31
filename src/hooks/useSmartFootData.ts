import { useState, useEffect } from 'react';

        const generateRandomValue = (min: number, max: number, decimals: number = 0) => {
          return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
        };
        
        const generateInitialChartData = () => {
          const data = [];
          const now = new Date();
          for (let i = 9; i >= 0; i--) {
            data.push({
              time: new Date(now.getTime() - i * 5000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
              energy: generateRandomValue(50, 200),
              traffic: generateRandomValue(10, 50),
            });
          }
          return data;
        };
        
        export const useSmartFootData = () => {
          const [stats, setStats] = useState({
            totalEnergy: 0,
            stepsCount: 0,
            avgPower: 0,
            activeTiles: 0,
            battery: 80,
          });
        
          const [chartData, setChartData] = useState(generateInitialChartData());
        
          const [tilePerformance, setTilePerformance] = useState([
            { id: 1, name: 'Alpha-01', lastUpdate: new Date(), energy: 75 },
            { id: 2, name: 'Beta-07', lastUpdate: new Date(), energy: 90 },
            { id: 3, name: 'Gamma-12', lastUpdate: new Date(), energy: 60 },
            { id: 4, name: 'Delta-04', lastUpdate: new Date(), energy: 82 },
            { id: 5, name: 'Epsilon-21', lastUpdate: new Date(), energy: 70 },
          ]);
        
          useEffect(() => {
            const interval = setInterval(() => {
              const newEnergy = generateRandomValue(0, 500);
              const newSteps = generateRandomValue(0, 1000);
              
              setStats(prev => ({
                totalEnergy: prev.totalEnergy + newEnergy,
                stepsCount: prev.stepsCount + newSteps,
                avgPower: generateRandomValue(10, 200, 1),
                activeTiles: 5,
                battery: generateRandomValue(60, 100),
              }));
        
              const now = new Date();
              const newTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
              
              setChartData(prev => {
                  const newData = [...prev.slice(1), {
                      time: newTime,
                      energy: generateRandomValue(50, 200),
                      traffic: generateRandomValue(10, 50),
                  }];
                  return newData;
              });
        
              setTilePerformance(prev => prev.map(tile => ({
                ...tile,
                lastUpdate: now,
                energy: generateRandomValue(50, 100),
              })));
        
            }, 5000);
        
            return () => clearInterval(interval);
          }, []);
        
          return { stats, chartData, tilePerformance };
        };
