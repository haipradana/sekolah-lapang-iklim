import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { CheckCircle2, Circle, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SubmoduleCardProps {
  moduleId: number;
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
  isComplete?: boolean;
  index: number;
}

export const SubmoduleCard = ({
  moduleId,
  slug,
  title,
  summary,
  imageUrl,
  isComplete = false,
  index
}: SubmoduleCardProps) => {
  return (
    <Link to={`/modul/${moduleId}/${slug}`}>
      <Card className={cn(
        "group overflow-hidden border transition-all duration-300 hover:shadow-card-hover",
        isComplete 
          ? "border-success/30 bg-success/5" 
          : "border-border hover:border-primary/30"
      )}>
        <CardContent className="p-0">
          <div className="flex gap-4 p-4">
            {/* Image */}
            <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-1 right-1">
                <div className={cn(
                  "flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold",
                  isComplete 
                    ? "bg-success text-success-foreground" 
                    : "bg-primary/90 text-primary-foreground"
                )}>
                  {isComplete ? <CheckCircle2 className="h-4 w-4" /> : index}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {title}
                </h4>
                <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {summary}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {isComplete ? 'Selesai' : 'Belum selesai'}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
