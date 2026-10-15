'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { X, Check, User, Target, Upload, Camera, Image as ImageIcon, Sparkles } from 'lucide-react';
import { AVATAR_PRESETS } from '@/data/exams';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentName: string;
  currentGoal: string;
  currentAvatar: string;
  onSave: (name: string, goal: string, avatar: string) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  currentName,
  currentGoal,
  currentAvatar,
  onSave
}) => {
  const [name, setName] = useState(currentName);
  const [goal, setGoal] = useState(currentGoal);
  const [avatar, setAvatar] = useState(currentAvatar);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [showUrlField, setShowUrlField] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        setErrorMessage('A imagem deve ter no máximo 3MB.');
        return;
      }
      setErrorMessage(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (customUrlInput.trim().startsWith('http')) {
      setAvatar(customUrlInput.trim());
      setShowUrlField(false);
      setCustomUrlInput('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(name.trim() || 'Estudante', goal.trim() || 'ENEM Medicina', avatar);
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
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0e1c2f] border border-[#1E3E62] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6 my-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1E3E62] pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#D90429]/20 text-[#EF233C] flex items-center justify-center font-bold">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Editar Perfil & Foto</h3>
              <p className="text-xs text-[#aac9f4]">Personalize sua foto, nome e metas de estudo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#aac9f4] hover:text-white hover:bg-[#1E3E62]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* FOTO DE PERFIL / AVATAR SELECTOR */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-white uppercase tracking-wider">
              Foto de Perfil
            </label>

            {errorMessage && (
              <div className="bg-rose-950/60 border border-rose-500/50 text-rose-200 text-xs px-3 py-2 rounded-xl">
                {errorMessage}
              </div>
            )}

            {/* Current Selected Avatar Preview + Upload Controls */}
            <div className="flex items-center gap-4 bg-[#132033] p-4 rounded-2xl border border-[#1E3E62]">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#D90429] shrink-0 bg-[#061426]">
                <Image
                  src={avatar}
                  alt="Avatar Selecionado"
                  fill
                  sizes="64px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  unoptimized={avatar.startsWith('data:')}
                />
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <span className="text-xs font-bold text-white">Trocar sua foto:</span>
                <div className="flex flex-wrap gap-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D90429] hover:bg-[#EF233C] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Carregar do dispositivo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowUrlField(!showUrlField)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E3E62] hover:bg-[#28354a] text-[#aac9f4] hover:text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Link web</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Optional URL input field */}
            {showUrlField && (
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="Cole aqui o link direto da imagem (https://...)"
                  value={customUrlInput}
                  onChange={(e) => setCustomUrlInput(e.target.value)}
                  className="flex-1 bg-[#132033] border border-[#1E3E62] text-xs text-white px-3 py-2 rounded-xl focus:outline-none focus:border-[#EF233C]"
                />
                <button
                  type="button"
                  onClick={handleApplyUrl}
                  className="px-4 py-2 bg-[#1E3E62] hover:bg-[#D90429] text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Usar
                </button>
              </div>
            )}

            {/* Gallery of Presets */}
            <div>
              <span className="block text-[11px] font-semibold text-[#aac9f4] mb-2">
                Ou escolha uma foto da nossa galeria:
              </span>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5">
                {AVATAR_PRESETS.map((preset) => {
                  const isSelected = avatar === preset.url;
                  return (
                    <button
                      type="button"
                      key={preset.id}
                      onClick={() => setAvatar(preset.url)}
                      title={preset.label}
                      className={`relative w-11 h-11 rounded-full overflow-hidden transition-all transform hover:scale-110 cursor-pointer ${
                        isSelected
                          ? 'ring-3 ring-[#EF233C] scale-105 shadow-md'
                          : 'ring-1 ring-[#1E3E62] opacity-75 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={preset.url}
                        alt={preset.label}
                        fill
                        sizes="44px"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-[#D90429]/30 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Nome */}
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

          {/* Meta / Curso */}
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

          {/* Sugestões rápidas de metas */}
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
                  className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
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

          {/* Footer actions */}
          <div className="pt-3 border-t border-[#1E3E62] flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-bold text-[#aac9f4] hover:text-white cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#D90429] hover:bg-[#EF233C] text-white shadow-md cursor-pointer transition-all hover:scale-[1.02]"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
