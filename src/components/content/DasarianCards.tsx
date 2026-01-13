import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const dasarians = [
  {
    number: "I",
    range: "1 - 10",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30"
  },
  {
    number: "II",
    range: "11 - 20",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
  },
  {
    number: "III",
    range: "21 - akhir",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/30"
  }
];

export function DasarianCards() {
  return (
    <div className="space-y-6 mb-8">
      {/* What is Dasarian */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4 text-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Apa itu Dasarian?</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Periode 10 hari untuk analisis iklim — lebih detail dari bulanan, lebih praktis dari harian
          </p>
        </CardContent>
      </Card>

      {/* 3 Dasarian Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {dasarians.map((d) => (
          <Card key={d.number} className={`${d.bgColor} border-0 shadow-sm text-center`}>
            <CardContent className="p-5">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${d.color} text-white font-bold text-lg mb-3`}>
                {d.number}
              </div>
              <h3 className="font-semibold text-foreground mb-1">Dasarian {d.number}</h3>
              <p className="text-sm text-muted-foreground">
                Tanggal <span className="font-medium text-foreground">{d.range}</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Math */}
      <Card className="border-dashed border-muted-foreground/30">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="bg-muted px-2 py-1 rounded">12 bulan</span>
            <span className="text-muted-foreground">×</span>
            <span className="bg-muted px-2 py-1 rounded">3 dasarian</span>
            <span className="text-muted-foreground">=</span>
            <span className="bg-primary/10 text-primary font-semibold px-2 py-1 rounded">36 dasarian/tahun</span>
          </div>
        </CardContent>
      </Card>

      {/* Why Use Dasarian */}
      <div>
        <h3 className="font-semibold text-foreground text-sm mb-3">Kenapa pakai dasarian?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { emoji: "🌱", text: "Cocok untuk jadwal tanam, pupuk, panen" },
            { emoji: "📊", text: "Cukup panjang untuk lihat pola hujan" },
            { emoji: "⚖️", text: "Mudah dibanding dengan rata-rata (normal)" }
          ].map((item, idx) => (
            <Card key={idx} className="border-0 bg-muted/50">
              <CardContent className="p-3 flex items-center gap-2">
                <span className="text-xl">{item.emoji}</span>
                <span className="text-xs text-muted-foreground">{item.text}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
