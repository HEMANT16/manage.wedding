export interface WeddingAlcoholInputs {
  guestCount: number;
  eventHours: number;
  beerRatio: number; // e.g., 0.4 for 40%
  wineRatio: number; // e.g., 0.4 for 40%
  liquorRatio: number; // e.g., 0.2 for 20%
  barType: 'open' | 'soft'; // soft = no liquor
}

export interface WeddingAlcoholOutputs {
  totalServings: number;
  beerCases: number; // 24 cans/bottles per case
  wineBottles: number; // 750ml (approx 5 servings)
  liquorBottles: number; // 750ml (approx 16 servings)
  iceLbs: number; // 1.5 lbs per guest
  mixers: {
    sodaLiters: number;
    juiceLiters: number;
  };
}

export function calculateWeddingAlcohol(inputs: WeddingAlcoholInputs): WeddingAlcoholOutputs {
  // General rule of thumb: 1 drink per guest per hour of the reception
  let totalServings = inputs.guestCount * inputs.eventHours;
  
  let currentBeerRatio = inputs.beerRatio;
  let currentWineRatio = inputs.wineRatio;
  let currentLiquorRatio = inputs.liquorRatio;

  if (inputs.barType === 'soft') {
    // If soft bar (beer/wine only), reallocate liquor ratio evenly
    currentBeerRatio += currentLiquorRatio / 2;
    currentWineRatio += currentLiquorRatio / 2;
    currentLiquorRatio = 0;
  }

  const beerServings = totalServings * currentBeerRatio;
  const wineServings = totalServings * currentWineRatio;
  const liquorServings = totalServings * currentLiquorRatio;

  const beerCases = Math.ceil(beerServings / 24);
  const wineBottles = Math.ceil(wineServings / 5);
  const liquorBottles = Math.ceil(liquorServings / 16);
  
  // Ice: typically 1.5 lbs per person
  const iceLbs = Math.ceil(inputs.guestCount * 1.5);
  
  // Mixers: approximately 1 liter per 3 liquor servings
  const totalMixersLiters = liquorServings > 0 ? Math.ceil(liquorServings / 3) : 0;
  
  return {
    totalServings,
    beerCases,
    wineBottles,
    liquorBottles,
    iceLbs,
    mixers: {
      sodaLiters: Math.ceil(totalMixersLiters * 0.7),
      juiceLiters: Math.ceil(totalMixersLiters * 0.3),
    }
  };
}
