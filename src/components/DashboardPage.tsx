"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";
import { Battery, Wifi, Activity, Users } from "lucide-react";

type Tile = {
  id: string;
  name: string;
  output: number;
  lastUpdate: string;
};

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function DashboardPage() {
  const [energy, setEnergy] = useState(120);
  const [steps, setSteps] = useState(420);
  const [avgPower, setAvgPower] = useState(85);
  const [battery, setBattery] = useState(88);
  const [tiles, setTiles] = useState<Tile[]>(() =>
    [...Array(5)].map((_, i) => ({
      id: String(i + 1),
      name: `Tile-${i + 1}`,
      output: randomInt(0, 100),
      lastUpdate: new Date().toLocaleTimeString(),
    }))
  );

  const [energyHistory, setEnergyHistory] = useState(() =>
    [...Array(12)].map((_, i) => ({ time: `${i}`, value: randomInt(0, 400) }))
  );

  const [trafficHistory, setTrafficHistory] = useState(() =>
    [...Array(12)].map((_, i) => ({ time: `${i}`, value: randomInt(0, 80) }))
  );

  useEffect(() => {
    const id = setInterval(() => {
      const newEnergy = randomInt(0, 500);
      const newSteps = randomInt(0, 1000);
      const newAvg = randomInt(10, 200);
      const newBattery = Math.max(60, randomInt(60, 100));

      setEnergy(newEnergy);
      setSteps(newSteps);
      setAvgPower(newAvg);
      setBattery(newBattery);

      setTiles((prev) =>
        prev.map((t) => ({ ...t, output: randomInt(0, 200), lastUpdate: new Date().toLocaleTimeString() }))
      );

      setEnergyHistory((prev) => {
        const next = [...prev.slice(-11), { time: new Date().toLocaleTimeString().slice(6), value: newEnergy }];
        return next;
      });

      setTrafficHistory((prev) => {
        const next = [...prev.slice(-11), { time: new Date().toLocaleTimeString().slice(6), value: randomInt(0, 120) }];
        return next;
      });
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const totalEnergy = useMemo(() => energy, [energy]);

  return (
    <div className="space-y-6">
      <motion.header initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
          Smart Footstep Energy Dashboard
        </h2>
        <p className="text-sm text-gray-600 dark:text-white/60 mt-1">Live simulated telemetry — auto-refreshing every 5 seconds</p>
      </motion.header>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div key={totalEnergy} className="card-light dark:card-dark" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-white/80">Total Energy</p>
              <motion.div className="text-2xl font-bold mt-2 bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {totalEnergy} J
              </motion.div>
            </div>
            <Activity className="text-emerald-500 dark:text-white/80" />
          </div>
        </motion.div>

        <motion.div className="card-light dark:card-dark" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-white/80">Steps Count</p>
              <div className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">{steps}</div>
            </div>
            <Users className="text-blue-500 dark:text-white/80" />
          </div>
        </motion.div>

        <motion.div className="card-light dark:card-dark" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-white/80">Avg Power</p>
              <div className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">{avgPower} mW</div>
            </div>
            <div className="text-cyan-500 dark:text-white/80">mW</div>
          </div>
        </motion.div>

        <motion.div className="card-light dark:card-dark" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-white/80">Battery</p>
              <div className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">{battery}%</div>
            </div>
            <Battery className="text-purple-500 dark:text-white/80" />
          </div>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 card-light dark:card-dark">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Energy Generated Over Time</h3>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <LineChart data={energyHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-white/10" />
                <XAxis dataKey="time" tick={{ fill: '#6b7280' }} className="dark:fill-white/50" />
                <YAxis tick={{ fill: '#6b7280' }} className="dark:fill-white/50" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgb(17 24 39)', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line type="monotone" dataKey="value" stroke="#7c3aed" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-light dark:card-dark">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Foot Traffic per Minute</h3>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <BarChart data={trafficHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-white/10" />
                <XAxis dataKey="time" tick={{ fill: '#6b7280' }} className="dark:fill-white/50" />
                <YAxis tick={{ fill: '#6b7280' }} className="dark:fill-white/50" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgb(17 24 39)', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="value" fill="#0ea5e9" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="card-light dark:card-dark lg:col-span-2">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">System Status</h3>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Battery className="text-purple-500" />
              <div>
                <p className="text-sm text-gray-600 dark:text-white/80">Battery</p>
                <div className="font-bold text-gray-900 dark:text-white">{battery}%</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Wifi className="text-cyan-500" />
              <div>
                <p className="text-sm text-gray-600 dark:text-white/80">Connection</p>
                <div className="flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${Math.random() > 0.15 ? 'bg-green-400' : 'bg-red-500'} block`} />
                  <span className="text-sm text-gray-900 dark:text-white">{Math.random() > 0.15 ? 'Online' : 'Degraded'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {tiles.map((t) => (
              <div key={t.id} className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-white/60">Last: {t.lastUpdate}</div>
                </div>
                <div className="w-1/2">
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                    <div 
                      style={{ width: `${Math.min(100, Math.round((t.output / 200) * 100))}%` }} 
                      className="h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all" 
                    />
                  </div>
                </div>
                <div className="ml-3 w-14 text-right text-gray-900 dark:text-white">{t.output}J</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-light dark:card-dark">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Quick Summary</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-white/80">Avg Power</div>
              <div className="font-semibold text-gray-900 dark:text-white">{avgPower} mW</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-white/80">Active Tiles</div>
              <div className="font-semibold text-gray-900 dark:text-white">{tiles.length}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-white/80">Steps</div>
              <div className="font-semibold text-gray-900 dark:text-white">{steps}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
