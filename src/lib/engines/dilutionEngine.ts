export interface DilutionInputs {
  initialVolume: number;
  initialAbv: number; // percentage (e.g., 40 for 40%)
  targetAbv: number;  // percentage
}

export interface DilutionOutputs {
  waterVolumeToAdd: number;
  finalTotalVolume: number;
  dilutionFactor: number;
}

export function calculateDilution(inputs: DilutionInputs): DilutionOutputs {
  if (inputs.targetAbv >= inputs.initialAbv) {
    throw new Error('Target ABV must be less than Initial ABV for dilution.');
  }
  if (inputs.targetAbv <= 0) {
    throw new Error('Target ABV must be greater than 0.');
  }

  // C1 * V1 = C2 * V2
  // V2 = (C1 * V1) / C2
  const finalTotalVolume = (inputs.initialAbv * inputs.initialVolume) / inputs.targetAbv;
  const waterVolumeToAdd = finalTotalVolume - inputs.initialVolume;
  const dilutionFactor = finalTotalVolume / inputs.initialVolume;

  return {
    waterVolumeToAdd: Number(waterVolumeToAdd.toFixed(2)),
    finalTotalVolume: Number(finalTotalVolume.toFixed(2)),
    dilutionFactor: Number(dilutionFactor.toFixed(2)),
  };
}
