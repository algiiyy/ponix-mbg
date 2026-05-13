import React from 'react';
export default function Home() {
  const foodTray = "/food-tray.jpg";
  return (
    <div className="space-y-8">
      {/* Header Card */}
      <div className="glass-card rounded-3xl p-6 space-y-3">
        <h1 className="text-2xl font-display font-bold text-blue-600 leading-tight">
          Digitalisasi Gizi,<br />Transformasi Masa Depan.
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">
          Platform Monitoring MBG SMAN 3 Surakarta: Integrasi teknologi untuk transparansi nutrisi dan efisiensi pangan menuju ekosistem sekolah Zero Waste.
        </p>
      </div>

      {/* Menu Header */}
      <div className="space-y-4">
        <h2 className="text-center text-xl font-display font-bold text-blue-500 uppercase tracking-wider">
          MENU HARI INI
        </h2>
        
        {/* Food Image */}
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-400 rounded-[2.5rem] blur-xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity"></div>
          <img 
            src={foodTray} 
            alt="Menu Hari Ini"
            className="w-full aspect-[4/3] object-cover rounded-[2.5rem] border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Nutrition Table */}
      <div className="overflow-hidden rounded-2xl border border-white/60 shadow-md">
        <table className="w-full text-xs font-medium">
          <thead className="bg-[#0f172a] text-white">
            <tr>
              <th className="py-3 px-4 text-left font-semibold uppercase tracking-tighter">PORSI BESAR</th>
              <th className="py-3 px-4 text-center font-semibold uppercase tracking-tighter border-x border-white/10">Energi</th>
              <th className="py-3 px-4 text-right font-semibold uppercase tracking-tighter">PORSI KECIL</th>
            </tr>
          </thead>
          <tbody className="bg-white/40 backdrop-blur-sm divide-y divide-white/40">
            <tr>
              <td className="py-2.5 px-4 text-slate-600">369,21 kkal</td>
              <td className="py-2.5 px-4 text-center text-slate-800 bg-blue-100/30 border-x border-white/40">Lemak</td>
              <td className="py-2.5 px-4 text-right text-slate-600">320,77 kkal</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 text-slate-600">8,14 g</td>
              <td className="py-2.5 px-4 text-center text-slate-800 bg-blue-100/30 border-x border-white/40">Protein</td>
              <td className="py-2.5 px-4 text-right text-slate-600">7,17 g</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 text-slate-600">27,81 g</td>
              <td className="py-2.5 px-4 text-center text-slate-800 bg-blue-100/30 border-x border-white/40">Karbohidrat</td>
              <td className="py-2.5 px-4 text-right text-slate-600">23,97 g</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 text-slate-600">50,81 g</td>
              <td className="py-2.5 px-4 text-center text-slate-800 bg-blue-100/30 border-x border-white/40">Serat</td>
              <td className="py-2.5 px-4 text-right text-slate-600">44,12 g</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 text-slate-600">3,03 g</td>
              <td className="py-2.5 px-4 text-center text-slate-800 bg-blue-100/30 border-x border-white/40">Total Lemak</td>
              <td className="py-2.5 px-4 text-right text-slate-600">2,92 g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
