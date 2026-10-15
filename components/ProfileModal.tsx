'use client';

import React, { useState } from 'react';
import { X, Check, User, Target, Sparkles } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentName: string;
  currentGoal: string;
  onSave: (name: string, goal: string) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  currentName,
  currentGoal,
  onSave
}) => {
  const [name, setName] = useState(currentName);
  const [goal, setGoal] = useState(currentGoal);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(name.trim() || 'Estudante', goal.trim() || 'ENEM Medicina');
    onClose();
  };

  const quickGoals = [
    'ENEM Medicina (SISU)',
    'FUVEST / USP Politécnica',
    'UNICAMP Medicina',
    'PF / PRF Agente Federal',
    'OBMEP Medalha de Ouro',
    'Provão Paulista / FATEC',
    'SARESP 9º Ano',
    'Tribunais (TRF / TJ)'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0e1c2f] border border-[#1E3E62] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-[#1E3E62] pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#D90429]/20 text-[#EF233C] flex items-center justify-center font-bold">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Perfil de Estudos</h3>
              <p className="text-xs text-[#aac9f4]">Personalize sem cadastro ou senha</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#aac9f4] hover:text-white hover:bg-[#1E3E62]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
              Como quer ser chamado(a)?
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#132033] border border-[#1E3E62] text-sm text-white px-4 py-2.5 rounded-xl focus:outline-none focus:border-[#EF233C]"
              placeholder="Ex: Amanda, Carlos, Mariana..."
              maxLength={30}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
              Seu Alvo Principal / Curso Desejado
            </label>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full bg-[#132033] border border-[#1E3E62] text-sm text-white px-4 py-2.5 rounded-xl focus:outline-none focus:border-[#EF233C]"
              placeholder="Ex: Medicina USP, Agente PF, Direito..."
              maxLength={40}
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#aac9f4] mb-2">
              Sugestões rápidas:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {quickGoals.map((g) => (
                <button
                  type="button"
                  key={g}
                  onClick={() => setGoal(g)}
                  className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                    goal === g
                      ? 'bg-[#D90429] text-white border-[#D90429]'
                      : 'bg-[#132033] text-[#aac9f4] border-[#1E3E62] hover:text-white'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[#1E3E62] flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-bold text-[#aac9f4] hover:text-white"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-full text-xs font-bold bg-[#D90429] hover:bg-[#EF233C] text-white shadow-md cursor-pointer"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
