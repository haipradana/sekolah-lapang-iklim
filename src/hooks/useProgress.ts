import { useState, useEffect } from 'react';

interface Progress {
  completedSubmodules: string[];
  quizScores: Record<string, number>;
  pretestScore?: number;
  posttestScore?: number;
}

interface StoredProgress {
  data: Progress;
  timestamp: number; // waktu pertama kali disimpan
}

const STORAGE_KEY = 'sekolah-lapang-iklim-progress';
const EXPIRY_DURATION = 24 * 60 * 60 * 1000; // 24 jam dalam milliseconds

const getInitialProgress = (): Progress => ({
  completedSubmodules: [],
  quizScores: {}
});

export const useProgress = () => {
  const [progress, setProgress] = useState<Progress>(getInitialProgress());

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const now = Date.now();

        // Cek apakah format baru (dengan timestamp) atau format lama
        if (parsed.timestamp && parsed.data) {
          // Format baru dengan timestamp
          const storedProgress = parsed as StoredProgress;

          // Cek apakah sudah expired (lebih dari 24 jam)
          if (now - storedProgress.timestamp > EXPIRY_DURATION) {
            // Data expired, hapus dan reset
            localStorage.removeItem(STORAGE_KEY);
            setProgress(getInitialProgress());
          } else {
            // Data masih valid
            setProgress(storedProgress.data);
          }
        } else {
          // Format lama tanpa timestamp, migrasi ke format baru
          const oldProgress = parsed as Progress;
          setProgress(oldProgress);

          // Simpan ulang dengan format baru
          const newStoredProgress: StoredProgress = {
            data: oldProgress,
            timestamp: now
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(newStoredProgress));
        }
      } catch (e) {
        console.error('Failed to parse progress:', e);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const saveProgress = (newProgress: Progress) => {
    setProgress(newProgress);

    // Ambil timestamp yang sudah ada, atau buat baru jika belum ada
    const stored = localStorage.getItem(STORAGE_KEY);
    let timestamp = Date.now();

    if (stored) {
      try {
        const parsed: StoredProgress = JSON.parse(stored);
        timestamp = parsed.timestamp; // Gunakan timestamp awal
      } catch (e) {
        // Jika gagal parse, gunakan timestamp baru
      }
    }

    const storedProgress: StoredProgress = {
      data: newProgress,
      timestamp
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedProgress));
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
    localStorage.removeItem(STORAGE_KEY);
    setProgress(getInitialProgress());
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

  const isPretestCompleted = (): boolean => {
    return progress.pretestScore !== undefined;
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
    getPosttestScore,
    isPretestCompleted
  };
};
