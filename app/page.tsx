'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { LandingView } from '@/components/LandingView';
import { StudentDashboard } from '@/components/StudentDashboard';
import { ExamPlayer } from '@/components/ExamPlayer';
import { ExamResults } from '@/components/ExamResults';
import { Footer } from '@/components/Footer';
import { ProfileModal } from '@/components/ProfileModal';
import { SAMPLE_EXAMS, AVATAR_PRESETS, Exam, QuickSprint } from '@/data/exams';

export default function Home() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'exam' | 'results'>('landing');
  const [activeExam, setActiveExam] = useState<Exam | null>(null);
  const [examAnswers, setExamAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>>({});
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // User profile customization (default "Amanda" as in Image 3 mockup, customizable with no login)
  const [userName, setUserName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedName = localStorage.getItem('xsimulados_username');
        if (savedName) return savedName;
      } catch {
        // ignore
      }
    }
    return 'Amanda';
  });

  const [userGoal, setUserGoal] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedGoal = localStorage.getItem('xsimulados_usergoal');
        if (savedGoal) return savedGoal;
      } catch {
        // ignore
      }
    }
    return 'ENEM Medicina';
  });

  const [userAvatar, setUserAvatar] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedAvatar = localStorage.getItem('xsimulados_useravatar');
        if (savedAvatar) return savedAvatar;
      } catch {
        // ignore
      }
    }
    return AVATAR_PRESETS[0].url;
  });

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleSaveProfile = (name: string, goal: string, avatar: string) => {
    setUserName(name);
    setUserGoal(goal);
    setUserAvatar(avatar);
    try {
      localStorage.setItem('xsimulados_username', name);
      localStorage.setItem('xsimulados_usergoal', goal);
      localStorage.setItem('xsimulados_useravatar', avatar);
    } catch {
      // ignore
    }
  };

  const handleSelectExam = (exam: Exam) => {
    setActiveExam(exam);
    setExamAnswers({});
    setTimeSpentSeconds(0);
    setCurrentView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSprint = (sprint: QuickSprint) => {
    const parentExam = SAMPLE_EXAMS.find((e) => e.id === sprint.examId) || SAMPLE_EXAMS[0];
    // Create an express version
    const expressExam: Exam = {
      ...parentExam,
      id: sprint.id,
      title: sprint.title,
      subtitle: sprint.description,
      durationMinutes: sprint.durationMinutes,
      questions: parentExam.questions.slice(0, Math.min(sprint.itemsCount, parentExam.questions.length))
    };
    handleSelectExam(expressExam);
  };

  const handleFinishExam = (answers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>, timeSpent: number) => {
    setExamAnswers(answers);
    setTimeSpentSeconds(timeSpent);
    setCurrentView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetryExam = () => {
    if (activeExam) {
      setExamAnswers({});
      setTimeSpentSeconds(0);
      setCurrentView('exam');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleChooseOtherExam = () => {
    setActiveExam(null);
    setCurrentView('landing');
    setTimeout(() => {
      document.getElementById('exam-catalog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSelectCategoryFromFooter = (catId: string) => {
    setCurrentView('landing');
    setTimeout(() => {
      document.getElementById('exam-catalog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#061426] text-[#d6e3fe] flex flex-col font-sans selection:bg-[#D90429] selection:text-white">
      {/* Dynamic Header/Navbar (hidden during active Exam taking mode for distraction-free test conditions) */}
      {currentView !== 'exam' && (
        <Navbar
          currentView={currentView}
          setCurrentView={setCurrentView}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onQuickStart={() => handleSelectExam(SAMPLE_EXAMS[0])}
          userName={userName}
          userGoal={userGoal}
          userAvatar={userAvatar}
          onOpenProfileModal={() => setIsProfileModalOpen(true)}
        />
      )}

      {/* Main View Router */}
      <main className={`flex-1 flex flex-col ${currentView !== 'exam' ? 'pt-24' : ''}`}>
        {currentView === 'landing' && (
          <LandingView
            onSelectExam={handleSelectExam}
            onNavigateToDashboard={() => {
              setCurrentView('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {currentView === 'dashboard' && (
          <StudentDashboard
            onSelectExam={handleSelectExam}
            onSelectSprint={handleSelectSprint}
            userName={userName}
            userGoal={userGoal}
            userAvatar={userAvatar}
            onOpenProfileModal={() => setIsProfileModalOpen(true)}
          />
        )}

        {currentView === 'exam' && activeExam && (
          <ExamPlayer
            exam={activeExam}
            onFinishExam={handleFinishExam}
            onExitExam={() => setCurrentView('landing')}
          />
        )}

        {currentView === 'results' && activeExam && (
          <ExamResults
            exam={activeExam}
            answers={examAnswers}
            timeSpentSeconds={timeSpentSeconds}
            onRetryExam={handleRetryExam}
            onChooseOtherExam={handleChooseOtherExam}
            onGoToDashboard={() => setCurrentView('dashboard')}
          />
        )}
      </main>

      {/* Footer (hidden during active exam player for focus) */}
      {currentView !== 'exam' && (
        <Footer
          onSelectCategory={handleSelectCategoryFromFooter}
          onNavigateToDashboard={() => {
            setCurrentView('dashboard');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Profile Customization Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        currentName={userName}
        currentGoal={userGoal}
        currentAvatar={userAvatar}
        onSave={handleSaveProfile}
      />
    </div>
  );
}
