import React, { useState } from 'react';
import { calculateDilution, type DilutionInputs } from '../../lib/engines/dilutionEngine';

export default function DilutionCalc({ defaultValues }: { defaultValues: any }) {
  const [inputs, setInputs] = useState<DilutionInputs>({
    initialVolume: defaultValues.initialVolume || 1000,
    initialAbv: defaultValues.initialAbv || 95,
    targetAbv: defaultValues.targetAbv || 40,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  let results = null;
  let error = null;
  try {
    results = calculateDilution(inputs);
  } catch (err: any) {
    error = err.message;
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4">Calculation Inputs</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Initial Volume (ml)</label>
          <input 
            type="number" 
            name="initialVolume" 
            value={inputs.initialVolume} 
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm p-2 border"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Initial ABV (%)</label>
          <input 
            type="number" 
            name="initialAbv" 
            value={inputs.initialAbv} 
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm p-2 border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Target ABV (%)</label>
          <input 
            type="number" 
            name="targetAbv" 
            value={inputs.targetAbv} 
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm p-2 border"
          />
        </div>
      </div>

      <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
        <h3 className="text-xl font-bold mb-4 text-emerald-900">Dilution Results</h3>
        
        {error ? (
          <div className="bg-red-100 text-red-700 p-4 rounded-md border border-red-200">
            {error}
          </div>
        ) : results ? (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-emerald-200">
              <div className="text-sm text-gray-500 font-medium">Water to Add</div>
              <div className="text-3xl font-bold text-emerald-600">
                {results.waterVolumeToAdd} <span className="text-base font-normal text-gray-500">ml</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <div className="text-xs text-gray-500 uppercase tracking-wide">Final Volume</div>
                <div className="text-xl font-bold">{results.finalTotalVolume} <span className="text-sm font-normal text-gray-500">ml</span></div>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <div className="text-xs text-gray-500 uppercase tracking-wide">Dilution Factor</div>
                <div className="text-xl font-bold">{results.dilutionFactor}x</div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
