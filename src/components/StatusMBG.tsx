import React from 'react';
import truckImg from '../assets/images/truck-distribution.png';

export default function StatusMBG() {
  return (
    <div className="space-y-8 pb-32 relative overflow-visible">
      <h1 className="text-3xl font-display font-bold text-blue-500 text-right pr-2">
        STATUS MBG
      </h1>

      <div className="space-y-6">
        {/* Card 1: Arrival */}
        <div className="glass-card rounded-[2rem] p-6 space-y-3 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-bold text-green-500 leading-tight pr-12">
              MBG SUDAH DATANG DI SEKOLAH
            </h2>
            <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm border border-blue-200">
              11.20 WIB
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            Makan Bergizi Gratis Hari Ini Telah Tiba! Silakan yang bertugas untuk menuju titik distribusi untuk melakukan verifikasi pengambilan. Selamat menikmati makan siang sehat!
          </p>
        </div>

        {/* Card 2: Return */}
        <div className="glass-card rounded-[2rem] p-6 space-y-3 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-bold text-orange-500 leading-tight pr-12">
              Pengembalian MBG
            </h2>
            <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm border border-blue-200">
              12.15 WIB
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            Mohon diingatkan bagi seluruh siswa untuk mengembalikan wadah MBG ke titik distribusi sebelum pukul 12.15 WIB guna memudahkan proses rekapitulasi data oleh pihak pengelola. Terima kasih atas kerja samanya!
          </p>
        </div>
      </div>

      {/* Delivery Truck Image - Positioned to 'nongol dikit' (popping out) */}
      <div className="relative mt-4">
        <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-10 -z-10 translate-y-10 scale-150"></div>
        <div className="relative -left-12 -mb-20 pointer-events-none">
          <img 
            src={truckImg} 
            alt="Delivery Truck"
            className="w-full max-w-[450px] object-contain drop-shadow-2xl brightness-105"
          />
        </div>
        
        <div className="absolute left-6 bottom-[-40px] bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/80 text-[10px] shadow-xl max-w-[170px] z-20">
          <div className="font-bold text-slate-900 border-b border-slate-100 pb-1.5 mb-1.5 tracking-tight">BADAN GIZI NASIONAL</div>
          <div className="text-slate-500 font-medium leading-tight">Layanan Pelenuhan Gizi Sekolah Strategis</div>
        </div>
      </div>
    </div>
  );
}
