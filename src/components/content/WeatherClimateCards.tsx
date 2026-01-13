import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CloudSun, Globe } from 'lucide-react';

export function WeatherClimateCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
      {/* Cuaca Card */}
      <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-primary/20">
              <CloudSun className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">CUACA</h3>
              <p className="text-sm text-muted-foreground">Kondisi udara jangka pendek</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Terjadi hari ini</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Berlaku jam – hari</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Cepat berubah</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Berbeda tiap tempat</span>
            </li>
          </ul>
          <div className="mt-4 pt-4 border-t border-primary/20">
            <p className="text-sm text-muted-foreground italic">
              <span className="font-medium text-foreground">Contoh:</span> Pagi hujan deras, siang cerah berawan
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Iklim Card */}
      <Card className="border-secondary/30 bg-gradient-to-br from-secondary/5 to-secondary/10 hover:shadow-lg transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-secondary/20">
              <Globe className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary">IKLIM</h3>
              <p className="text-sm text-muted-foreground">Pola cuaca jangka panjang</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">•</span>
              <span>Pola 10 – 30 tahun</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">•</span>
              <span>Relatif stabil</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">•</span>
              <span>Berdasarkan rata-rata</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">•</span>
              <span>Ciri suatu wilayah</span>
            </li>
          </ul>
          <div className="mt-4 pt-4 border-t border-secondary/20">
            <p className="text-sm text-muted-foreground italic">
              <span className="font-medium text-foreground">Contoh:</span> Indonesia beriklim tropis sepanjang tahun
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
