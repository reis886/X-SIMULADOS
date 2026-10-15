'use client';

import React, { useState, useEffect } from 'react';
import { 
  Timer, 
  ArrowLeft, 
  ArrowRight, 
  Flag, 
  CheckCircle2, 
  AlertTriangle, 
  Pause, 
  Play, 
  Maximize2, 
  Minimize2, 
  Type, 
  EyeOff, 
  HelpCircle, 
  Grid, 
  X,
  Sparkles
} from 'lucide-react';
import { Exam, Question } from '../data/exams';

interface ExamPlayerProps {
  exam: Exam;
  onFinishExam: (answers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>, timeSpentSeconds: number) => void;
  onExitExam: () => void;
}

export const ExamPlayer: React.FC<ExamPlayerProps> = ({
  exam,
  onFinishExam,
  onExitExam
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [struckOutOptions, setStruckOutOptions] = useState<Record<number, Set<string>>>({});
  
  // Timer state
  const totalSecondsAllocated = exam.durationMinutes * 60;
  const [secondsRemaining, setSecondsRemaining] = useState(totalSecondsAllocated);
  const [isPaused, setIsPaused] = useState(false);
  const [showFinishConfirm, setShowFinishConfirm] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showMatrixDrawer, setShowMatrixDrawer] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  const currentQuestion: Question = exam.questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = exam.questions.length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  // Active Timer countdown
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // Auto-submit on time expiry
          onFinishExam(answers, totalSecondsAllocated);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, answers, totalSecondsAllocated, onFinishExam]);

  const formatTimer = (sec: number) => {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (letter: 'A' | 'B' | 'C' | 'D' | 'E') => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: letter
    }));
  };

  const toggleFlag = (qId: number) => {
    setFlaggedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  const toggleStrikeOut = (qId: number, letter: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setStruckOutOptions((prev) => {
      const currentSet = new Set(prev[qId] || []);
      if (currentSet.has(letter)) currentSet.delete(letter);
      else currentSet.add(letter);
      return { ...prev, [qId]: currentSet };
    });
  };

  const handleFinish = () => {
    const timeSpent = totalSecondsAllocated - secondsRemaining;
    onFinishExam(answers, Math.max(timeSpent, 1));
  };

  const isLowTime = secondsRemaining < 300; // less than 5 minutes

  return (
    <div className="min-h-screen bg-[#061426] text-[#d6e3fe] flex flex-col pb-24">
      {/* Top Test Player Bar */}
      <header className="sticky top-0 z-40 bg-[#061426]/95 backdrop-blur-md border-b border-[#1E3E62] px-4 sm:px-6 py-3 shadow-md">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-4">
          {/* Left: Back / Exit & Exam Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowExitConfirm(true)}
              className="p-2 rounded-xl bg-[#0e1c2f] hover:bg-[#1E3E62] text-[#aac9f4] hover:text-white transition-colors cursor-pointer"
              title="Voltar ao início"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#EF233C] uppercase tracking-wider hidden sm:inline">
                {exam.categoryLabel}
              </span>
              <h2 className="text-sm sm:text-base font-extrabold text-white truncate max-w-[200px] sm:max-w-md">
                {exam.title}
              </h2>
            </div>
          </div>

          {/* Center: Timer & Pause */}
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono font-bold text-xs sm:text-sm border transition-colors ${
                isLowTime
                  ? 'bg-rose-950/80 border-[#D90429] text-[#EF233C] animate-pulse'
                  : 'bg-[#020e21] border-[#1E3E62] text-white'
              }`}
            >
              <Timer className="w-4 h-4 text-[#EF233C]" />
              <span>{formatTimer(secondsRemaining)}</span>
            </div>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-xl bg-[#0e1c2f] hover:bg-[#1E3E62] text-[#aac9f4] hover:text-white transition-colors cursor-pointer"
              title={isPaused ? 'Retomar simulado' : 'Pausar simulado'}
            >
              {isPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4" />}
            </button>
          </div>

          {/* Right: Question Matrix Drawer & Finish button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
              className="hidden md:flex p-2 rounded-xl bg-[#0e1c2f] hover:bg-[#1E3E62] text-[#aac9f4] hover:text-white transition-colors cursor-pointer text-xs font-bold"
              title="Ajustar tamanho da fonte"
            >
              <Type className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowMatrixDrawer(!showMatrixDrawer)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0e1c2f] hover:bg-[#1E3E62] text-[#aac9f4] hover:text-white text-xs font-bold border border-[#1E3E62] transition-colors cursor-pointer"
            >
              <Grid className="w-4 h-4" />
              <span className="hidden sm:inline">Gabarito</span>
              <span className="bg-[#1E3E62] text-white px-1.5 py-0.5 rounded text-[10px]">
                {answeredCount}/{totalQuestions}
              </span>
            </button>

            <button
              onClick={() => setShowFinishConfirm(true)}
              className="bg-[#D90429] hover:bg-[#EF233C] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-[#D90429]/40 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              Finalizar
            </button>
          </div>
        </div>

        {/* Global Progress Line */}
        <div className="w-full bg-[#0e1c2f] h-1.5 mt-3 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#D90429] to-[#EF233C] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </header>

      {/* Main Exam Canvas */}
      <main className="max-w-[1040px] w-full mx-auto px-4 sm:px-6 pt-6 flex-1 flex flex-col gap-6">
        {/* Question Header Meta */}
        <div className="flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-[#1E3E62] text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[11px]">
              Questão {currentIndex + 1} de {totalQuestions}
            </span>
            <span className="text-[#aac9f4] font-semibold">
              {currentQuestion.examSource} • {currentQuestion.discipline}
            </span>
            <span className="text-[#aac9f4]/60">• {currentQuestion.topic}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleFlag(currentQuestion.id)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                flaggedQuestions.has(currentQuestion.id)
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500'
                  : 'bg-[#0e1c2f] text-[#aac9f4] border-[#1E3E62] hover:text-white'
              }`}
            >
              <Flag className={`w-3.5 h-3.5 ${flaggedQuestions.has(currentQuestion.id) ? 'fill-amber-400' : ''}`} />
              <span>{flaggedQuestions.has(currentQuestion.id) ? 'Marcada para Revisão' : 'Marcar para Revisão'}</span>
            </button>
          </div>
        </div>

        {/* PRISTINE LIGHT ACADEMIC QUESTION SHEET CARD */}
        <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-slate-200 flex flex-col gap-6">
          {/* Topic header within sheet */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D90429]"></span>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#D90429]">
                {currentQuestion.discipline}
              </span>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Dificuldade: <strong className="text-slate-800">{currentQuestion.difficulty}</strong>
            </span>
          </div>

          {/* Context passage if present */}
          {currentQuestion.contextText && (
            <div className="bg-slate-50 p-4 rounded-2xl border-l-4 border-slate-400 italic text-slate-700 text-sm leading-relaxed">
              &ldquo;{currentQuestion.contextText}&rdquo;
            </div>
          )}

          {/* Question Stem Text */}
          <div className={fontSize === 'large' ? 'text-lg leading-relaxed' : 'text-base leading-relaxed'}>
            <p className="font-semibold text-slate-900">
              {currentQuestion.stem}
            </p>
          </div>

          {/* Multiple Choice Options List (A, B, C, D, E) */}
          <div className="flex flex-col gap-3 pt-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Selecione uma alternativa:
            </span>

            {currentQuestion.options.map((option) => {
              const isSelected = answers[currentQuestion.id] === option.letter;
              const isStruck = (struckOutOptions[currentQuestion.id] || new Set()).has(option.letter);

              return (
                <div
                  key={option.letter}
                  onClick={() => handleSelectOption(option.letter)}
                  className={`group relative cursor-pointer flex items-start gap-3.5 p-4 rounded-2xl transition-all border ${
                    isSelected
                      ? 'bg-rose-50/80 border-[#D90429] ring-2 ring-[#D90429]/40 shadow-md'
                      : isStruck
                      ? 'bg-slate-100/70 border-slate-200 opacity-50'
                      : 'bg-[#F8FAFC] hover:bg-slate-100/80 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Circular Letter Badge */}
                  <span
                    className={`w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center shrink-0 transition-colors shadow-xs ${
                      isSelected
                        ? 'bg-[#D90429] text-white'
                        : 'bg-white text-slate-800 border border-slate-300 group-hover:border-slate-400'
                    }`}
                  >
                    {option.letter}
                  </span>

                  {/* Option Text */}
                  <span
                    className={`text-sm sm:text-base flex-1 pt-1 leading-snug ${
                      isSelected
                        ? 'font-bold text-slate-950'
                        : isStruck
                        ? 'line-through text-slate-400'
                        : 'text-slate-800'
                    }`}
                  >
                    {option.text}
                  </span>

                  {/* Strikeout toggle icon for eliminating choices */}
                  <button
                    onClick={(e) => toggleStrikeOut(currentQuestion.id, option.letter, e)}
                    className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 opacity-60 hover:opacity-100 transition-opacity"
                    title={isStruck ? 'Desfazer eliminação' : 'Riscar alternativa'}
                  >
                    <EyeOff className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Sticky Bottom Action Dock */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#061426]/95 backdrop-blur-md border-t border-[#1E3E62] px-4 sm:px-6 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1040px] mx-auto flex items-center justify-between gap-3">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-[#0e1c2f] border-[#1E3E62] text-[#aac9f4]'
                : 'bg-[#132033] hover:bg-[#1E3E62] border-[#1E3E62] text-white hover:text-white'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          {/* Quick Counter */}
          <div className="text-xs text-[#aac9f4] font-medium hidden sm:flex items-center gap-2">
            <span>{answeredCount} respondidas de {totalQuestions}</span>
            {answers[currentQuestion.id] && (
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Salva
              </span>
            )}
          </div>

          {/* Next or Finish Button */}
          {currentIndex < totalQuestions - 1 ? (
            <button
              onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#D90429] hover:bg-[#EF233C] text-white shadow-md hover:shadow-[#D90429]/40 active:scale-95 transition-all cursor-pointer"
            >
              <span>Próxima</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setShowFinishConfirm(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Finalizar Simulado</span>
            </button>
          )}
        </div>
      </footer>

      {/* QUESTION MATRIX DRAWER / MODAL */}
      {showMatrixDrawer && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0e1c2f] border border-[#1E3E62] rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#1E3E62] pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Grid className="w-5 h-5 text-[#EF233C]" />
                Cartão de Respostas do Simulado
              </h3>
              <button
                onClick={() => setShowMatrixDrawer(false)}
                className="text-[#aac9f4] hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 text-xs text-[#aac9f4] py-1">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-500"></span> Respondida
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-500"></span> Marcada
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#1E3E62]"></span> Pendente
              </span>
            </div>

            {/* Matrix buttons */}
            <div className="grid grid-cols-5 gap-2.5 py-2">
              {exam.questions.map((q, idx) => {
                const isAnswered = answers[q.id] !== undefined;
                const isFlagged = flaggedQuestions.has(q.id);
                const isCurrent = idx === currentIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setShowMatrixDrawer(false);
                    }}
                    className={`h-11 rounded-xl text-xs font-bold transition-all relative flex items-center justify-center cursor-pointer ${
                      isCurrent
                        ? 'ring-2 ring-[#EF233C] text-white bg-[#D90429]'
                        : isAnswered
                        ? 'bg-emerald-600/90 text-white shadow-sm'
                        : isFlagged
                        ? 'bg-amber-500/80 text-white'
                        : 'bg-[#132033] hover:bg-[#1E3E62] text-[#aac9f4]'
                    }`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-300"></span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#1E3E62] flex justify-between items-center text-xs">
              <span className="text-[#aac9f4]">{answeredCount} de {totalQuestions} resolvidas</span>
              <button
                onClick={() => {
                  setShowMatrixDrawer(false);
                  setShowFinishConfirm(true);
                }}
                className="text-[#EF233C] hover:underline font-bold"
              >
                Concluir Prova Agora
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FINISH CONFIRMATION MODAL */}
      {showFinishConfirm && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0e1c2f] border border-[#1E3E62] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-5 text-center">
            <div className="w-14 h-14 rounded-full bg-[#D90429]/20 text-[#EF233C] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-white">Finalizar Simulado?</h3>
              <p className="text-xs sm:text-sm text-[#aac9f4] mt-2 leading-relaxed">
                Você respondeu <strong>{answeredCount} de {totalQuestions}</strong> questões.
                {answeredCount < totalQuestions && (
                  <span className="block text-amber-400 mt-1 font-semibold">
                    Atenção: existem {totalQuestions - answeredCount} questão(ões) em branco!
                  </span>
                )}
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowFinishConfirm(false)}
                className="flex-1 py-3 rounded-full bg-[#132033] hover:bg-[#1E3E62] text-[#aac9f4] hover:text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Continuar Prova
              </button>
              <button
                onClick={handleFinish}
                className="flex-1 py-3 rounded-full bg-[#D90429] hover:bg-[#EF233C] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-[#D90429]/50 transition-all cursor-pointer"
              >
                Confirmar e Corrigir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PAUSED MODAL */}
      {isPaused && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1c2f] border border-[#1E3E62] rounded-3xl p-8 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <Pause className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Simulado Pausado</h3>
            <p className="text-xs text-[#aac9f4]">
              O cronômetro está congelado. Respire fundo e retome quando estiver pronto para voltar à zona de foco.
            </p>
            <button
              onClick={() => setIsPaused(false)}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#D90429] to-[#EF233C] text-white font-bold text-sm shadow-lg cursor-pointer"
            >
              Retomar Simulado
            </button>
          </div>
        </div>
      )}

      {/* EXIT CONFIRMATION MODAL */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0e1c2f] border border-[#1E3E62] rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-rose-500/20 text-[#EF233C] flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Deseja sair do simulado?</h3>
            <p className="text-xs text-[#aac9f4]">
              Se sair agora, o progresso desta sessão não será computado no seu histórico de acurácia.
            </p>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 py-2.5 rounded-full bg-[#132033] text-[#aac9f4] font-bold text-xs"
              >
                Ficar
              </button>
              <button
                onClick={onExitExam}
                className="flex-1 py-2.5 rounded-full bg-[#D90429] text-white font-bold text-xs"
              >
                Sair Mesmo Assim
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
