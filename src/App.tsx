import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home as HomeIcon, Truck, Target } from 'lucide-react';
import Home from './components/Home';
import StatusMBG from './components/StatusMBG';
import AbsensiKelas from './components/AbsensiKelas';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'status' | 'absensi'>('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home key="home" />;
      case 'status':
        return <StatusMBG key="status" />;
      case 'absensi':
        return <AbsensiKelas key="absensi" />;
      default:
        return <Home key="home" />;
    }
  };

  return (
    <div className="relative min-h-screen pb-24 overflow-hidden max-w-md mx-auto shadow-2xl bg-white/10 backdrop-blur-sm">
      {/* Background Blobs */}
      <div className="blob blob-tl" />
      <div className="blob blob-br" />

      {/* Main Content */}
      <main className="px-5 pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto px-8 py-4 bg-white/95 backdrop-blur-xl border-t border-white/40 flex justify-around items-center z-50">
        <button
          onClick={() => setActiveTab('status')}
          className={`p-3 transition-all duration-300 rounded-2xl ${
            activeTab === 'status' ? 'text-blue-600 bg-blue-50 shadow-sm' : 'text-slate-500 hover:text-blue-400'
          }`}
          id="nav-status"
        >
          <Truck size={26} />
        </button>

        <button
          onClick={() => setActiveTab('home')}
          className={`p-3 transition-all duration-300 rounded-2xl ${
            activeTab === 'home' ? 'text-blue-600 bg-blue-50 shadow-sm' : 'text-slate-500 hover:text-blue-400'
          }`}
          id="nav-home"
        >
          <HomeIcon size={26} />
        </button>

        <button
          onClick={() => setActiveTab('absensi')}
          className={`p-3 transition-all duration-300 rounded-2xl ${
            activeTab === 'absensi' ? 'text-blue-600 bg-blue-50 shadow-sm' : 'text-slate-500 hover:text-blue-400'
          }`}
          id="nav-absensi"
        >
          <Target size={26} />
        </button>
      </nav>
    </div>
  );
}
