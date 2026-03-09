
export interface EnergyReading {
  timestamp: number;
  voltage: number;
  current: number;
  power: number;
  energy: number;
  brightness: number;
  stepType: 'Light' | 'Normal' | 'Heavy';
}

export interface PredictionData {
  hour: string;
  predictedEnergy: number;
  expectedCrowdDensity: number;
}

export interface SystemStats {
  totalSteps: number;
  totalEnergyGenerated: number;
  peakVoltage: number;
  efficiency: number;
  currentStatus: 'Active' | 'Idle' | 'Maintenance';
}
