
import React from 'react';
import { Zap, Activity, Battery, Users, Cpu, ShieldCheck } from 'lucide-react';

export const SYSTEM_CONFIG = {
  PIEZO_SENSITIVITY: 0.85,
  BASE_VOLTAGE: 12.0,
  MAX_VOLTAGE: 48.0,
  UPDATE_INTERVAL: 1000,
  STORAGE_CAPACITY_MJ: 5000,
};

export const NAVIGATION_ITEMS = [
  { id: 'dashboard', label: 'Live Dashboard', icon: <Activity className="w-5 h-5" /> },
  { id: 'simulator', label: 'Tile Simulator', icon: <Zap className="w-5 h-5" /> },
  { id: 'analytics', label: 'AI Analytics', icon: <Cpu className="w-5 h-5" /> },
];

export const STEP_THRESHOLDS = {
  LIGHT: 5,
  NORMAL: 15,
  HEAVY: 30
};
