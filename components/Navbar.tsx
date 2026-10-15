'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  Trophy, 
  BookOpen, 
  GraduationCap, 
  Menu, 
  X, 
  Flame, 
  LayoutDashboard,
  CheckCircle2,
  Clock
} from 'lucide-react';
import Image from 'next/image';

interface NavbarProps {
  currentView: 'landing' | 'dashboard' | 'exam' | 'results';
  setCurrentView: (view: 'landing' | 'dashboard' | 'exam' | 'results') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onQuickStart: () => void;
  userName: string;
  userGoal: string;
  onOpenProfileModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  searchQuery,
  setSearchQuery,
  onQuickStart,
  userName,
  userGoal,
  onOpenProfileModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#061426]/90 backdrop-blur-md border-b border-[#1E3E62]/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      {/* Top Banner: Free Access Notice */}
      <div className="bg-gradient-to-r from-[#D90429] via-[#EF233C] to-[#D90429] py-1 px-4 text-center text-xs font-bold text-white tracking-wider flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5" />
        <span>100% GRATUITO • ACESSO IMEDIATO SEM CADASTRO OU CARTÃO DE CRÉDITO</span>
        <Sparkles className="w-3.5 h-3.5" />
      </div>

      <div className="h-16 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setCurrentView('landing')} 
            className="flex items-center gap-2 group text-left cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D90429] to-[#990000] flex items-center justify-center text-white font-extrabold text-lg shadow-[0_0_15px_rgba(217,4,41,0.5)]">
              X
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white uppercase flex items-center gap-1">
                X <span className="text-[#EF233C]">SIMULADOS</span>
              </span>
              <span className="text-[10px] text-[#aac9f4] font-medium tracking-wide -mt-1 hidden sm:inline">
                Plataforma Oficial de Treino
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold">
            <button
              onClick={() => setCurrentView('landing')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentView === 'landing'
                  ? 'bg-[#1E3E62] text-white shadow-sm'
                  : 'text-[#aac9f4] hover:text-white hover:bg-[#132033]'
              }`}
            >
              Início & Vitrine
            </button>
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                currentView === 'dashboard'
                  ? 'bg-[#D90429] text-white shadow-[0_0_12px_rgba(217,4,41,0.4)]'
                  : 'text-[#aac9f4] hover:text-white hover:bg-[#132033]'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Painel do Aluno
            </button>
            <button
              onClick={() => {
                setCurrentView('landing');
                setTimeout(() => {
                  const el = document.getElementById('exam-catalog');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-3 py-1.5 rounded-lg text-[#aac9f4] hover:text-white hover:bg-[#132033] transition-colors"
            >
              Simulados Oficiais
            </button>
            <button
              onClick={() => {
                setCurrentView('dashboard');
                setTimeout(() => {
                  const el = document.getElementById('ranking-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-3 py-1.5 rounded-lg text-[#aac9f4] hover:text-white hover:bg-[#132033] transition-colors flex items-center gap-1"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              Ranking TRI
            </button>
          </nav>
        </div>

        {/* Search Bar + Actions */}
        <div className="flex items-center gap-3">
          {/* Instant Search Bar */}
          <div className="hidden md:flex items-center bg-[#0e1c2f] border border-[#1E3E62] rounded-full px-3 py-1.5 w-60 lg:w-72 focus-within:border-[#EF233C] focus-within:ring-2 focus-within:ring-[#EF233C]/20 transition-all">
            <Search className="w-4 h-4 text-[#aac9f4] mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Buscar ENEM, FUVEST, OBMEP..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-white placeholder-[#aac9f4]/50 focus:outline-none w-full"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#aac9f4] hover:text-white p-0.5"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Start Action Button */}
          <button
            onClick={onQuickStart}
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#D90429] to-[#EF233C] text-white px-4 py-2 rounded-full text-sm font-bold shadow-[0_4px_16px_rgba(217,4,41,0.4)] hover:shadow-[0_6px_22px_rgba(239,35,60,0.6)] hover:brightness-110 active:scale-95 transition-all"
          >
            <span>Começar Simulado</span>
            <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded-full">Grátis</span>
          </button>

          {/* Profile Badge (No login required, customize avatar/name) */}
          <button
            onClick={onOpenProfileModal}
            className="flex items-center gap-2 bg-[#0e1c2f] hover:bg-[#1E3E62] border border-[#1E3E62] p-1 sm:pr-3 rounded-full transition-all text-left"
            title="Personalizar seu perfil de estudos"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#D90429]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB4r2q-u2lmYNtPOUInp87qFaCTu6s8dm2zCXzrWBWFDoc2aEDVer7ZEyMKkkeOYgpuKmCkiVOJOYEuxh1LF12dLhaLOT0IvO604g6EFIpzMeqWFJOYmPqX_3EdoeJ80b2ZBog1KTpSiMo1eaahPvLobFUh4-RyXX8drhttqvkMqFbvPDQWIYGUJI08XQHuSlQiBZFSjkRPVQ7CB_hYhE-FPO6gpB6_qA8iJDFO17D_MpPS2pMdMi8SQ"
                alt="Avatar"
                fill
                sizes="32px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden lg:flex flex-col text-xs leading-tight">
              <span className="font-bold text-white truncate max-w-[100px]">{userName}</span>
              <span className="text-[#aac9f4] text-[10px] truncate max-w-[100px]">{userGoal}</span>
            </div>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#0e1c2f] text-[#aac9f4] hover:text-white hover:bg-[#1E3E62]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061426] border-b border-[#1E3E62] px-4 pt-3 pb-6 space-y-3">
          {/* Mobile Search */}
          <div className="flex items-center bg-[#0e1c2f] border border-[#1E3E62] rounded-full px-3 py-2 w-full">
            <Search className="w-4 h-4 text-[#aac9f4] mr-2" />
            <input
              type="text"
              placeholder="Buscar provas, vestibulares..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-white placeholder-[#aac9f4]/50 focus:outline-none w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => {
                setCurrentView('landing');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 ${
                currentView === 'landing' ? 'bg-[#1E3E62] text-white' : 'bg-[#0e1c2f] text-[#aac9f4]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Início & Vitrine
            </button>
            <button
              onClick={() => {
                setCurrentView('dashboard');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 ${
                currentView === 'dashboard' ? 'bg-[#D90429] text-white' : 'bg-[#0e1c2f] text-[#aac9f4]'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Painel do Aluno
            </button>
          </div>

          <button
            onClick={() => {
              onQuickStart();
              setMobileMenuOpen(false);
            }}
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#D90429] to-[#EF233C] text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
          >
            <Flame className="w-4 h-4" />
            Iniciar Simulado Grátis Agora
          </button>
        </div>
      )}
    </header>
  );
};
