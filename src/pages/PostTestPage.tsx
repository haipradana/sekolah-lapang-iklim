import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ChevronRight, 
  RotateCcw, 
  Trophy,
  Home,
  TrendingUp,
  TrendingDown,
  Minus,
  ClipboardCheck
} from 'lucide-react';
import { posttestData, TestQuestion } from '@/data/pretestPosttestData';
import { useProgress } from '@/hooks/useProgress';

export default function PostTestPage() {
  const navigate = useNavigate();
  const { savePosttestScore, getPosttestScore, getPretestScore } = useProgress();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = posttestData.questions;
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const isLastQuestion = currentIndex === totalQuestions - 1;

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
      const finalCorrectCount = Object.values({
        ...answers,
        [currentQuestion.id]: isCorrect
      }).filter(Boolean).length;
      const finalScore = Math.round((finalCorrectCount / totalQuestions) * 100);
      savePosttestScore(finalScore);
      setShowResult(true);
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

  const handleGoHome = () => {
    navigate('/');
  };

  // Result screen
  if (showResult) {
    const finalCorrectCount = Object.values(answers).filter(Boolean).length;
    const finalScore = Math.round((finalCorrectCount / totalQuestions) * 100);
    const pretestScore = getPretestScore();
    const improvement = pretestScore !== null ? finalScore - pretestScore : null;
    
    return (
      <MainLayout>
        <div className="p-6 md:p-8 max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-6 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary">
                <Trophy className="h-10 w-10" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Selamat! Post-Test Selesai! 🎉</h3>
                <p className="text-muted-foreground">Anda telah menyelesaikan seluruh pembelajaran</p>
              </div>

              <div className="space-y-4">
                {/* Post-test Score */}
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Skor Post-Test</p>
                  <div className="text-4xl font-bold text-primary">
                    {finalCorrectCount}/{totalQuestions}
                  </div>
                  <Progress value={finalScore} className="h-3 max-w-xs mx-auto mt-2" />
                  <p className="text-lg font-medium text-foreground mt-1">
                    {finalScore}%
                  </p>
                </div>

                {/* Comparison with Pre-test */}
                {pretestScore !== null && (
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-3">Perbandingan dengan Pre-Test</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-xs text-muted-foreground">Pre-Test</p>
                        <p className="text-2xl font-bold text-foreground">{pretestScore}%</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className={cn(
                          "flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium",
                          improvement && improvement > 0 
                            ? "bg-success/20 text-success" 
                            : improvement && improvement < 0 
                              ? "bg-destructive/20 text-destructive"
                              : "bg-muted text-muted-foreground"
                        )}>
                          {improvement && improvement > 0 ? (
                            <>
                              <TrendingUp className="h-4 w-4" />
                              +{improvement}%
                            </>
                          ) : improvement && improvement < 0 ? (
                            <>
                              <TrendingDown className="h-4 w-4" />
                              {improvement}%
                            </>
                          ) : (
                            <>
                              <Minus className="h-4 w-4" />
                              0%
                            </>
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Post-Test</p>
                        <p className="text-2xl font-bold text-primary">{finalScore}%</p>
                      </div>
                    </div>
                    
                    {improvement !== null && (
                      <p className="text-sm text-muted-foreground mt-3">
                        {improvement > 0 
                          ? `🌟 Luar biasa! Pemahaman Anda meningkat ${improvement}%!`
                          : improvement === 0 
                            ? "Pemahaman Anda tetap konsisten."
                            : "Coba review kembali materi untuk hasil lebih baik."
                        }
                      </p>
                    )}
                  </div>
                )}

                {!pretestScore && (
                  <p className="text-sm text-muted-foreground">
                    Anda belum mengerjakan Pre-Test, sehingga tidak ada perbandingan.
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button onClick={handleReset} variant="outline" className="gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Ulangi Post-Test
                </Button>
                <Button onClick={handleGoHome} className="gap-2">
                  <Home className="h-4 w-4" />
                  Kembali ke Beranda
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="p-6 md:p-8 max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-primary mb-2">
            <ClipboardCheck className="h-5 w-5" />
            <span className="text-sm font-medium">Post-Test</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">{posttestData.title}</h1>
          <p className="text-muted-foreground text-sm">{posttestData.description}</p>
        </div>

        {/* Quiz Card */}
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
                  onClick={() => !isSubmitted && setSelectedAnswer(option)}
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
                      <span className="font-semibold text-success">Benar!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-destructive" />
                      <span className="font-semibold text-destructive">Kurang tepat</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
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
      </div>
    </MainLayout>
  );
}
