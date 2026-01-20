import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle, HelpCircle, Lightbulb, ChevronRight, RotateCcw, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

export interface QuizQuestion {
  id: string;
  question: string;
  imageUrl?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface MultiQuiz {
  id: string;
  questions: QuizQuestion[];
}

interface MultiQuizCardProps {
  quiz: MultiQuiz;
  onComplete?: (score: number) => void;
}

export const MultiQuizCard = ({ quiz, onComplete }: MultiQuizCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];
  const totalQuestions = quiz.questions.length;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  const correctCount = Object.values(answers).filter(Boolean).length;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    setIsSubmitted(true);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: selectedAnswer === currentQuestion.correctAnswer
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResult(true);
      // Calculate final score
      const finalCorrectCount = Object.values({
        ...answers,
        [currentQuestion.id]: isCorrect
      }).filter(Boolean).length;
      const finalScore = Math.round((finalCorrectCount / totalQuestions) * 100);
      onComplete?.(finalScore);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setAnswers({});
    setShowResult(false);
  };

  // Result screen
  if (showResult) {
    const finalCorrectCount = Object.values(answers).filter(Boolean).length;
    const finalScore = Math.round((finalCorrectCount / totalQuestions) * 100);
    
    return (
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-6 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary">
            <Trophy className="h-10 w-10" />
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Kuis Selesai! 🎉</h3>
            <p className="text-muted-foreground">Anda telah menyelesaikan semua soal</p>
          </div>

          <div className="space-y-3">
            <div className="text-4xl font-bold text-primary">
              {finalCorrectCount}/{totalQuestions}
            </div>
            <Progress value={finalScore} className="h-3 max-w-xs mx-auto" />
            <p className="text-lg font-medium text-foreground">
              Skor: {finalScore}%
            </p>
            {finalScore >= 80 ? (
              <p className="text-success font-medium">Luar biasa! 🌟</p>
            ) : finalScore >= 60 ? (
              <p className="text-amber-600 font-medium">Bagus! Terus belajar 💪</p>
            ) : (
              <p className="text-muted-foreground">Coba lagi untuk hasil lebih baik</p>
            )}
          </div>

          <Button onClick={handleReset} variant="outline" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Ulangi Kuis
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader className="pb-3">
        {/* Progress */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-primary">
            <HelpCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Soal {currentIndex + 1}/{totalQuestions}</span>
          </div>
          <Progress value={((currentIndex + 1) / totalQuestions) * 100} className="w-24 h-2" />
        </div>
        
        {/* Question */}
        <CardTitle className="text-lg text-foreground leading-relaxed">
          {currentQuestion.question}
        </CardTitle>

        {/* Optional Image */}
        {currentQuestion.imageUrl && (
          <div className="mt-4 rounded-lg overflow-hidden bg-muted">
            <img 
              src={currentQuestion.imageUrl} 
              alt="Gambar soal"
              className="w-full h-auto max-h-48 object-contain"
            />
          </div>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        <RadioGroup
          value={selectedAnswer || ''}
          onValueChange={setSelectedAnswer}
          disabled={isSubmitted}
          className="space-y-3"
        >
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center space-x-3 p-3 rounded-lg border-2 transition-all",
                isSubmitted
                  ? option === currentQuestion.correctAnswer
                    ? "border-success bg-success/10"
                    : option === selectedAnswer
                      ? "border-destructive bg-destructive/10"
                      : "border-muted bg-muted/30"
                  : selectedAnswer === option
                    ? "border-primary bg-primary/5"
                    : "border-muted hover:border-primary/50 cursor-pointer"
              )}
            >
              <RadioGroupItem
                value={option}
                id={`q${currentIndex}-option-${index}`}
                className={cn(
                  isSubmitted && option === currentQuestion.correctAnswer && "border-success text-success",
                  isSubmitted && option === selectedAnswer && option !== currentQuestion.correctAnswer && "border-destructive text-destructive"
                )}
              />
              <Label
                htmlFor={`q${currentIndex}-option-${index}`}
                className={cn(
                  "flex-1 cursor-pointer text-base",
                  isSubmitted && option === currentQuestion.correctAnswer && "text-success font-medium",
                  isSubmitted && option === selectedAnswer && option !== currentQuestion.correctAnswer && "text-destructive"
                )}
              >
                {option}
              </Label>
              {isSubmitted && option === currentQuestion.correctAnswer && (
                <CheckCircle2 className="h-5 w-5 text-success" />
              )}
              {isSubmitted && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                <XCircle className="h-5 w-5 text-destructive" />
              )}
            </div>
          ))}
        </RadioGroup>

        {/* Result feedback */}
        {isSubmitted && (
          <div className={cn(
            "p-4 rounded-lg",
            isCorrect ? "bg-success/10 border border-success/20" : "bg-destructive/10 border border-destructive/20"
          )}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span className="font-semibold text-success">Benar! 🎉</span>
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 text-destructive" />
                  <span className="font-semibold text-destructive">Kurang tepat</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Explanation */}
        {isSubmitted && (
          <div className="p-4 rounded-lg bg-accent/50 border border-accent">
            <div className="flex items-start gap-2">
              <Lightbulb className="h-5 w-5 text-accent-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-accent-foreground mb-1">Penjelasan:</p>
                <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3 pt-2">
          {!isSubmitted ? (
            <Button 
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className="flex-1"
            >
              Cek Jawaban
            </Button>
          ) : (
            <Button 
              onClick={handleNext}
              className="flex-1"
            >
              {isLastQuestion ? 'Lihat Hasil' : 'Lanjut'}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
