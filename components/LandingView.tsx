'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  PlayCircle, 
  Star, 
  School, 
  BookOpen, 
  GraduationCap, 
  Landmark, 
  Calculator, 
  Tv, 
  Trophy, 
  Clock, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  Flame, 
  Filter, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { HeroQuestionPreview } from './HeroQuestionPreview';
import { SAMPLE_EXAMS, EXAM_CATEGORIES, Exam } from '../data/exams';

interface LandingViewProps {
  onSelectExam: (exam: Exam) => void;
  onNavigateToDashboard: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const LandingView: React.FC<LandingViewProps> = ({
  onSelectExam,
  onNavigateToDashboard,
  searchQuery,
  setSearchQuery
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [emailInput, setEmailInput] = useState('');
  const [subscribedToast, setSubscribedToast] = useState(false);

  // Filter exams based on category and search query
  const filteredExams = useMemo(() => {
    return SAMPLE_EXAMS.filter((exam) => {
      const matchesCategory =
        selectedCategory === 'todos' || exam.category === selectedCategory;
      const matchesSearch =
        exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exam.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exam.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exam.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribedToast(true);
      setTimeout(() => setSubscribedToast(false), 5000);
      setEmailInput('');
    }
  };

  const defaultExam = SAMPLE_EXAMS[0];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Ambient geometric background lighting */}
        <div className="pointer-events-none absolute -top-40 -left-32 w-96 h-96 rounded-full bg-[#D90429]/20 blur-[130px] ambient-glow"></div>
        <div className="pointer-events-none absolute top-1/2 -right-40 w-[30rem] h-[30rem] rounded-full bg-[#29486d]/30 blur-[150px]"></div>

        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 self-start bg-[#1d2a3e]/90 border border-[#D90429]/30 px-4 py-1.5 rounded-full shadow-sm">
              <span className="text-[#EF233C] font-bold text-sm">🔥</span>
              <span className="text-xs font-bold text-[#ffb3af] uppercase tracking-wider">
                +120.000 Questões Comentadas & Simulação TRI Oficial
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Aprovação é questão de treino. Faça os{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF233C] via-[#D90429] to-[#ffb3af]">
                melhores simulados
              </span>{' '}
              nacionais.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#aac9f4] max-w-2xl leading-relaxed">
              A plataforma completa com provas cronometradas e ranking em tempo real para Ensino Fundamental, Ensino Médio & ENEM, Vestibulares e Concursos Públicos. Sem cadastro, sem complicação.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onSelectExam(defaultExam)}
                className="inline-flex items-center justify-center gap-2 font-bold text-white bg-gradient-to-r from-[#D90429] to-[#EF233C] px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(217,4,41,0.5)] hover:shadow-[0_12px_28px_rgba(239,35,60,0.7)] hover:brightness-110 active:scale-95 transition-all cursor-pointer text-sm sm:text-base"
              >
                <span>Começar Simulados Grátis</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const catalog = document.getElementById('exam-catalog');
                  catalog?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 font-semibold text-white bg-[#1d2a3e]/80 hover:bg-[#28354a] border border-[#1E3E62] px-6 py-4 rounded-full transition-all text-sm sm:text-base cursor-pointer"
              >
                <PlayCircle className="w-5 h-5 text-[#aac9f4]" />
                <span>Ver Simulados Disponíveis</span>
              </button>

              <button
                onClick={onNavigateToDashboard}
                className="inline-flex items-center justify-center gap-2 font-semibold text-[#aac9f4] hover:text-white px-4 py-4 rounded-full transition-colors text-sm"
              >
                <span>Acessar Painel do Aluno</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Social Proof Banner */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="text-[#aac9f4] font-bold">4.9/5 estrelas</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E3E62]"></span>
              <span className="text-[#d6e3fe]/80">
                +45.000 estudantes aprovados em Medicina, Direito e Concursos
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Live Preview Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <HeroQuestionPreview onStartExam={() => onSelectExam(defaultExam)} />
          </div>
        </div>
      </section>

      {/* LIVE METRICS & STATS BAR */}
      <section className="w-full bg-[#0e1c2f] border-y border-[#1E3E62]/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1360px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-white">1.8M+</span>
            <span className="text-xs uppercase tracking-wider text-[#aac9f4] font-semibold">
              Simulados Realizados
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#EF233C]">120k+</span>
            <span className="text-xs uppercase tracking-wider text-[#aac9f4] font-semibold">
              Questões Cadastradas
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-white">94.2%</span>
            <span className="text-xs uppercase tracking-wider text-[#aac9f4] font-semibold">
              Aprovação de Alunos PRO
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#EF233C]">350+</span>
            <span className="text-xs uppercase tracking-wider text-[#aac9f4] font-semibold">
              Escolas & Cursinhos Parceiros
            </span>
          </div>
        </div>
      </section>

      {/* 4 OFFICIAL FRONTS CATEGORY CARDS */}
      <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-[#EF233C] uppercase tracking-widest font-extrabold">
              Categorias Oficiais
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Escolha sua frente de preparação
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#aac9f4] max-w-md">
            Bancos de questões segmentados com correção parametrizada pelo perfil de cada banca e exame do país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Ensino Fundamental */}
          <div 
            onClick={() => {
              setSelectedCategory('fundamental-medio');
              document.getElementById('exam-catalog')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group cursor-pointer bg-white text-slate-900 rounded-2xl p-6 flex flex-col justify-between shadow-[0_10px_28px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all transform hover:-translate-y-1.5 border border-slate-100"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="bg-slate-100 text-slate-700 text-[11px] uppercase px-2.5 py-1 rounded-full font-bold">
                  Bases Sólidas
                </span>
                <span className="text-xs font-semibold text-slate-500">+8.500 questões</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mt-2">
                <School className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Ensino Fundamental</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                6º ao 9º ano, SARESP, Provão Paulista, SAEB, OBMEP, Olimpíadas Científicas e Colégios Militares.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 uppercase font-semibold">Simulados Ativos</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#D90429] group-hover:gap-2 transition-all">
                <span>Acessar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Ensino Médio & ENEM (Featured) */}
          <div 
            onClick={() => {
              setSelectedCategory('vestibulares');
              document.getElementById('exam-catalog')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group cursor-pointer bg-white text-slate-900 rounded-2xl p-6 flex flex-col justify-between shadow-[0_10px_28px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all transform hover:-translate-y-1.5 relative ring-2 ring-[#D90429]"
          >
            <div className="absolute -top-3 right-6 bg-[#D90429] text-white px-3 py-0.5 rounded-full text-[11px] uppercase tracking-wider font-extrabold shadow-sm">
              Mais Procurado
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="bg-rose-50 text-[#D90429] text-[11px] uppercase px-2.5 py-1 rounded-full font-bold">
                  100% Padrão TRI
                </span>
                <span className="text-xs font-semibold text-slate-500">+45.000 questões</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#D90429] flex items-center justify-center mt-2">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Ensino Médio & ENEM</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Simulados 100% no modelo TRI, Redação Nota 1000, 1º e 2º dia cronometrados com gabaritos oficiais.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 uppercase font-semibold">Edição 2025</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#D90429] group-hover:gap-2 transition-all">
                <span>Acessar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 3: Vestibulares Tradicionais */}
          <div 
            onClick={() => {
              setSelectedCategory('vestibulares');
              document.getElementById('exam-catalog')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group cursor-pointer bg-white text-slate-900 rounded-2xl p-6 flex flex-col justify-between shadow-[0_10px_28px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all transform hover:-translate-y-1.5 border border-slate-100"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="bg-slate-100 text-slate-700 text-[11px] uppercase px-2.5 py-1 rounded-full font-bold">
                  Alta Concorrência
                </span>
                <span className="text-xs font-semibold text-slate-500">+30.000 questões</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mt-2">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Vestibulares Tradicionais</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                FUVEST, UNICAMP, UNESP, UERJ e vestibulares de Medicina com questões objetivas e gabarito passo a passo.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 uppercase font-semibold">1ª e 2ª Fase</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#D90429] group-hover:gap-2 transition-all">
                <span>Acessar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 4: Concursos Públicos */}
          <div 
            onClick={() => {
              setSelectedCategory('concursos');
              document.getElementById('exam-catalog')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group cursor-pointer bg-white text-slate-900 rounded-2xl p-6 flex flex-col justify-between shadow-[0_10px_28px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all transform hover:-translate-y-1.5 border border-slate-100"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="bg-slate-100 text-slate-700 text-[11px] uppercase px-2.5 py-1 rounded-full font-bold">
                  Foco no Edital
                </span>
                <span className="text-xs font-semibold text-slate-500">+60.000 questões</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mt-2">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Concursos Públicos</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Carreiras Policiais, Tribunais, Bancas Cebraspe (Certo/Errado), FGV, FCC com filtros de anulação.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 uppercase font-semibold">Editais Abertos</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#D90429] group-hover:gap-2 transition-all">
                <span>Acessar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE EXAM CATALOG / SELECTION DIRECTORY */}
      <section id="exam-catalog" className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#0e1c2f] border border-[#1E3E62]/70 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#1E3E62]/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#D90429] animate-pulse"></span>
                <span className="text-xs font-bold text-[#EF233C] uppercase tracking-wider">
                  Acervo Completo & Gratuito
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3 flex-wrap">
                <span>Diretório de Provas e Simulados</span>
                <span className="text-xs font-bold bg-[#132033] border border-[#1E3E62] text-[#ffb3af] px-3 py-1 rounded-full">
                  {filteredExams.length} Provas Disponíveis
                </span>
              </h2>
              <p className="text-sm text-[#aac9f4] mt-1">
                Selecione qualquer simulado para iniciar imediatamente. Mais de 20 opções oficiais com cronômetro calibrado e correção pedagógica questão a questão.
              </p>
            </div>

            {/* Quick Search in directory */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aac9f4]" />
              <input
                type="text"
                placeholder="Filtrar por nome, banca ou matéria..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#132033] border border-[#1E3E62] text-sm text-white rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#EF233C]"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
            {EXAM_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#D90429] text-white shadow-[0_0_15px_rgba(217,4,41,0.5)]'
                    : 'bg-[#132033] hover:bg-[#1E3E62] text-[#aac9f4] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Exams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredExams.map((exam) => (
              <div
                key={exam.id}
                className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl flex flex-col justify-between border border-slate-100 hover:shadow-2xl transition-all group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${exam.badgeColor}`}>
                      {exam.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {exam.durationMinutes} min
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#D90429] transition-colors leading-snug mb-2">
                    {exam.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {exam.subtitle}
                  </p>

                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-xl text-center mb-4 border border-slate-100">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-semibold">Itens</p>
                      <p className="text-sm font-bold text-slate-900">{exam.questionCount}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-semibold">Nível</p>
                      <p className={`text-sm font-bold ${
                        exam.difficulty === 'Difícil' ? 'text-[#D90429]' : 'text-slate-800'
                      }`}>
                        {exam.difficulty}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-semibold">Correção</p>
                      <p className="text-xs font-bold text-slate-700">{exam.scoringType}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {exam.targetGrade}
                  </span>
                  <button
                    onClick={() => onSelectExam(exam)}
                    className="inline-flex items-center gap-1.5 bg-[#061426] hover:bg-[#D90429] text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Iniciar Simulado</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredExams.length === 0 && (
            <div className="text-center py-12 text-[#aac9f4]">
              <AlertCircle className="w-10 h-10 mx-auto mb-3 text-[#D90429]" />
              <p className="text-base font-bold text-white">Nenhum simulado encontrado para &quot;{searchQuery}&quot;</p>
              <p className="text-xs text-[#aac9f4] mt-1">Tente pesquisar por ENEM, OBMEP, SARESP ou FUVEST.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('todos');
                }}
                className="mt-4 px-4 py-2 rounded-full bg-[#1E3E62] text-xs font-bold text-white hover:bg-[#28354a]"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PLATFORM FEATURES (WHY TRAIN WITH X SIMULADOS) */}
      <section className="w-full bg-[#132033] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1E3E62]/40">
        <div className="max-w-[1360px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-xs text-[#EF233C] uppercase tracking-widest font-extrabold">
              Tecnologia & Rigor
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Por que treinar com o X SIMULADOS?
            </h2>
            <p className="text-sm sm:text-base text-[#aac9f4]">
              Construímos um ecossistema com o mesmo rigor estatístico e cronológico das bancas examinadoras mais concorridas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#1d2a3e] rounded-2xl p-6 flex flex-col gap-3 shadow-md hover:bg-[#28354a] transition-all border border-[#1E3E62]/40">
              <div className="w-12 h-12 rounded-xl bg-[#D90429]/20 text-[#EF233C] flex items-center justify-center">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg text-white font-bold">Pontuação TRI em Tempo Real</h3>
              <p className="text-xs sm:text-sm text-[#aac9f4] leading-relaxed">
                Cálculo algorítmico idêntico ao INEP. Saiba sua nota precisa calibrada pelo peso de cada questão antes da prova oficial.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1d2a3e] rounded-2xl p-6 flex flex-col gap-3 shadow-md hover:bg-[#28354a] transition-all border border-[#1E3E62]/40">
              <div className="w-12 h-12 rounded-xl bg-[#29486d]/40 text-[#aac9f4] flex items-center justify-center">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-lg text-white font-bold">Resoluções em Vídeo e Texto</h3>
              <p className="text-xs sm:text-sm text-[#aac9f4] leading-relaxed">
                Gabarito passo a passo redigido e comentado por professores especialistas para você compreender a lógica e fixar o conteúdo.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1d2a3e] rounded-2xl p-6 flex flex-col gap-3 shadow-md hover:bg-[#28354a] transition-all border border-[#1E3E62]/40">
              <div className="w-12 h-12 rounded-xl bg-[#D90429]/20 text-[#EF233C] flex items-center justify-center">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-lg text-white font-bold">Ranking Geral e por Curso</h3>
              <p className="text-xs sm:text-sm text-[#aac9f4] leading-relaxed">
                Compare sua nota com milhares de concorrentes em âmbito nacional e monitore sua nota de corte para a carreira pretendida.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#1d2a3e] rounded-2xl p-6 flex flex-col gap-3 shadow-md hover:bg-[#28354a] transition-all border border-[#1E3E62]/40">
              <div className="w-12 h-12 rounded-xl bg-[#29486d]/40 text-[#aac9f4] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg text-white font-bold">Cronômetro e Pressão Real</h3>
              <p className="text-xs sm:text-sm text-[#aac9f4] leading-relaxed">
                Interface imersiva sem distrações que simula o tempo oficial por disciplina, forçando ritmo de prova e gestão do estresse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMMERSIVE SIMULATION SHOWCASE & GRAPHIC */}
      <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#0e1c2f] border border-[#1E3E62]/70 rounded-3xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start bg-[#D90429]/20 text-[#EF233C] text-xs font-bold uppercase px-3 py-1 rounded-full border border-[#D90429]/40">
              Garantia de Desempenho
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Diagnóstico de pontos fracos questão por questão.
            </h2>

            <p className="text-sm sm:text-base text-[#aac9f4] leading-relaxed">
              Após finalizar cada prova, você recebe um raio-X completo das disciplinas com menor assertividade, indicando exatamente onde focar as suas horas de revisão para maximizar seus pontos.
            </p>

            {/* Performance breakdown preview */}
            <div className="bg-[#132033] p-5 rounded-2xl border border-[#1E3E62]/50 flex flex-col gap-4">
              <span className="text-xs text-[#aac9f4] uppercase font-bold tracking-wider">
                Desempenho por Competência (Exemplo Simulado #12)
              </span>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs sm:text-sm text-white font-medium">
                  <span>Linguagens & Códigos</span>
                  <span className="font-bold text-emerald-400">82%</span>
                </div>
                <div className="w-full h-2.5 bg-[#1d2a3e] rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[82%]"></div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs sm:text-sm text-white font-medium">
                  <span>Ciências da Natureza</span>
                  <span className="font-bold text-amber-400">64%</span>
                </div>
                <div className="w-full h-2.5 bg-[#1d2a3e] rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[64%]"></div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs sm:text-sm text-white font-medium">
                  <span>Matemática & Suas Tecnologias</span>
                  <span className="font-bold text-[#EF233C]">91%</span>
                </div>
                <div className="w-full h-2.5 bg-[#1d2a3e] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#D90429] to-[#EF233C] rounded-full w-[91%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl relative border border-[#1E3E62]/60">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrpnzo0PxJCv3I0RRAIYyt-zDYV7VcUqV_NjfviNW7-FT_C9rXGHofhmA2sAdSPQEPDe6Ct_mzL815jaiYlkLG8FHyN_1LFy7BLgBDQi8hm_DMobNtx-DLB9HIopXAwbjLalQawKpa8_OSIzJCiD_YMO8oQPf7QNFHqc0_dWHW7BplhOTynqtc2OYuhFaAwV0VpRBbEL7TDFvovoRug3EONozSzrg1u6DPxIdfFmZljnUY2Z7qaR7Emg"
                alt="Estudante brasileira se preparando com simulados em alta performance"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020e21]/90 via-[#020e21]/20 to-transparent"></div>

              {/* Float student testimony pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#132033]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#1E3E62] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D90429] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Ranked #1 Medicina USP</p>
                    <p className="text-[11px] text-[#aac9f4]">Aluno aprovado utilizando simulados semanais</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-full">
                  842.8 TRI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION BANNER */}
      <section className="w-full bg-gradient-to-b from-[#132033] to-[#020e21] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1E3E62]/40">
        <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center gap-6 bg-[#1d2a3e]/80 border border-[#1E3E62] p-8 sm:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="inline-flex items-center gap-2 bg-[#D90429]/20 border border-[#D90429]/40 px-4 py-1.5 rounded-full">
            <span className="text-xs text-[#EF233C] uppercase font-extrabold tracking-wider">
              Acesso Imediato
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-xl">
            Pronto para conquistar sua vaga em 2025?
          </h2>

          <p className="text-sm sm:text-base text-[#aac9f4] max-w-lg leading-relaxed">
            Faça seu primeiro simulado agora com cronômetro oficial, diagnóstico instantâneo e gabarito comentado por professores.
          </p>

          {/* Quick Start / Notification Box */}
          <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col sm:flex-row gap-2 mt-2">
            <input
              type="email"
              placeholder="Digite seu melhor e-mail para receber provas..."
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="flex-1 bg-[#020e21] border border-[#1E3E62] text-white placeholder-[#aac9f4]/50 text-sm px-5 py-3.5 rounded-full focus:outline-none focus:border-[#EF233C]"
            />
            <button
              type="submit"
              className="text-sm font-bold bg-[#D90429] hover:bg-[#EF233C] text-white px-6 py-3.5 rounded-full shadow-[0_8px_20px_rgba(217,4,41,0.4)] hover:brightness-110 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
            >
              Receber Simulados
            </button>
          </form>

          {subscribedToast && (
            <div className="bg-emerald-900/90 text-emerald-200 text-xs px-4 py-2 rounded-full border border-emerald-700 animate-fadeIn flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Inscrição confirmada! Você receberá os novos simulados semanais diretamente.</span>
            </div>
          )}

          <span className="text-xs text-[#aac9f4]/60">
            100% Gratuito • Sem necessidade de cadastro • Acesso irrestrito a todas as questões
          </span>
        </div>
      </section>
    </div>
  );
};
