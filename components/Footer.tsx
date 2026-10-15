'use client';

import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (catId: string) => void;
  onNavigateToDashboard: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onNavigateToDashboard }) => {
  return (
    <footer className="w-full bg-[#020e21] border-t border-[#1E3E62]/60 text-[#d6e3fe] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1360px] mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D90429] to-[#990000] flex items-center justify-center text-white font-extrabold text-base shadow-sm">
                X
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white uppercase">
                X <span className="text-[#EF233C]">SIMULADOS</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#aac9f4] leading-relaxed max-w-sm">
              Plataforma 100% gratuita de alta performance para preparação acadêmica e concursos públicos. Métricas precisas, correção TRI e ambiente idêntico às provas oficiais sem necessidade de cadastro.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[10px] font-bold bg-[#132033] border border-[#1E3E62] px-3 py-1 rounded-full text-[#aac9f4]">
                PROVAS 2025 ATUALIZADAS
              </span>
              <span className="text-[10px] font-bold bg-[#132033] border border-[#1E3E62] px-3 py-1 rounded-full text-[#aac9f4]">
                PADRÃO TRI OFICIAL
              </span>
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
              Categorias
            </h4>
            <ul className="space-y-2 text-xs text-[#aac9f4]">
              <li>
                <button onClick={() => onSelectCategory('vestibulares')} className="hover:text-white transition-colors cursor-pointer text-left">
                  ENEM & SiSU
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('vestibulares')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Vestibulares Tradicionais
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('concursos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Carreiras Policiais
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('olimpiadas')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Olimpíadas Científicas (OBMEP / OBA)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('fundamental-medio')} className="hover:text-white transition-colors cursor-pointer text-left">
                  SARESP & Provão Paulista
                </button>
              </li>
            </ul>
          </div>

          {/* Simulados Populares */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
              Simulados
            </h4>
            <ul className="space-y-2 text-xs text-[#aac9f4]">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  FUVEST & UNICAMP
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  UNESP & VUNESP
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Cebraspe / Cespe
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  FGV Concursos
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Banca FCC & Tribunais
                </span>
              </li>
            </ul>
          </div>

          {/* Plataforma */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
              Plataforma
            </h4>
            <ul className="space-y-2 text-xs text-[#aac9f4]">
              <li>
                <button onClick={onNavigateToDashboard} className="hover:text-white transition-colors cursor-pointer text-left">
                  Painel do Estudante
                </button>
              </li>
              <li>
                <button onClick={onNavigateToDashboard} className="hover:text-white transition-colors cursor-pointer text-left">
                  Ranking Nacional
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Banco de Questões
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Simulador de TRI
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Gabaritos Comentados
                </span>
              </li>
            </ul>
          </div>

          {/* Ajuda & Segurança */}
          <div>
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
              Ajuda & Seguro
            </h4>
            <ul className="space-y-2 text-xs text-[#aac9f4]">
              <li><span className="hover:text-white transition-colors cursor-pointer">Central de Ajuda</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Termos de Uso</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Privacidade LGPD</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">100% Gratuito</span></li>
            </ul>

            <div className="mt-4 p-2.5 bg-[#132033] border border-[#1E3E62] rounded-xl flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-[10px] font-semibold text-[#aac9f4]">
                Ambiente Criptografado 256-bit
              </span>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-6 border-t border-[#1E3E62]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#aac9f4]/70">
          <p>© 2025 X SIMULADOS - Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito para estudantes e concurseiros de todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};
