import React from 'react';
export default function StatusMBG() {
  const truckImg = "https://images.unsplash.com/photo-1586704235551-30b3a1663f84?auto=format&fit=crop&q=80&w=600";
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

      {/* Delivery Truck Image Removed */}
    </div>
  );
}
