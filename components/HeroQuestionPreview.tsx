'use client';

import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle, ArrowRight, Sparkles, BarChart2, Award } from 'lucide-react';

interface HeroQuestionPreviewProps {
  onStartExam: () => void;
}

export const HeroQuestionPreview: React.FC<HeroQuestionPreviewProps> = ({ onStartExam }) => {
  const [selectedOpt, setSelectedOpt] = useState<'A' | 'B' | 'C' | null>('B');
  const [secondsRemaining, setSecondsRemaining] = useState(3 * 3600 + 42 * 60 + 15);
  const [isAnswered, setIsAnswered] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSec: number) => {
    const h = Math.floor(totalSec / 3600).toString().padStart(2, '0');
    const m = Math.floor((totalSec % 3600) / 60).toString().padStart(2, '0');
    const s = (totalSec % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handleSelect = (letter: 'A' | 'B' | 'C') => {
    setSelectedOpt(letter);
    setIsAnswered(true);
  };

  return (
    <div className="relative">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[#D90429]/20 rounded-2xl blur-3xl transform scale-95 pointer-events-none"></div>

      <div className="relative bg-white text-slate-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 sm:p-6 flex flex-col gap-4 border border-slate-100">
        {/* Widget Top Header */}
        <div className="flex items-center justify-between pb-1 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Simulado ENEM Oficial • Ciências da Natureza
            </span>
          </div>
          <div className="bg-[#020e21] text-[#EF233C] font-mono font-bold text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
            <Timer className="w-3.5 h-3.5" />
            <span>{formatTimer(secondsRemaining)}</span>
          </div>
        </div>

        {/* Progress & Indicator */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Questão 42 de 90</span>
            <span className="font-bold text-slate-800">47% concluído</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-[47%] h-full bg-gradient-to-r from-[#D90429] to-[#EF233C] rounded-full transition-all duration-500"></div>
          </div>
        </div>

        {/* Question Statement Box */}
        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 flex flex-col gap-1.5">
          <span className="text-[11px] font-bold text-[#D90429] uppercase tracking-wide">
            ENEM 2024 • Biologia Molecular
          </span>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            O processo de replicação semiconservativa do DNA assegura que as novas moléculas herdem sequências idênticas. Uma mutação na enzima DNA-polimerase III causaria principalmente:
          </p>
        </div>

        {/* Interactive Option Choices */}
        <div className="flex flex-col gap-2.5">
          {/* Option A */}
          <div
            onClick={() => handleSelect('A')}
            className={`cursor-pointer flex items-center gap-3 p-3 rounded-xl transition-all ${
              selectedOpt === 'A'
                ? 'bg-rose-50 ring-2 ring-[#D90429] shadow-sm'
                : 'bg-slate-50 hover:bg-slate-100 border border-slate-200/50'
            }`}
          >
            <span
              className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center shrink-0 transition-colors ${
                selectedOpt === 'A'
                  ? 'bg-[#D90429] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200'
              }`}
            >
              A
            </span>
            <span className="text-xs sm:text-sm text-slate-700 flex-1 leading-snug">
              Bloqueio total na separação das pontes de hidrogênio.
            </span>
          </div>

          {/* Option B (Correct) */}
          <div
            onClick={() => handleSelect('B')}
            className={`cursor-pointer flex items-center gap-3 p-3 rounded-xl transition-all ${
              selectedOpt === 'B'
                ? 'bg-emerald-50 ring-2 ring-emerald-600 shadow-sm'
                : 'bg-slate-50 hover:bg-slate-100 border border-slate-200/50'
            }`}
          >
            <span
              className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center shrink-0 transition-colors ${
                selectedOpt === 'B'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200'
              }`}
            >
              B
            </span>
            <span className="text-xs sm:text-sm text-slate-900 font-semibold flex-1 leading-snug">
              Incapacidade de alongamento das fitas filhas e alta taxa de erros.
            </span>
            {selectedOpt === 'B' && (
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            )}
          </div>

          {/* Option C */}
          <div
            onClick={() => handleSelect('C')}
            className={`cursor-pointer flex items-center gap-3 p-3 rounded-xl transition-all ${
              selectedOpt === 'C'
                ? 'bg-rose-50 ring-2 ring-[#D90429] shadow-sm'
                : 'bg-slate-50 hover:bg-slate-100 border border-slate-200/50'
            }`}
          >
            <span
              className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center shrink-0 transition-colors ${
                selectedOpt === 'C'
                  ? 'bg-[#D90429] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200'
              }`}
            >
              C
            </span>
            <span className="text-xs sm:text-sm text-slate-700 flex-1 leading-snug">
              Interrupção da síntese inicial de RNA iniciador (primer).
            </span>
          </div>
        </div>

        {/* Live Diagnostic Footer */}
        <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-100/90 p-3 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#D90429]/10 text-[#D90429] flex items-center justify-center shrink-0">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Predição TRI Estimada
              </span>
              <span className="text-base font-extrabold text-slate-900 flex items-center gap-1.5">
                798.4 <span className="text-xs text-emerald-600 font-semibold">+18.2 pts</span>
              </span>
            </div>
          </div>

          <button
            onClick={onStartExam}
            className="inline-flex items-center justify-center gap-1.5 bg-[#D90429] hover:bg-[#EF233C] text-white px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all shadow-md hover:shadow-[#D90429]/30"
          >
            <span>Fazer Simulado Completo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
