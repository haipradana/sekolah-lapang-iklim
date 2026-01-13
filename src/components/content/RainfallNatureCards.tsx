import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, Minus, ArrowDown, Calculator } from 'lucide-react';
import { FarmerTipsCard } from '@/components/common/FarmerTipsCard';

const classifications = [
  {
    icon: ArrowUp,
    code: "AN",
    name: "Atas Normal",
    threshold: "> 115%",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800",
    meaning: "Hujan lebih banyak dari biasanya",
    warning: "⚠️ Waspadai banjir!"
  },
  {
    icon: Minus,
    code: "N",
    name: "Normal",
    threshold: "85% - 115%",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    meaning: "Hujan sesuai rata-rata biasa",
    warning: "✅ Kondisi ideal"
  },
  {
    icon: ArrowDown,
    code: "BN",
    name: "Bawah Normal",
    threshold: "< 85%",
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    borderColor: "border-amber-200 dark:border-amber-800",
    meaning: "Hujan lebih sedikit dari biasanya",
    warning: "⚠️ Waspadai kekeringan!"
  }
];

export function RainfallNatureCards() {
  return (
    <div className="space-y-6 mb-8">
      {/* Formula Card */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <Calculator className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Rumus Perhitungan</span>
          </div>
          <div className="bg-background rounded-lg p-3 inline-block">
            <code className="text-sm font-mono">
              Persentase = (Aktual ÷ Normal) × 100%
            </code>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            <strong>Normal</strong> = rata-rata curah hujan 30 tahun (1991-2020)
          </p>
        </CardContent>
      </Card>

      {/* 3 Classification Cards */}
      <div className="space-y-3">
        {classifications.map((c) => {
          const Icon = c.icon;
          return (
            <Card key={c.code} className={`${c.bgColor} ${c.borderColor} border shadow-sm`}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  {/* Icon & Code */}
                  <div className="text-center shrink-0">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-background ${c.color} mb-1`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className={`font-bold text-lg ${c.color}`}>{c.code}</div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{c.name}</h3>
                      <span className="text-sm bg-background px-2 py-0.5 rounded font-mono">{c.threshold}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{c.meaning}</p>
                    <p className="text-sm font-medium">{c.warning}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Example Calculation */}
      <Card className="border-dashed border-muted-foreground/30 max-w-lg mx-auto">
        <CardContent className="p-4">
          <h4 className="text-sm font-semibold text-foreground mb-3 text-center">📝 Contoh Perhitungan</h4>
          <div className="bg-muted/50 rounded-lg p-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Curah hujan aktual:</span>
              <span className="font-mono">25 mm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Normal:</span>
              <span className="font-mono">20 mm</span>
            </div>
            <hr className="border-border" />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Perhitungan:</span>
              <span className="font-mono">25 ÷ 20 × 100%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Hasil:</span>
              <span className="font-mono font-bold text-blue-600">125% → AN</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Farmer Tips */}
      <FarmerTipsCard 
        tip="Lihat prakiraan sifat hujan BMKG sebelum musim tanam. BN? Pilih varietas tahan kekeringan. AN? Siapkan drainase ekstra!"
        funFact="Prediksi sifat hujan BMKG akurat hingga 70-80% untuk skala dasarian."
      />
    </div>
  );
}
