import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, User, ArrowRight, Activity, Zap } from 'lucide-react';

export default function KalkulatorGizi() {
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<{ bmr: number; tdee: number; bmi: number; status: string; color: string } | null>(null);

  const calculate = () => {
    const a = parseFloat(age);
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(a) || isNaN(w) || isNaN(h)) return;

    // Mifflin-St Jeor Equation
    let bmr = 10 * w + 6.25 * h - 5 * a;
    if (gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    // TDEE (Total Daily Energy Expenditure) - Assuming Moderate Activity (1.55)
    const tdee = bmr * 1.55;

    // BMI Calculation
    const hMeter = h / 100;
    const bmi = w / (hMeter * hMeter);

    let status = '';
    let color = '';

    if (bmi < 18.5) {
      status = 'KURUS';
      color = 'text-amber-500';
    } else if (bmi >= 18.5 && bmi < 25) {
      status = 'IDEAL';
      color = 'text-emerald-500';
    } else if (bmi >= 25 && bmi < 30) {
      status = 'GEMUK';
      color = 'text-orange-500';
    } else {
      status = 'OBESITAS';
      color = 'text-red-500';
    }

    setResult({ 
      bmr: Math.round(bmr), 
      tdee: Math.round(tdee), 
      bmi: parseFloat(bmi.toFixed(1)),
      status,
      color
    });
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2.5 bg-blue-500 rounded-2xl shadow-lg shadow-blue-200">
          <Calculator className="text-white" size={24} />
        </div>
        <h1 className="text-2xl font-display font-bold text-slate-800">Kalkulator Gizi</h1>
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/40 shadow-xl space-y-5">
        <div className="space-y-4">
          {/* Gender Select */}
          <div className="flex gap-3">
            <button
              onClick={() => setGender('male')}
              className={`flex-1 py-3 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                gender === 'male' ? 'bg-blue-500 text-white shadow-lg shadow-blue-100' : 'bg-slate-50 text-slate-400'
              }`}
            >
              <User size={14} /> LAKI-LAKI
            </button>
            <button
              onClick={() => setGender('female')}
              className={`flex-1 py-3 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                gender === 'female' ? 'bg-pink-500 text-white shadow-lg shadow-pink-100' : 'bg-slate-50 text-slate-400'
              }`}
            >
              <User size={14} /> PEREMPUAN
            </button>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Usia (Tahun)</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="0"
                className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-slate-700 font-bold focus:ring-2 focus:ring-blue-400 transition-all outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Berat (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="0"
                className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-slate-700 font-bold focus:ring-2 focus:ring-blue-400 transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Tinggi Badan (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="0"
              className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-slate-700 font-bold focus:ring-2 focus:ring-blue-400 transition-all outline-none"
            />
          </div>

          <button
            onClick={calculate}
            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-slate-200 flex items-center justify-center gap-2 hover:bg-slate-800 transition-all mt-2"
          >
            HITUNG KEBUTUHAN <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {/* BMI Info Card */}
          <div className="bg-white/90 border border-white/50 p-5 rounded-3xl shadow-lg flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Status Indeks Massa Tubuh</div>
              <div className={`text-4xl font-display font-black tracking-tighter ${result.color}`}>
                {result.status}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Skor BMI</div>
              <div className="text-2xl font-bold text-slate-800">{result.bmi}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-3xl text-white shadow-lg shadow-blue-100 flex flex-col justify-between overflow-hidden relative">
              <Activity className="absolute -right-2 -top-2 opacity-20" size={80} />
              <div className="text-[10px] font-bold uppercase opacity-80">BMR Siswa</div>
              <div>
                <div className="text-2xl font-bold">{result.bmr}</div>
                <div className="text-[10px] font-medium">kkal / hari</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-5 rounded-3xl text-white shadow-lg shadow-indigo-100 flex flex-col justify-between overflow-hidden relative">
              <Zap className="absolute -right-2 -top-2 opacity-20" size={80} />
              <div className="text-[10px] font-bold uppercase opacity-80">TDEE (Kebutuhan Harian)</div>
              <div>
                <div className="text-2xl font-bold">{result.tdee}</div>
                <div className="text-[10px] font-medium">kkal / hari</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <h3 className="text-xs font-bold text-slate-700 mb-2 font-display">INFO KESEHATAN</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
              *TDEE dihitung berdasarkan aktivitas moderat untuk siswa sekolah aktif. Gunakan data ini sebagai referensi awal pemenuhan gizi harian.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
