import { cn } from '@/lib/utils';
import { CheckCircle2, Circle, Award } from 'lucide-react';

interface ProgressBadgeProps {
  completed: number;
  total: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const ProgressBadge = ({ 
  completed, 
  total, 
  size = 'md',
  showLabel = true,
  className 
}: ProgressBadgeProps) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const isComplete = completed === total && total > 0;

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const strokeWidth = size === 'sm' ? 4 : size === 'md' ? 5 : 6;
  const radius = size === 'sm' ? 20 : size === 'md' ? 28 : 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${radius * 2 + strokeWidth} ${radius * 2 + strokeWidth}`}>
          <circle
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-muted"
          />
          <circle
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={cn(
              "transition-all duration-500",
              isComplete ? "text-success" : "text-primary"
            )}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isComplete ? (
            <Award className={cn(
              "text-success",
              size === 'sm' ? 'h-5 w-5' : size === 'md' ? 'h-6 w-6' : 'h-10 w-10'
            )} />
          ) : (
            <span className={cn(
              "font-bold text-foreground",
              size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-xl'
            )}>
              {percentage}%
            </span>
          )}
        </div>
      </div>
      
      {showLabel && (
        <p className={cn(
          "text-muted-foreground",
          size === 'sm' ? 'text-xs' : 'text-sm'
        )}>
          {completed}/{total} selesai
        </p>
      )}
    </div>
  );
};
