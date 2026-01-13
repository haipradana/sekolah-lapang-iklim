import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle, HelpCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import type { Quiz } from '@/data/modulesData';

interface QuizCardProps {
  quiz: Quiz;
  onComplete?: (score: number) => void;
}

export const QuizCard = ({ quiz, onComplete }: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const isCorrect = selectedAnswer === quiz.correctAnswer;

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    setIsSubmitted(true);
    setShowExplanation(true);
    onComplete?.(isCorrect ? 100 : 0);
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setShowExplanation(false);
  };

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 text-primary mb-2">
          <HelpCircle className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-wide">Kuis Interaktif</span>
        </div>
        <CardTitle className="text-lg text-foreground">{quiz.question}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {quiz.options && (
          <RadioGroup
            value={selectedAnswer || ''}
            onValueChange={setSelectedAnswer}
            disabled={isSubmitted}
            className="space-y-3"
          >
            {quiz.options.map((option, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center space-x-3 p-3 rounded-lg border-2 transition-all",
                  isSubmitted
                    ? option === quiz.correctAnswer
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
                  id={`option-${index}`}
                  className={cn(
                    isSubmitted && option === quiz.correctAnswer && "border-success text-success",
                    isSubmitted && option === selectedAnswer && option !== quiz.correctAnswer && "border-destructive text-destructive"
                  )}
                />
                <Label
                  htmlFor={`option-${index}`}
                  className={cn(
                    "flex-1 cursor-pointer",
                    isSubmitted && option === quiz.correctAnswer && "text-success font-medium",
                    isSubmitted && option === selectedAnswer && option !== quiz.correctAnswer && "text-destructive"
                  )}
                >
                  {option}
                </Label>
                {isSubmitted && option === quiz.correctAnswer && (
                  <CheckCircle2 className="h-5 w-5 text-success" />
                )}
                {isSubmitted && option === selectedAnswer && option !== quiz.correctAnswer && (
                  <XCircle className="h-5 w-5 text-destructive" />
                )}
              </div>
            ))}
          </RadioGroup>
        )}

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
        {showExplanation && (
          <div className="p-4 rounded-lg bg-accent/50 border border-accent">
            <div className="flex items-start gap-2">
              <Lightbulb className="h-5 w-5 text-accent-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-accent-foreground mb-1">Penjelasan:</p>
                <p className="text-sm text-muted-foreground">{quiz.explanation}</p>
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
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button 
              onClick={handleReset}
              variant="outline"
              className="flex-1"
            >
              Coba Lagi
            </Button>
          )}
        </div>

        <p className="text-xs text-center text-muted-foreground">
          * Ini adalah contoh kuis. Kuis lengkap akan tersedia segera.
        </p>
      </CardContent>
    </Card>
  );
};
