
import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TileSimulator from './components/TileSimulator';
import Analytics from './components/Analytics';
import { EnergyReading, SystemStats } from './types';
import { Share2, Bell, Settings, Search } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [history, setHistory] = useState<EnergyReading[]>([]);
  const [stats, setStats] = useState<SystemStats>({
    totalSteps: 0,
    totalEnergyGenerated: 0,
    peakVoltage: 0,
    efficiency: 92.4,
    currentStatus: 'Active'
  });

  const handleNewReading = useCallback((reading: EnergyReading) => {
    setHistory(prev => [...prev.slice(-99), reading]);
    setStats(prev => ({
      ...prev,
      totalSteps: prev.totalSteps + 1,
      totalEnergyGenerated: prev.totalEnergyGenerated + reading.energy,
      peakVoltage: Math.max(prev.peakVoltage, reading.voltage)
    }));
  }, []);

  return (
    <div className="flex bg-futuristic min-h-screen text-black font-sans relative overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none opacity-40"></div>
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="ml-64 flex-1 flex flex-col min-h-screen relative z-10">
        {/* Top Navigation / Header */}
        <header className="h-20 border-b border-sky-200/50 bg-white/40 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Search bar removed */}
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-xl border border-sky-200/50 text-sky-700 bg-white/60 hover:bg-white transition-colors shadow-sm">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2.5 rounded-xl border border-sky-200/50 text-sky-700 bg-white/60 hover:bg-white transition-colors relative shadow-sm">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-[1px] h-6 bg-sky-200/50 mx-2"></div>
            <button className="flex items-center gap-3 bg-sky-600 text-white pl-4 pr-2 py-1.5 rounded-xl hover:bg-sky-700 transition-colors shadow-lg shadow-sky-600/20">
              <span className="text-sm font-bold uppercase tracking-tighter">Admin Portal</span>
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Settings className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 max-w-7xl mx-auto w-full">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-5xl font-black text-black tracking-tighter uppercase italic glow-text-blue">
                {activeTab === 'dashboard' && 'Main Hub'}
                {activeTab === 'simulator' && 'Piezo Lab'}
                {activeTab === 'analytics' && 'AI Core'}
              </h1>
              <p className="text-sky-800 mt-1 font-medium uppercase text-xs tracking-widest opacity-80">
                {activeTab === 'dashboard' && 'Monitoring node WP-NODE-X0429 in real-time'}
                {activeTab === 'simulator' && 'Hardware testing environment for piezoelectric material response'}
                {activeTab === 'analytics' && 'Deep learning insights for urban energy management'}
              </p>
            </div>
            
            {activeTab === 'dashboard' && (
              <div className="flex gap-2">
                 <div className="px-4 py-2 bg-white/80 text-sky-800 rounded-xl border border-sky-200/50 flex items-center gap-2 shadow-sm">
                   <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
                   <span className="text-sm font-bold">LIVE FEED</span>
                 </div>
              </div>
            )}
          </div>

          <div className="min-h-[600px]">
            {activeTab === 'dashboard' && <Dashboard history={history} stats={stats} onStep={handleNewReading} />}
            {activeTab === 'simulator' && <TileSimulator onStep={handleNewReading} />}
            {activeTab === 'analytics' && <Analytics history={history} />}
          </div>
        </div>

        {/* Footer info */}
        <footer className="mt-auto p-8 border-t border-sky-200/50 bg-white/40">
          <div className="flex justify-between items-center opacity-60 hover:opacity-100 transition-opacity">
            <p className="text-xs font-bold text-black uppercase tracking-widest">&copy; 2025 PowerStep - Sustainable Urban Solutions</p>
            <div className="flex gap-6 text-xs font-bold text-black uppercase tracking-widest">
              <span>Security Hub</span>
              <span>API Docs</span>
              <span>Support</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
