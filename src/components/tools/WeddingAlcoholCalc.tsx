import React, { useState } from 'react';
import { calculateWeddingAlcohol, type WeddingAlcoholInputs } from '../../lib/engines/weddingAlcoholEngine';

export default function WeddingAlcoholCalc({ defaultValues }: { defaultValues: any }) {
  const [inputs, setInputs] = useState<WeddingAlcoholInputs>({
    guestCount: defaultValues.guestCount || 100,
    eventHours: defaultValues.eventHours || 4,
    beerRatio: defaultValues.beerRatio || 0.4,
    wineRatio: defaultValues.wineRatio || 0.4,
    liquorRatio: defaultValues.liquorRatio || 0.2,
    barType: defaultValues.barType || 'open',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const results = calculateWeddingAlcohol(inputs);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4">Event Details</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Guest Count</label>
          <input 
            type="number" 
            name="guestCount" 
            value={inputs.guestCount} 
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm p-2 border"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Duration (Hours)</label>
          <input 
            type="number" 
            name="eventHours" 
            value={inputs.eventHours} 
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm p-2 border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bar Type</label>
          <select 
            name="barType" 
            value={inputs.barType} 
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm p-2 border"
          >
            <option value="open">Full Open Bar (Beer, Wine, Liquor)</option>
            <option value="soft">Soft Bar (Beer & Wine Only)</option>
          </select>
        </div>

        <div className="pt-4 border-t">
          <h4 className="font-semibold mb-2">Drink Preferences</h4>
          <p className="text-xs text-gray-500 mb-3">Ratios should sum to 1.0 (100%)</p>
          
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-xs text-gray-600">Beer Ratio</label>
              <input type="number" step="0.1" name="beerRatio" value={inputs.beerRatio} onChange={handleInputChange} className="w-full border-gray-300 rounded p-1 border text-sm"/>
            </div>
            <div>
              <label className="block text-xs text-gray-600">Wine Ratio</label>
              <input type="number" step="0.1" name="wineRatio" value={inputs.wineRatio} onChange={handleInputChange} className="w-full border-gray-300 rounded p-1 border text-sm"/>
            </div>
            <div>
              <label className="block text-xs text-gray-600">Liquor Ratio</label>
              <input type="number" step="0.1" name="liquorRatio" value={inputs.liquorRatio} onChange={handleInputChange} className="w-full border-gray-300 rounded p-1 border text-sm" disabled={inputs.barType === 'soft'}/>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h3 className="text-xl font-bold mb-4 text-blue-900">Required Supplies</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 font-medium">Total Servings</div>
            <div className="text-3xl font-bold text-gray-900">{results.totalServings} <span className="text-base font-normal text-gray-500">drinks</span></div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Beer</div>
              <div className="text-xl font-bold">{results.beerCases} <span className="text-sm font-normal text-gray-500">cases</span></div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Wine</div>
              <div className="text-xl font-bold">{results.wineBottles} <span className="text-sm font-normal text-gray-500">bottles</span></div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Liquor</div>
              <div className="text-xl font-bold">{results.liquorBottles} <span className="text-sm font-normal text-gray-500">bottles</span></div>
            </div>

            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Ice</div>
              <div className="text-xl font-bold">{results.iceLbs} <span className="text-sm font-normal text-gray-500">lbs</span></div>
            </div>
          </div>
          
          {(results.mixers.sodaLiters > 0 || results.mixers.juiceLiters > 0) && (
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mt-2">
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Mixers</div>
              <div className="flex justify-between">
                <div><span className="font-bold">{results.mixers.sodaLiters}L</span> Soda</div>
                <div><span className="font-bold">{results.mixers.juiceLiters}L</span> Juice</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
