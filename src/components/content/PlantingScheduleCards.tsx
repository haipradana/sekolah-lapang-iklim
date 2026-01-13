import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Sprout, AlertCircle } from 'lucide-react';
import { FarmerTipsCard } from '@/components/common/FarmerTipsCard';

export function PlantingScheduleCards() {
  return (
    <div className="space-y-6 mb-8">
      {/* Why Important */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Kenapa Jadwal Tanam Penting?</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { emoji: "💧", text: "Air sesuai kebutuhan tanaman" },
              { emoji: "🌸", text: "Hindari kering saat berbunga" },
              { emoji: "🌾", text: "Panen tidak saat hujan lebat" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground bg-background rounded-lg p-2">
                <span className="text-lg">{item.emoji}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Planting Patterns */}
      <div>
        <h3 className="font-semibold text-foreground text-sm mb-3">Contoh Pola Tanam</h3>
        <div className="space-y-3">
          {/* Pattern 1 */}
          <Card className="border-0 bg-emerald-50 dark:bg-emerald-950/30">
            <CardContent className="p-4">
              <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                <span className="text-lg">🌾</span> Padi – Padi – Palawija
              </h4>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-background rounded-lg p-2">
                  <div className="text-sm text-muted-foreground mb-1">Nov–Feb</div>
                  <div className="font-medium text-sm text-emerald-600">Padi</div>
                  <div className="text-sm text-muted-foreground">Hujan 1</div>
                </div>
                <div className="bg-background rounded-lg p-2">
                  <div className="text-sm text-muted-foreground mb-1">Mar–Jun</div>
                  <div className="font-medium text-sm text-emerald-600">Padi</div>
                  <div className="text-sm text-muted-foreground">Hujan 2</div>
                </div>
                <div className="bg-background rounded-lg p-2">
                  <div className="text-sm text-muted-foreground mb-1">Jul–Okt</div>
                  <div className="font-medium text-sm text-amber-600">Palawija</div>
                  <div className="text-sm text-muted-foreground">Kemarau</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pattern 2 */}
          <Card className="border-0 bg-amber-50 dark:bg-amber-950/30">
            <CardContent className="p-4">
              <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                <span className="text-lg">🌽</span> Padi – Palawija – Palawija
              </h4>
              <p className="text-sm text-muted-foreground">
                Untuk wilayah dengan air terbatas
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* KATAM */}
      <Card className="border-secondary/30 bg-secondary/5">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Sprout className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground text-sm mb-1">KATAM (Kalender Tanam Terpadu)</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  Prakiraan iklim BMKG
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  Data ketersediaan air
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  Rekomendasi varietas
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variety Selection */}
      <div>
        <h3 className="font-semibold text-foreground text-sm mb-3">Pilih Varietas Sesuai Prakiraan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              condition: "BN (Kering)",
              advice: "Varietas tahan kering",
              example: "Inpari 30",
              color: "bg-amber-50 dark:bg-amber-950/30"
            },
            {
              condition: "AN (Basah)",
              advice: "Varietas tahan wereng",
              example: "+ siapkan drainase",
              color: "bg-blue-50 dark:bg-blue-950/30"
            },
            {
              condition: "N (Normal)",
              advice: "Varietas standar",
              example: "Sesuai preferensi",
              color: "bg-emerald-50 dark:bg-emerald-950/30"
            }
          ].map((item, idx) => (
            <Card key={idx} className={`border-0 ${item.color}`}>
              <CardContent className="p-3 text-center">
                <div className="font-semibold text-sm text-foreground mb-1">{item.condition}</div>
                <div className="text-sm text-muted-foreground">{item.advice}</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">{item.example}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Farmer Tips */}
      <FarmerTipsCard 
        tip="Ikuti rekomendasi KATAM dari pemerintah! Jadwal ini sudah mempertimbangkan data iklim 30 tahun terakhir untuk wilayah Anda."
        funFact="Petani yang mengikuti jadwal KATAM mengalami peningkatan hasil panen rata-rata 15-20%."
      />
    </div>
  );
}
