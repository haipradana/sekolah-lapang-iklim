import { useState, useEffect } from 'react';

interface Progress {
  completedSubmodules: string[];
  quizScores: Record<string, number>;
  pretestScore?: number;
  posttestScore?: number;
}

const STORAGE_KEY = 'sekolah-lapang-iklim-progress';

export const useProgress = () => {
  const [progress, setProgress] = useState<Progress>({
    completedSubmodules: [],
    quizScores: {}
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse progress:', e);
      }
    }
  }, []);

  const saveProgress = (newProgress: Progress) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  const markSubmoduleComplete = (submoduleId: string) => {
    if (!progress.completedSubmodules.includes(submoduleId)) {
      const newProgress = {
        ...progress,
        completedSubmodules: [...progress.completedSubmodules, submoduleId]
      };
      saveProgress(newProgress);
    }
  };

  const saveQuizScore = (quizId: string, score: number) => {
    const newProgress = {
      ...progress,
      quizScores: {
        ...progress.quizScores,
        [quizId]: score
      }
    };
    saveProgress(newProgress);
  };

  const isSubmoduleComplete = (submoduleId: string): boolean => {
    return progress.completedSubmodules.includes(submoduleId);
  };

  const getQuizScore = (quizId: string): number | undefined => {
    return progress.quizScores[quizId];
  };

  const getOverallProgress = (totalSubmodules: number): number => {
    if (totalSubmodules === 0) return 0;
    return Math.round((progress.completedSubmodules.length / totalSubmodules) * 100);
  };

  const resetProgress = () => {
    const newProgress = { completedSubmodules: [], quizScores: {} };
    saveProgress(newProgress);
  };

  // Pretest & Posttest functions
  const savePretestScore = (score: number) => {
    const newProgress = {
      ...progress,
      pretestScore: score
    };
    saveProgress(newProgress);
  };

  const savePosttestScore = (score: number) => {
    const newProgress = {
      ...progress,
      posttestScore: score
    };
    saveProgress(newProgress);
  };

  const getPretestScore = (): number | null => {
    return progress.pretestScore ?? null;
  };

  const getPosttestScore = (): number | null => {
    return progress.posttestScore ?? null;
  };

  return {
    progress,
    markSubmoduleComplete,
    saveQuizScore,
    isSubmoduleComplete,
    getQuizScore,
    getOverallProgress,
    resetProgress,
    savePretestScore,
    savePosttestScore,
    getPretestScore,
    getPosttestScore
  };
};
