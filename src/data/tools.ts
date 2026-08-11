export interface ToolConfig {
  slug: string;
  title: string;
  description: string;
  h1: string;
  engineType: 'wedding-alcohol' | 'dilution' | 'cake-pricing';
  defaultValues: Record<string, any>;
  faqs: Array<{ question: string; answer: string }>;
}

export const tools: ToolConfig[] = [
  {
    slug: 'alcohol-dilution-calculator',
    title: 'Alcohol Dilution Calculator | Accurate ABV Reduction',
    description: 'Easily calculate the exact amount of water needed to dilute your alcohol to a target ABV. Perfect for homebrewing and distilling.',
    h1: 'Alcohol Dilution Calculator',
    engineType: 'dilution',
    defaultValues: {
      initialVolume: 1000,
      initialAbv: 95,
      targetAbv: 40,
    },
    faqs: [
      {
        question: 'How do you calculate alcohol dilution?',
        answer: 'You multiply the initial volume by the initial ABV, then divide by the target ABV to get the final total volume. The difference between the final volume and the initial volume is the amount of water needed.'
      }
    ]
  },
  {
    slug: 'wedding-drink-calculator',
    title: 'Wedding Drink Calculator | Plan Your Reception Bar',
    description: 'Calculate exactly how much beer, wine, and liquor you need for your wedding reception. Free alcohol calculator for events.',
    h1: 'Wedding Drink Calculator',
    engineType: 'wedding-alcohol',
    defaultValues: {
      guestCount: 100,
      eventHours: 4,
      beerRatio: 0.4,
      wineRatio: 0.4,
      liquorRatio: 0.2,
      barType: 'open',
    },
    faqs: [
      {
        question: 'How much alcohol do I need for 100 guests?',
        answer: 'For a 4-hour reception, you typically need 400 total drinks. This often breaks down to roughly 160 beers, 160 glasses of wine (32 bottles), and 80 liquor drinks (5 bottles).'
      }
    ]
  },
  {
    slug: 'liquor-wedding-calculator',
    title: 'Liquor Wedding Calculator | Full Bar Event Planning',
    description: 'Planning a full open bar for your wedding? Use our calculator to determine exactly how many bottles of liquor, wine, and beer to buy.',
    h1: 'Liquor Wedding Calculator',
    engineType: 'wedding-alcohol',
    defaultValues: {
      guestCount: 150,
      eventHours: 5,
      beerRatio: 0.3,
      wineRatio: 0.3,
      liquorRatio: 0.4, // Higher liquor ratio for full bar focus
      barType: 'open',
    },
    faqs: [
      {
        question: 'What is a good ratio for a full open bar?',
        answer: 'A common ratio for a liquor-heavy open bar is 30% beer, 30% wine, and 40% liquor, depending on your guests\' preferences.'
      }
    ]
  },
  {
    slug: 'cake-pricing-calculator',
    title: 'Cake Pricing Calculator | Price Your Custom Cakes',
    description: 'Calculate the perfect price for your custom cakes based on labor, materials, and complexity. Ensure your bakery is profitable.',
    h1: 'Custom Cake Pricing Calculator',
    engineType: 'cake-pricing',
    defaultValues: {
      servings: 50,
      tierCount: 2,
      complexityTier: 2,
      laborHours: 4,
      hourlyRate: 25,
      materialCost: 40,
    },
    faqs: [
      {
        question: 'How do I price a custom tiered cake?',
        answer: 'Calculate your material costs and labor (hours × hourly rate), then add markups for design complexity and structural tiers to reach your minimum suggested price.'
      }
    ]
  }
];
