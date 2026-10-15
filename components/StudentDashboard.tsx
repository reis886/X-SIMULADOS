'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Flame, 
  Target, 
  Trophy, 
  CheckCircle, 
  TrendingUp, 
  BarChart2, 
  Clock, 
  Zap, 
  ArrowRight, 
  Play, 
  PauseCircle, 
  Hourglass, 
  Sliders, 
  ChevronRight, 
  Star, 
  ShieldAlert, 
  Sparkles, 
  BookOpen, 
  School, 
  Landmark, 
  Cpu
} from 'lucide-react';
import { SAMPLE_EXAMS, NATIONAL_RANKING, QUICK_SPRINTS, Exam, QuickSprint } from '../data/exams';

interface StudentDashboardProps {
  onSelectExam: (exam: Exam) => void;
  onSelectSprint: (sprint: QuickSprint) => void;
  userName: string;
  userGoal: string;
  userAvatar: string;
  onOpenProfileModal: () => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  onSelectExam,
  onSelectSprint,
  userName,
  userGoal,
  userAvatar,
  onOpenProfileModal
}) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'enem' | 'concursos' | 'olimpiadas' | 'fundamental'>('todos');
  const [sortOption, setSortOption] = useState(`Recomendados para ${userName}`);

  const filteredDashboardExams = SAMPLE_EXAMS.filter((exam) => {
    if (activeTab === 'todos') return true;
    if (activeTab === 'enem') return exam.category === 'vestibulares';
    if (activeTab === 'concursos') return exam.category === 'concursos';
    if (activeTab === 'olimpiadas') return exam.category === 'olimpiadas';
    if (activeTab === 'fundamental') return exam.category === 'fundamental-medio';
    return true;
  });

  const enemExam = SAMPLE_EXAMS.find((e) => e.id === 'enem-ciencias-natureza-matematica') || SAMPLE_EXAMS[0];

  return (
    <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Top Welcome & Performance Status Bar */}
      <div className="relative overflow-hidden rounded-3xl bg-[#1d2a3e] border border-[#1E3E62] p-6 sm:p-8 lg:p-10 shadow-2xl">
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#D90429]/15 blur-3xl pointer-events-none"></div>
        <div className="absolute right-48 -bottom-20 w-64 h-64 rounded-full bg-[#29486d]/30 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132033] border border-[#1E3E62] text-[#ffb3af] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#D90429] animate-pulse"></span>
              Ciclo Pré-ENEM & Vestibulares • Reta Final 2025
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex flex-wrap items-baseline gap-2">
              <span>Olá, {userName}!</span>
              <span className="text-[#aac9f4] text-xl sm:text-2xl font-normal">
                Bora praticar hoje?
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#aac9f4] max-w-2xl leading-relaxed">
              Sua constância nos simulados está 34% acima da média dos concorrentes diretos para {userGoal}. Acesso 100% gratuito e ilimitado.
            </p>

            <button
              onClick={onOpenProfileModal}
              className="text-xs text-[#EF233C] hover:text-[#ffb3af] font-semibold underline flex items-center gap-1 cursor-pointer pt-1"
            >
              <Sliders className="w-3.5 h-3.5" />
              Editar meu curso alvo e metas
            </button>
          </div>

          {/* Gamification / Streaks & Status Pills */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Streak Card */}
            <div className="flex items-center gap-3 bg-[#132033] border border-[#1E3E62] px-4 py-3 rounded-2xl shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#D90429]/20 text-[#EF233C] flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5 fill-[#EF233C]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#aac9f4] font-bold">Sequência</p>
                <p className="text-base font-extrabold text-white">14 Dias Seguidos</p>
              </div>
            </div>

            {/* Weekly Target Card */}
            <div className="flex items-center gap-3 bg-[#132033] border border-[#1E3E62] px-4 py-3 rounded-2xl shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#29486d]/40 text-[#aac9f4] flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#aac9f4] font-bold">Meta Semanal</p>
                <p className="text-base font-extrabold text-white">
                  85% <span className="text-xs text-[#aac9f4]/70 font-normal">Concluída</span>
                </p>
              </div>
            </div>

            {/* National Rank Card */}
            <div className="flex items-center gap-3 bg-[#132033] border border-[#1E3E62] px-4 py-3 rounded-2xl shadow-md">
              <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#aac9f4] font-bold">Ranking Geral</p>
                <p className="text-base font-extrabold text-white">
                  #142 <span className="text-xs text-[#EF233C] font-bold">(Top 2%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 HIGH-IMPACT ACADEMIC PERFORMANCE METRICS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Metric 1 */}
        <div className="bg-[#0e1c2f] border border-[#1E3E62]/70 rounded-2xl p-5 shadow-lg hover:border-[#1E3E62] transition-all flex flex-col justify-between group">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase text-[#aac9f4] tracking-wider font-bold">
              Simulados Feitos
            </span>
            <CheckCircle className="w-4 h-4 text-[#aac9f4]/60 group-hover:text-[#EF233C] transition-colors" />
          </div>
          <div className="my-3">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white">28</span>
              <span className="text-xs text-[#aac9f4]">neste mês</span>
            </div>
            <div className="w-full bg-[#1d2a3e] h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#aac9f4] h-full rounded-full w-4/5"></div>
            </div>
          </div>
          <p className="text-xs text-[#aac9f4] flex items-center gap-1 font-medium">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400 font-bold">+6</span> em relação ao mês anterior
          </p>
        </div>

        {/* Metric 2 */}
        <div className="bg-[#0e1c2f] border border-[#1E3E62]/70 rounded-2xl p-5 shadow-lg hover:border-[#1E3E62] transition-all flex flex-col justify-between group">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase text-[#aac9f4] tracking-wider font-bold">
              Média TRI Estimada
            </span>
            <BarChart2 className="w-4 h-4 text-[#EF233C]" />
          </div>
          <div className="my-3">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-[#EF233C]">784.6</span>
              <span className="text-xs font-bold text-[#ffb3af]">PTS</span>
            </div>
            <div className="w-full bg-[#1d2a3e] h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-gradient-to-r from-[#D90429] to-[#EF233C] h-full rounded-full w-[82%]"></div>
            </div>
          </div>
          <p className="text-xs text-[#aac9f4] flex items-center gap-1 font-medium">
            <TrendingUp className="w-3.5 h-3.5 text-[#EF233C]" />
            <span className="text-[#EF233C] font-bold">+32.4 pts</span> vs simulado anterior
          </p>
        </div>

        {/* Metric 3 */}
        <div className="bg-[#0e1c2f] border border-[#1E3E62]/70 rounded-2xl p-5 shadow-lg hover:border-[#1E3E62] transition-all flex flex-col justify-between group">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase text-[#aac9f4] tracking-wider font-bold">
              Acurácia Geral
            </span>
            <span className="text-xs font-bold text-[#aac9f4]">%</span>
          </div>
          <div className="my-3">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white">81.4%</span>
              <span className="text-xs text-[#aac9f4]">de acertos</span>
            </div>
            <div className="w-full bg-[#1d2a3e] h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full w-[81%]"></div>
            </div>
          </div>
          <p className="text-xs text-[#aac9f4] flex items-center gap-1 font-medium">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            1.156 de 1.420 resolvidas
          </p>
        </div>

        {/* Metric 4 */}
        <div className="bg-[#0e1c2f] border border-[#1E3E62]/70 rounded-2xl p-5 shadow-lg hover:border-[#1E3E62] transition-all flex flex-col justify-between group">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase text-[#aac9f4] tracking-wider font-bold">
              Tempo Médio / Questão
            </span>
            <Clock className="w-4 h-4 text-[#aac9f4]/60" />
          </div>
          <div className="my-3">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white">2m 38s</span>
            </div>
            <div className="w-full bg-[#1d2a3e] h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-amber-400 h-full rounded-full w-[65%]"></div>
            </div>
          </div>
          <p className="text-xs text-[#EF233C] flex items-center gap-1 font-semibold">
            <Zap className="w-3.5 h-3.5" />
            Velocidade ideal para gabaritar o ENEM
          </p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
          <button
            onClick={() => setActiveTab('todos')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'todos'
                ? 'bg-[#D90429] text-white shadow-lg'
                : 'bg-[#132033] hover:bg-[#1E3E62] text-[#aac9f4]'
            }`}
          >
            Todos os Simulados
          </button>
          <button
            onClick={() => setActiveTab('enem')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'enem'
                ? 'bg-[#D90429] text-white shadow-lg'
                : 'bg-[#132033] hover:bg-[#1E3E62] text-[#aac9f4]'
            }`}
          >
            ENEM & Vestibulares
          </button>
          <button
            onClick={() => setActiveTab('concursos')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'concursos'
                ? 'bg-[#D90429] text-white shadow-lg'
                : 'bg-[#132033] hover:bg-[#1E3E62] text-[#aac9f4]'
            }`}
          >
            Concursos Federais
          </button>
          <button
            onClick={() => setActiveTab('olimpiadas')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'olimpiadas'
                ? 'bg-[#D90429] text-white shadow-lg'
                : 'bg-[#132033] hover:bg-[#1E3E62] text-[#aac9f4]'
            }`}
          >
            Olimpíadas Científicas
          </button>
          <button
            onClick={() => setActiveTab('fundamental')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'fundamental'
                ? 'bg-[#D90429] text-white shadow-lg'
                : 'bg-[#132033] hover:bg-[#1E3E62] text-[#aac9f4]'
            }`}
          >
            Ensino Fundamental & Médio
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#aac9f4]">
          <span>Ordenar por:</span>
          <span className="bg-[#132033] border border-[#1E3E62] px-3 py-1.5 rounded-lg text-white font-semibold">
            {sortOption}
          </span>
        </div>
      </div>

      {/* ACTIVE & RECOMMENDED EXAM SIMULATION SECTION */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D90429]"></span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Simulados em Aberto ou Recomendados
            </h2>
          </div>
          <span className="text-xs text-[#aac9f4] font-semibold bg-[#132033] border border-[#1E3E62] px-3 py-1 rounded-full">
            {filteredDashboardExams.length} simulados disponíveis
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDashboardExams.map((exam, index) => {
            const isPausedEnem = exam.id === 'enem-ciencias-natureza-matematica';

            return (
              <div
                key={exam.id}
                className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col justify-between group transition-all transform hover:-translate-y-1 border border-slate-100"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    isPausedEnem
                      ? 'bg-gradient-to-r from-red-600 via-rose-500 to-amber-500'
                      : exam.category === 'concursos'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-500'
                      : exam.category === 'olimpiadas'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                      : 'bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500'
                  }`}
                ></div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] uppercase font-bold tracking-wider border ${exam.badgeColor}`}>
                        {exam.badge}
                      </span>
                      {isPausedEnem && (
                        <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-semibold flex items-center gap-1">
                          <PauseCircle className="w-3.5 h-3.5" /> Pausado
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" /> {exam.durationMinutes} min
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#D90429] transition-colors">
                    {exam.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2">
                    {exam.subtitle}
                  </p>

                  {/* Progress bar for paused exam or stats row */}
                  {isPausedEnem ? (
                    <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl mb-4 border border-slate-100">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-700 font-semibold">Progresso da Prova</span>
                        <span className="text-red-700 font-bold">45 de 90 questões (50%)</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#D90429] h-full rounded-full w-1/2"></div>
                      </div>
                      <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                        <span>Natureza: 45 respondidas</span>
                        <span>Matemática: 0 respondidas</span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl mb-4 text-center border border-slate-100">
                      <div className="border-r border-slate-200">
                        <p className="text-[10px] text-slate-500 uppercase font-semibold">Questões</p>
                        <p className="text-sm sm:text-base text-slate-900 font-bold">{exam.questionCount}</p>
                      </div>
                      <div className="border-r border-slate-200">
                        <p className="text-[10px] text-slate-500 uppercase font-semibold">Nível</p>
                        <p className={`text-sm sm:text-base font-bold ${
                          exam.difficulty === 'Difícil' ? 'text-red-600' : 'text-slate-800'
                        }`}>
                          {exam.difficulty}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-semibold">Correção</p>
                        <p className="text-xs sm:text-sm text-slate-700 font-bold truncate">{exam.scoringType}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500 font-medium">
                    {exam.targetGrade}
                  </span>
                  <button
                    onClick={() => onSelectExam(exam)}
                    className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer ${
                      isPausedEnem
                        ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white hover:shadow-red-600/30'
                        : 'bg-slate-900 text-white hover:bg-[#D90429]'
                    }`}
                  >
                    <span>{isPausedEnem ? 'Continuar Prova' : 'Iniciar Simulado'}</span>
                    {isPausedEnem ? <Play className="w-4 h-4 fill-white" /> : <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ASYMMETRIC SECTION: SUBJECT ANALYTICS + NATIONAL LEADERBOARD */}
      <div id="ranking-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Subject Analytics (7 columns) */}
        <div className="lg:col-span-7 bg-[#0e1c2f] border border-[#1E3E62]/70 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#aac9f4] font-bold">
                  Diagnóstico de Desempenho
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Acurácia por Grande Área
                </h3>
              </div>
              <span className="px-3 py-1 bg-[#132033] border border-[#1E3E62] rounded-full text-[#aac9f4] text-xs font-semibold">
                Últimos 30 Dias
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#aac9f4] leading-relaxed">
              Baseado nas suas respostas com ponderação de coerência pedagógica (TRI). Identifique onde estão os seus pontos de fuga de nota.
            </p>
          </div>

          <div className="space-y-4 my-6">
            {/* Area 1: Matemática */}
            <div className="bg-[#132033] border border-[#1E3E62]/40 p-4 rounded-xl space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#D90429]/20 text-[#EF233C] flex items-center justify-center">
                    <span className="text-xs font-bold">MT</span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    Matemática e suas Tecnologias
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#D90429]/20 text-[#EF233C]">
                    Excelente
                  </span>
                  <span className="text-base font-extrabold text-white">88%</span>
                </div>
              </div>
              <div className="w-full bg-[#1d2a3e] h-2 rounded-full overflow-hidden">
                <div className="bg-[#EF233C] h-full rounded-full w-[88%]"></div>
              </div>
              <div className="flex justify-between text-xs text-[#aac9f4]">
                <span>Destaque: Geometria Espacial & Probabilidade</span>
                <span>420 questões feitas</span>
              </div>
            </div>

            {/* Area 2: Ciências Humanas */}
            <div className="bg-[#132033] border border-[#1E3E62]/40 p-4 rounded-xl space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#29486d]/40 text-[#aac9f4] flex items-center justify-center">
                    <span className="text-xs font-bold">CH</span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    Ciências Humanas e suas Tecnologias
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#29486d]/40 text-[#aac9f4]">
                    Excelente
                  </span>
                  <span className="text-base font-extrabold text-white">89%</span>
                </div>
              </div>
              <div className="w-full bg-[#1d2a3e] h-2 rounded-full overflow-hidden">
                <div className="bg-[#aac9f4] h-full rounded-full w-[89%]"></div>
              </div>
              <div className="flex justify-between text-xs text-[#aac9f4]">
                <span>Destaque: Filosofia Moderna & Urbanização</span>
                <span>380 questões feitas</span>
              </div>
            </div>

            {/* Area 3: Linguagens */}
            <div className="bg-[#132033] border border-[#1E3E62]/40 p-4 rounded-xl space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-900/40 text-indigo-300 flex items-center justify-center">
                    <span className="text-xs font-bold">LC</span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    Linguagens, Códigos e suas Tecnologias
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-800">
                    Ótimo
                  </span>
                  <span className="text-base font-extrabold text-white">84%</span>
                </div>
              </div>
              <div className="w-full bg-[#1d2a3e] h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-400 h-full rounded-full w-[84%]"></div>
              </div>
              <div className="flex justify-between text-xs text-[#aac9f4]">
                <span>Destaque: Interpretação Textual & Artes Visuais</span>
                <span>350 questões feitas</span>
              </div>
            </div>

            {/* Area 4: Ciências da Natureza */}
            <div className="bg-[#132033] border border-[#1E3E62]/40 p-4 rounded-xl space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <span className="text-xs font-bold">CN</span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    Ciências da Natureza e suas Tecnologias
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-400 border border-amber-800">
                    Atenção em Física
                  </span>
                  <span className="text-base font-extrabold text-white">76%</span>
                </div>
              </div>
              <div className="w-full bg-[#1d2a3e] h-2 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full w-[76%]"></div>
              </div>
              <div className="flex justify-between text-xs text-[#aac9f4]">
                <span className="text-[#ffb3af] font-medium">Recomendado: Revisar Circuitos e Eletrodinâmica</span>
                <span>270 questões feitas</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            <button
              onClick={() => onSelectExam(enemExam)}
              className="px-5 py-2.5 rounded-xl bg-[#1d2a3e] hover:bg-[#28354a] border border-[#1E3E62] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Zap className="w-4 h-4 text-[#EF233C]" />
              <span>Gerar Simulado Personalizado de Reforço</span>
            </button>
            <span className="text-xs text-[#aac9f4] flex items-center gap-1 font-medium text-center">
              Relatório Pedagógico Ativo <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Live National Ranking Table (5 columns) */}
        <div className="lg:col-span-5 bg-[#0e1c2f] border border-[#1E3E62]/70 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Ranking Nacional ENEM</h3>
              </div>
              <span className="text-[11px] text-[#aac9f4]/70 font-semibold">Simulado #03</span>
            </div>
            <p className="text-xs text-[#aac9f4] mb-4">
              Top competidores do simulado unificado de 23.400 participantes.
            </p>

            {/* Leaderboard Rows */}
            <div className="space-y-2">
              {NATIONAL_RANKING.map((entry) => (
                <div
                  key={entry.rank}
                  className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                    entry.isCurrentUser
                      ? 'bg-[#D90429]/20 border-l-4 border-[#D90429]'
                      : entry.rank === 1
                      ? 'bg-[#1d2a3e] border border-amber-400/30'
                      : 'bg-[#132033] border border-[#1E3E62]/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-full font-bold flex items-center justify-center text-xs shrink-0 ${
                        entry.rank === 1
                          ? 'bg-amber-400 text-slate-900 shadow-sm'
                          : entry.rank === 2
                          ? 'bg-slate-300 text-slate-900'
                          : entry.rank === 3
                          ? 'bg-amber-700 text-white'
                          : entry.isCurrentUser
                          ? 'bg-[#D90429] text-white font-extrabold'
                          : 'bg-[#28354a] text-[#aac9f4]'
                      }`}
                    >
                      {entry.rank}
                    </div>

                    {entry.isCurrentUser ? (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 ring-2 ring-[#D90429] bg-[#061426]">
                        <Image
                          src={userAvatar}
                          alt={userName}
                          fill
                          sizes="32px"
                          className="object-cover"
                          referrerPolicy="no-referrer"
                          unoptimized={userAvatar.startsWith('data:')}
                        />
                      </div>
                    ) : entry.avatarUrl ? (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={entry.avatarUrl}
                          alt={entry.name}
                          fill
                          sizes="32px"
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-[#29486d] text-[#aac9f4] font-bold text-xs flex items-center justify-center shrink-0">
                        RA
                      </div>
                    )}

                    <div className="min-w-0">
                      <p className={`text-xs sm:text-sm font-bold truncate leading-tight ${
                        entry.isCurrentUser ? 'text-[#EF233C]' : 'text-white'
                      }`}>
                        {entry.isCurrentUser ? `Você (${userName})` : entry.name}
                      </p>
                      <p className="text-[10px] sm:text-xs text-[#aac9f4] truncate">
                        {entry.isCurrentUser ? `Campinas - SP • ${userGoal}` : entry.cityCourse}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className={`text-sm sm:text-base font-extrabold ${
                      entry.isCurrentUser ? 'text-[#EF233C]' : entry.rank === 1 ? 'text-amber-400' : 'text-white'
                    }`}>
                      {entry.score.toFixed(1)}
                    </p>
                    <p className="text-[10px] text-[#aac9f4]/70">{entry.accuracy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#1E3E62]/40 mt-4 flex items-center justify-between text-xs">
            <p className="text-[#aac9f4]">
              Você está a <strong className="text-white">+24 pontos</strong> do Top 100 nacional.
            </p>
            <span className="text-[#EF233C] font-bold flex items-center gap-1">
              Ver ranking completo <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      {/* QUICK PRACTICE MODULES (15 MINUTES EXPRESS) */}
      <div className="bg-[#132033] border border-[#1E3E62] rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              Treino Rápido • Módulos Express (15 Minutos)
            </h3>
            <p className="text-xs sm:text-sm text-[#aac9f4] mt-1">
              Micro-simulados diários para treinar agilidade, fixar fórmulas chave e bater metas antes de dormir.
            </p>
          </div>
          <span className="text-xs text-[#aac9f4] bg-[#1d2a3e] border border-[#1E3E62] px-3 py-1.5 rounded-full font-medium self-start md:self-auto">
            4 Sprints Diários Disponíveis
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_SPRINTS.map((sprint) => (
            <div
              key={sprint.id}
              onClick={() => onSelectSprint(sprint)}
              className="bg-[#0e1c2f] border border-[#1E3E62]/50 p-5 rounded-2xl hover:border-[#D90429] hover:bg-[#1d2a3e] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase px-2 py-0.5 rounded font-extrabold bg-[#132033] text-[#EF233C] border border-[#D90429]/30">
                    {sprint.badge}
                  </span>
                  <span className="text-xs text-[#aac9f4]/70">{sprint.durationMinutes} min</span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#EF233C] transition-colors leading-snug mb-2">
                  {sprint.title}
                </h4>
                <p className="text-xs text-[#aac9f4] line-clamp-2 mb-4 leading-relaxed">
                  {sprint.description}
                </p>
              </div>

              <div className="flex items-center text-xs font-bold text-[#EF233C] gap-1 group-hover:gap-2 transition-all">
                <span>Iniciar Sprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
