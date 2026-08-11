export interface CakePricingInputs {
  servings: number;
  tierCount: number;
  complexityTier: 1 | 2 | 3 | 4 | 5;
  laborHours: number;
  hourlyRate: number;
  materialCost: number;
}

export interface CakePricingOutputs {
  minimumSuggestedPrice: number;
  pricePerSlice: number;
  laborCost: number;
  estimatedMargin: number; // percentage
}

export function calculateCakePricing(inputs: CakePricingInputs): CakePricingOutputs {
  const laborCost = inputs.laborHours * inputs.hourlyRate;
  
  // Complexity markup: 10% per tier of complexity above 1
  const complexityMarkup = 1 + ((inputs.complexityTier - 1) * 0.10);
  
  // Tier markup: fixed fee per tier for structural work (only for extra tiers)
  const tierMarkup = inputs.tierCount > 1 ? (inputs.tierCount - 1) * 25 : 0; 
  
  const baseCost = laborCost + inputs.materialCost;
  
  // Apply complexity to base cost
  const minimumSuggestedPrice = (baseCost * complexityMarkup) + tierMarkup;
  
  // Assume a target of 30% profit margin
  const targetPriceWithMargin = minimumSuggestedPrice / 0.7; 
  
  const pricePerSlice = inputs.servings > 0 ? targetPriceWithMargin / inputs.servings : 0;
  
  const profit = targetPriceWithMargin - baseCost;
  const estimatedMargin = (profit / targetPriceWithMargin) * 100;

  return {
    minimumSuggestedPrice: Number(targetPriceWithMargin.toFixed(2)),
    pricePerSlice: Number(pricePerSlice.toFixed(2)),
    laborCost: Number(laborCost.toFixed(2)),
    estimatedMargin: Number(estimatedMargin.toFixed(2)),
  };
}
