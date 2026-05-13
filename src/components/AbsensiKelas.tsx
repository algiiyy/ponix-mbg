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

  const classes: ClassCardProps[] = [
    { name: 'XIF1', hadir: 33, ambil: 33, status: 'SUDAH DI KEMBALIKAN' },
    { name: 'XIF2', hadir: 34, ambil: 34, status: 'BELUM DI KEMBALIKAN' },
    { name: 'XIF3', hadir: 32, ambil: 32, status: 'BELUM DI AMBIL' },
    { name: 'XIF4', hadir: 34, ambil: 34, status: 'SUDAH DI KEMBALIKAN' },
    { name: 'XIF5', hadir: 33, ambil: 33, status: 'SUDAH DI KEMBALIKAN' },
    { name: 'XIF6', hadir: 34, ambil: 34, status: 'BELUM DI KEMBALIKAN' },
  ];

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
        <h2 className="text-xl font-bold text-blue-500 font-display border-b-2 border-blue-100 inline-block pb-1">
          KELAS XI
        </h2>
        
        <div className="grid grid-cols-2 gap-3">
          {classes.map((cls) => (
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
