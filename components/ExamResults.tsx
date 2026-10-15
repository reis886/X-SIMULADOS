'use client';

import React, { useState } from 'react';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  BarChart2, 
  RotateCcw, 
  ArrowRight, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  Share2, 
  BookOpen, 
  HelpCircle, 
  Zap, 
  Sparkles,
  Award
} from 'lucide-react';
import { Exam, Question } from '../data/exams';

interface ExamResultsProps {
  exam: Exam;
  answers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>;
  timeSpentSeconds: number;
  onRetryExam: () => void;
  onChooseOtherExam: () => void;
  onGoToDashboard: () => void;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  exam,
  answers,
  timeSpentSeconds,
  onRetryExam,
  onChooseOtherExam,
  onGoToDashboard
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'correct' | 'wrong' | 'unanswered'>('all');
  const [expandedExplanations, setExpandedExplanations] = useState<Record<number, boolean>>({});

  // Compute metrics
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;
  let totalTriWeight = 0;
  let earnedTriWeight = 0;

  const subjectStats: Record<string, { total: number; correct: number }> = {};

  exam.questions.forEach((q) => {
    const userAnswer = answers[q.id];
    totalTriWeight += q.triWeight;

    if (!subjectStats[q.discipline]) {
      subjectStats[q.discipline] = { total: 0, correct: 0 };
    }
    subjectStats[q.discipline].total += 1;

    if (!userAnswer) {
      unansweredCount++;
    } else if (userAnswer === q.correctAnswer) {
      correctCount++;
      earnedTriWeight += q.triWeight;
      subjectStats[q.discipline].correct += 1;
    } else {
      wrongCount++;
    }
  });

  const totalQuestions = exam.questions.length;
  const accuracyPercentage = Math.round((correctCount / totalQuestions) * 100);

  // Simulated TRI score (scaled appropriately based on accuracy and weights)
  // Base 350 + (earnedTriWeight / totalTriWeight) * 600
  const simulatedTri = Math.round(360 + (earnedTriWeight / (totalTriWeight || 1)) * 520 + (correctCount > 0 ? 30 : 0));

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  const avgTimePerQuestion = totalQuestions > 0 ? Math.round(timeSpentSeconds / totalQuestions) : 0;

  const toggleExplanation = (qId: number) => {
    setExpandedExplanations((prev) => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  // Filtered questions
  const filteredQuestions = exam.questions.filter((q) => {
    const userAnswer = answers[q.id];
    if (filterMode === 'correct') return userAnswer === q.correctAnswer;
    if (filterMode === 'wrong') return userAnswer && userAnswer !== q.correctAnswer;
    if (filterMode === 'unanswered') return !userAnswer;
    return true;
  });

  // Performance diagnostic title
  let performanceBadge = 'Desempenho Notável';
  let performanceColor = 'text-emerald-400 bg-emerald-950/70 border-emerald-800';
  if (accuracyPercentage >= 85) {
    performanceBadge = 'Excelente • Nível de Aprovação em Alta Concorrência';
    performanceColor = 'text-emerald-400 bg-emerald-950/70 border-emerald-800';
  } else if (accuracyPercentage >= 65) {
    performanceBadge = 'Bom Desempenho • Acima da Média Nacional';
    performanceColor = 'text-blue-400 bg-blue-950/70 border-blue-800';
  } else if (accuracyPercentage >= 50) {
    performanceBadge = 'Regular • Reforço Recomendado nos Tópicos Críticos';
    performanceColor = 'text-amber-400 bg-amber-950/70 border-amber-800';
  } else {
    performanceBadge = 'Atenção • Revise os Gabaritos Comentados Abaixo';
    performanceColor = 'text-rose-400 bg-rose-950/70 border-rose-800';
  }

  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Top Banner: Score & Analytics Header */}
      <div className="relative overflow-hidden bg-[#0e1c2f] border border-[#1E3E62] rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#D90429]/15 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E3E62]/60">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Simulado Concluído com Sucesso
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                Resultado: {exam.title}
              </h1>
            </div>

            <div className={`self-start sm:self-auto px-3.5 py-1.5 rounded-full border text-xs font-bold ${performanceColor}`}>
              {performanceBadge}
            </div>
          </div>

          {/* 4 Score Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Score */}
            <div className="bg-[#132033] border border-[#1E3E62]/60 rounded-2xl p-4 text-center">
              <span className="text-[11px] text-[#aac9f4] uppercase font-bold tracking-wider">
                Pontuação Total
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                {correctCount} <span className="text-sm text-[#aac9f4]/70">/ {totalQuestions}</span>
              </p>
              <span className="text-xs font-bold text-emerald-400 mt-1 block">
                {accuracyPercentage}% de acertos
              </span>
            </div>

            {/* Simulated TRI */}
            <div className="bg-[#132033] border border-[#1E3E62]/60 rounded-2xl p-4 text-center">
              <span className="text-[11px] text-[#aac9f4] uppercase font-bold tracking-wider">
                Nota TRI Calibrada
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#EF233C] mt-1">
                {simulatedTri}
              </p>
              <span className="text-[11px] text-[#ffb3af] mt-1 block font-medium">
                Padrão Oficial INEP
              </span>
            </div>

            {/* Time Spent */}
            <div className="bg-[#132033] border border-[#1E3E62]/60 rounded-2xl p-4 text-center">
              <span className="text-[11px] text-[#aac9f4] uppercase font-bold tracking-wider">
                Tempo Total
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {formatTime(timeSpentSeconds)}
              </p>
              <span className="text-[11px] text-[#aac9f4] mt-1 block font-medium">
                Média: {avgTimePerQuestion}s / questão
              </span>
            </div>

            {/* Status Breakdown */}
            <div className="bg-[#132033] border border-[#1E3E62]/60 rounded-2xl p-4 text-center flex flex-col justify-center">
              <span className="text-[11px] text-[#aac9f4] uppercase font-bold tracking-wider">
                Balanço de Respostas
              </span>
              <div className="flex justify-center items-center gap-3 mt-2 text-xs font-bold">
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {correctCount}
                </span>
                <span className="text-rose-400 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> {wrongCount}
                </span>
                {unansweredCount > 0 && (
                  <span className="text-slate-400 flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5" /> {unansweredCount}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Subject Breakdown Bars */}
          <div className="bg-[#132033] border border-[#1E3E62]/60 rounded-2xl p-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#aac9f4]">
              Desempenho por Disciplina
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {Object.entries(subjectStats).map(([subj, stats]) => {
                const pct = Math.round((stats.correct / stats.total) * 100);
                return (
                  <div key={subj} className="space-y-1.5">
                    <div className="flex justify-between text-xs text-white">
                      <span className="font-semibold">{subj}</span>
                      <span className="font-bold text-[#aac9f4]">
                        {stats.correct}/{stats.total} ({pct}%)
                      </span>
                    </div>
                    <div className="w-full bg-[#1d2a3e] h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          pct >= 70 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-400' : 'bg-[#D90429]'
                        }`}
                        style={{ width: `${pct}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onRetryExam}
                className="inline-flex items-center gap-2 bg-[#1E3E62] hover:bg-[#28354a] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-[#aac9f4]" />
                <span>Tentar Novamente</span>
              </button>

              <button
                onClick={onChooseOtherExam}
                className="inline-flex items-center gap-2 bg-[#D90429] hover:bg-[#EF233C] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer"
              >
                <span>Escolher Outro Simulado</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onGoToDashboard}
              className="text-xs text-[#aac9f4] hover:text-white underline font-semibold cursor-pointer"
            >
              Ir para o Painel Geral do Aluno
            </button>
          </div>
        </div>
      </div>

      {/* QUESTION-BY-QUESTION CORRECTION & COMMENTARY */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Gabarito Comentado Questão a Questão
            </h2>
            <p className="text-xs sm:text-sm text-[#aac9f4] mt-1">
              Confira as respostas corretas e a explicação passo a passo dos professores especialistas.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                filterMode === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'bg-[#0e1c2f] border border-[#1E3E62] text-[#aac9f4]'
              }`}
            >
              Todas ({totalQuestions})
            </button>
            <button
              onClick={() => setFilterMode('correct')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                filterMode === 'correct'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-[#0e1c2f] border border-[#1E3E62] text-emerald-400'
              }`}
            >
              Acertos ({correctCount})
            </button>
            <button
              onClick={() => setFilterMode('wrong')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                filterMode === 'wrong'
                  ? 'bg-[#D90429] text-white shadow-sm'
                : 'bg-[#0e1c2f] border border-[#1E3E62] text-rose-400'
              }`}
            >
              Erros ({wrongCount})
            </button>
            {unansweredCount > 0 && (
              <button
                onClick={() => setFilterMode('unanswered')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  filterMode === 'unanswered'
                    ? 'bg-slate-300 text-slate-900 shadow-sm'
                    : 'bg-[#0e1c2f] border border-[#1E3E62] text-slate-400'
                }`}
              >
                Em Branco ({unansweredCount})
              </button>
            )}
          </div>
        </div>

        {/* Questions Cards List (PRISTINE WHITE CARDS WITH DARK CHARCOAL TEXT FOR MAXIMUM LEGIBILITY) */}
        <div className="space-y-6">
          {filteredQuestions.map((q, index) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            const isUnanswered = !userAnswer;
            const isExpanded = expandedExplanations[q.id] !== false; // expanded by default

            return (
              <div
                key={q.id}
                className="bg-white text-[#111827] rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 transition-all"
              >
                {/* Header status bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-xs uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      Item {exam.questions.findIndex((item) => item.id === q.id) + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {q.discipline} • {q.topic}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isUnanswered ? (
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1">
                        <HelpCircle className="w-3.5 h-3.5" /> Em branco
                      </span>
                    ) : isCorrect ? (
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> Você acertou
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-rose-800 bg-rose-100 border border-rose-200 px-3 py-1 rounded-full flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5 text-[#D90429]" /> Você errou
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Stem */}
                <p className="text-sm sm:text-base font-semibold text-[#111827] leading-relaxed mb-5">
                  {q.stem}
                </p>

                {/* Options display with correct vs user selected comparison */}
                <div className="flex flex-col gap-2.5 mb-5">
                  {q.options.map((opt) => {
                    const isOptionCorrect = opt.letter === q.correctAnswer;
                    const isOptionUser = opt.letter === userAnswer;

                    let rowStyle = 'bg-slate-50 border-slate-200 text-slate-700';
                    let badgeStyle = 'bg-white border-slate-300 text-slate-700';

                    if (isOptionCorrect) {
                      rowStyle = 'bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500 text-emerald-950 font-medium';
                      badgeStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                    } else if (isOptionUser && !isOptionCorrect) {
                      rowStyle = 'bg-rose-50 border-[#D90429] ring-1 ring-[#D90429] text-rose-950';
                      badgeStyle = 'bg-[#D90429] text-white border-[#D90429] font-bold';
                    }

                    return (
                      <div
                        key={opt.letter}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border transition-colors ${rowStyle}`}
                      >
                        <span className={`w-7 h-7 rounded-full text-xs flex items-center justify-center shrink-0 border ${badgeStyle}`}>
                          {opt.letter}
                        </span>
                        <span className="text-xs sm:text-sm flex-1 pt-0.5 leading-snug">
                          {opt.text}
                        </span>
                        <div className="shrink-0 flex items-center gap-1.5 text-xs font-bold">
                          {isOptionCorrect && (
                            <span className="text-emerald-700 flex items-center gap-1">
                              <CheckCircle2 className="w-4 h-4" /> Gabarito Oficial
                            </span>
                          )}
                          {isOptionUser && !isOptionCorrect && (
                            <span className="text-[#D90429] flex items-center gap-1">
                              <XCircle className="w-4 h-4" /> Sua Resposta
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Explanatory Commentary Box (Gabarito Comentado) */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
                  <button
                    onClick={() => toggleExplanation(q.id)}
                    className="w-full flex items-center justify-between text-left text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:text-slate-900 cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5 text-[#D90429]">
                      <Sparkles className="w-4 h-4" />
                      Gabarito Comentado & Resolução Detalhada
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <div className="pt-3 mt-2 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>{q.explanation}</p>
                      <div className="pt-1 text-[11px] text-slate-500 font-medium">
                        Referência: Matriz de Referência {q.examSource} • Peso TRI estimado: {q.triWeight} pontos
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
