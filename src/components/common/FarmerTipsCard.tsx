import { Card, CardContent } from '@/components/ui/card';
import { Sprout, ExternalLink } from 'lucide-react';

interface FarmerTipsCardProps {
  tip: string;
  funFact?: string;
  linkUrl?: string;
  linkText?: string;
}

export function FarmerTipsCard({ tip, funFact, linkUrl, linkText }: FarmerTipsCardProps) {
  return (
    <Card className="border-2 border-dashed border-amber-400/50 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/30 dark:via-yellow-950/20 dark:to-orange-950/20 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Farmer Icon */}
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
              <span className="text-2xl">🧑‍🌾</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <Sprout className="h-5 w-5 text-amber-600" />
              <h3 className="font-bold text-amber-800 dark:text-amber-400 text-lg">
                Tips untuk Petani
              </h3>
            </div>
            
            <p className="text-foreground leading-relaxed">
              {tip}
            </p>
            
            {funFact && (
              <div className="bg-white/60 dark:bg-black/20 rounded-lg p-3 border-l-4 border-amber-400">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-amber-700 dark:text-amber-400">💡 Tahukah Anda?</span>{' '}
                  {funFact}
                </p>
              </div>
            )}
            
            {linkUrl && linkText && (
              <a 
                href={linkUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                {linkText}
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
