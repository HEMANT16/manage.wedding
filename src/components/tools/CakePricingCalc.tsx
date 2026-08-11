import React, { useState } from 'react';
import { calculateCakePricing, type CakePricingInputs } from '../../lib/engines/cakePricingEngine';

export default function CakePricingCalc({ defaultValues }: { defaultValues: any }) {
  const [inputs, setInputs] = useState<CakePricingInputs>({
    servings: defaultValues.servings || 50,
    tierCount: defaultValues.tierCount || 2,
    complexityTier: defaultValues.complexityTier || 2,
    laborHours: defaultValues.laborHours || 4,
    hourlyRate: defaultValues.hourlyRate || 25,
    materialCost: defaultValues.materialCost || 40,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : (name === 'complexityTier' ? Number(value) : value)
    }));
  };

  const results = calculateCakePricing(inputs);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4">Cake Details</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Servings</label>
            <input type="number" name="servings" value={inputs.servings} onChange={handleInputChange} className="w-full border-gray-300 rounded-md shadow-sm p-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tiers</label>
            <input type="number" name="tierCount" value={inputs.tierCount} onChange={handleInputChange} className="w-full border-gray-300 rounded-md shadow-sm p-2 border" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Design Complexity (1-5)</label>
          <input type="range" min="1" max="5" name="complexityTier" value={inputs.complexityTier} onChange={handleInputChange} className="w-full" />
          <div className="text-xs text-gray-500 text-center">Level {inputs.complexityTier}</div>
        </div>

        <h4 className="font-semibold pt-4 border-t">Costs</h4>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Labor Hours</label>
            <input type="number" name="laborHours" value={inputs.laborHours} onChange={handleInputChange} className="w-full border-gray-300 rounded-md shadow-sm p-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate ($)</label>
            <input type="number" name="hourlyRate" value={inputs.hourlyRate} onChange={handleInputChange} className="w-full border-gray-300 rounded-md shadow-sm p-2 border" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Material Cost ($)</label>
          <input type="number" name="materialCost" value={inputs.materialCost} onChange={handleInputChange} className="w-full border-gray-300 rounded-md shadow-sm p-2 border" />
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
        <h3 className="text-xl font-bold mb-4 text-purple-900">Pricing Summary</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
            <div className="text-sm text-gray-500 font-medium">Suggested Price (Min)</div>
            <div className="text-3xl font-bold text-purple-700">
              ${results.minimumSuggestedPrice}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Per Slice</div>
              <div className="text-xl font-bold">${results.pricePerSlice}</div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Labor Cost</div>
              <div className="text-xl font-bold">${results.laborCost}</div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 col-span-2">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Estimated Margin</div>
              <div className="text-xl font-bold text-green-600">{results.estimatedMargin}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
