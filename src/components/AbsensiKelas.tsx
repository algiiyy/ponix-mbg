import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface ClassCardProps {
  name: string;
  hadir: number;
  ambil: number;
  status: 'SUDAH DI KEMBALIKAN' | 'BELUM DI KEMBALIKAN' | 'BELUM DI AMBIL';
}

const ClassCard: React.FC<ClassCardProps> = ({ name, hadir, ambil, status }) => {
  const statusStyles = {
    'SUDAH DI KEMBALIKAN': 'text-green-500 font-bold',
    'BELUM DI KEMBALIKAN': 'text-red-500 font-bold',
    'BELUM DI AMBIL': 'text-pink-400 font-bold',
  };

  return (
    <div className="glass-card rounded-2xl p-4 space-y-1 shadow-md border-white/60">
      <h3 className="text-sm font-bold text-orange-400 font-display">{name}</h3>
      <div className="text-[10px] text-slate-500 font-medium space-y-0.5">
        <div className="flex justify-between">
          <span>JUMLAH SISWA HADIR :</span>
          <span className="text-blue-500">{hadir}</span>
        </div>
        <div className="flex justify-between">
          <span>JUMLAH PENGAMBILAN :</span>
          <span className="text-blue-500">{ambil}</span>
        </div>
        <div className="flex justify-between pt-0.5">
          <span>STATUS :</span>
          <span className={`${statusStyles[status]} tracking-tighter`}>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default function AbsensiKelas() {
  const [search, setSearch] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<'X' | 'XI' | 'XII'>('XI');

  // Helper to generate random class data
  const generateClasses = (prefix: string, count: number, min: number = 25): ClassCardProps[] => {
    const statuses: ClassCardProps['status'][] = ['SUDAH DI KEMBALIKAN', 'BELUM DI KEMBALIKAN', 'BELUM DI AMBIL'];
    return Array.from({ length: count }, (_, i) => {
      const hadir = Math.floor(Math.random() * (35 - min + 1)) + min; // min to 35
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const ambil = status === 'BELUM DI AMBIL' ? 0 : hadir;
      
      return {
        name: `${prefix}${i + 1}`,
        hadir,
        ambil,
        status
      };
    });
  };

  const allSelectedClasses = React.useMemo(() => {
    switch (selectedGrade) {
      case 'X': return generateClasses('XE', 12, 31);
      case 'XI': return generateClasses('XIF', 12, 25);
      case 'XII': return generateClasses('XIIF', 12, 25);
      default: return [];
    }
  }, [selectedGrade]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-display font-bold text-blue-500 text-right pr-4 uppercase">
        ABSENSI KELAS
      </h1>

      <div className="space-y-3">
        <h2 className="text-xl font-bold text-blue-500 font-display">Cari Kelas kamu</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Tuliskan kelas mu disini"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/50 backdrop-blur-sm border border-white/60 rounded-full py-3 px-6 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 shadow-inner"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
            <Search size={20} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Grade Tabs Selector */}
        <div className="flex gap-2 mb-2">
          {['X', 'XI', 'XII'].map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGrade(g as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                selectedGrade === g 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-200 scale-105' 
                  : 'bg-white/60 text-slate-400 hover:bg-white/80'
              }`}
            >
              KELAS {g}
            </button>
          ))}
        </div>

        <h2 className="text-xl font-bold text-blue-500 font-display border-b-2 border-blue-100 inline-block pb-1">
          KELAS {selectedGrade}
        </h2>
        
        <div className="grid grid-cols-2 gap-3">
          {allSelectedClasses
            .filter((cls) => cls.name.toLowerCase().includes(search.toLowerCase()))
            .map((cls) => (
              <ClassCard 
                key={cls.name} 
                name={cls.name}
                hadir={cls.hadir}
                ambil={cls.ambil}
                status={cls.status}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
