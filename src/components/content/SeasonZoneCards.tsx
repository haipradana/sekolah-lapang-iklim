import { Card, CardContent } from '@/components/ui/card';
import { MapPin, AlertTriangle, Info } from 'lucide-react';

export function SeasonZoneCards() {
  return (
    <div className="space-y-6 mb-8">
      {/* Definition */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4 text-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Apa itu Zona Musim (ZOM)?</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Wilayah dengan pola musim hujan & kemarau yang jelas. Indonesia dibagi menjadi <span className="font-semibold text-foreground">342 ZOM</span>
          </p>
        </CardContent>
      </Card>

      {/* Important Note */}
      <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground text-sm mb-1">Penting!</h3>
              <p className="text-sm text-muted-foreground">
                Batas ZOM <strong>≠</strong> batas kabupaten/kecamatan
              </p>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                  1 kabupaten bisa terdiri dari beberapa ZOM
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                  1 ZOM bisa meliputi beberapa kabupaten
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* DIY Zones */}
      <div>
        <h3 className="font-semibold text-foreground text-sm mb-3">ZOM di DI Yogyakarta</h3>
        <div className="grid grid-cols-1 gap-3">
          {[
            {
              area: "Selatan",
              locations: "Bantul, Kulon Progo",
              characteristic: "Musim hujan lebih panjang",
              emoji: "🌧️"
            },
            {
              area: "Utara",
              locations: "Sleman",
              characteristic: "Dipengaruhi lereng Merapi",
              emoji: "🌋"
            },
            {
              area: "Tengah",
              locations: "Kota Yogyakarta",
              characteristic: "Pola urban tersendiri",
              emoji: "🏙️"
            }
          ].map((zone, idx) => (
            <Card key={idx} className="border-0 bg-muted/50">
              <CardContent className="p-3 flex items-center gap-3">
                <span className="text-2xl">{zone.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-foreground">{zone.area}</span>
                    <span className="text-xs text-muted-foreground">({zone.locations})</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{zone.characteristic}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Forecast Info */}
      <Card className="border-dashed border-muted-foreground/30">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground text-sm mb-1">Prakiraan Musim</h4>
              <p className="text-xs text-muted-foreground">
                BMKG mengeluarkan prakiraan awal musim hujan & kemarau berdasarkan ZOM. 
                Petani dapat menggunakan informasi ini untuk merencanakan waktu tanam yang tepat.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
