import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Sprout, Droplets, Info, CloudRain, Sun } from 'lucide-react';
import { FarmerTipsCard } from '@/components/common/FarmerTipsCard';

export function PlantingScheduleCards() {
  return (
    <div className="space-y-8 mb-8">
      {/* Why Important */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="font-semibold text-primary text-lg">Kenapa Jadwal Tanam Penting?</span>
          </div>
          <p className="text-base text-muted-foreground mb-4 leading-relaxed">
            Menentukan jadwal tanam yang tepat sangat penting karena kebutuhan air tanaman harus sesuai dengan ketersediaan hujan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { emoji: "💧", text: "Air sesuai kebutuhan tanaman" },
              { emoji: "🌸", text: "Hindari kering saat berbunga" },
              { emoji: "🌾", text: "Panen tidak saat hujan lebat" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-base text-foreground bg-background rounded-xl p-4 shadow-sm">
                <span className="text-2xl">{item.emoji}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 3 Musim Tanam Padi */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Sprout className="h-6 w-6 text-primary" />
          <h3 className="font-bold text-foreground text-xl">3 Musim Tanam Padi</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Rendeng */}
          <Card className="border-0 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4">
              <h4 className="font-bold text-lg">Musim Tanam Utama</h4>
              <p className="text-emerald-100">(Rendeng)</p>
            </div>
            <CardContent className="p-5 bg-emerald-50 dark:bg-emerald-950/30">
              <div className="flex items-center gap-2 mb-3">
                <CloudRain className="h-5 w-5 text-emerald-600" />
                <span className="font-bold text-lg text-emerald-700 dark:text-emerald-400">November – Maret</span>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Dilaksanakan saat musim penghujan baik di tanah basah (pengairan bagus) dan tanah kering (tadah hujan).
              </p>
            </CardContent>
          </Card>

          {/* Gadu */}
          <Card className="border-0 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
              <h4 className="font-bold text-lg">Musim Tanam Gadu</h4>
              <p className="text-blue-100">(Transisi)</p>
            </div>
            <CardContent className="p-5 bg-blue-50 dark:bg-blue-950/30">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-lg text-blue-700 dark:text-blue-400">April – Juli</span>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Mengandalkan sisa air hujan atau tadah hujan. Cocok untuk wilayah dengan kelembaban cukup.
              </p>
            </CardContent>
          </Card>

          {/* Kemarau */}
          <Card className="border-0 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4">
              <h4 className="font-bold text-lg">Musim Tanam Kemarau</h4>
              <p className="text-amber-100">(MT3)</p>
            </div>
            <CardContent className="p-5 bg-amber-50 dark:bg-amber-950/30">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="h-5 w-5 text-amber-600" />
                <span className="font-bold text-lg text-amber-700 dark:text-amber-400">Agustus – Oktober</span>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Membutuhkan sistem irigasi yang bagus. Hanya bisa dilakukan di wilayah dengan akses air memadai.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Informasi Iklim untuk Petani */}
      <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Info className="h-6 w-6 text-blue-600" />
            <h3 className="font-bold text-foreground text-lg">Informasi Iklim yang Perlu Diketahui Petani</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Waktu masuknya musim hujan",
              "Waktu masuknya musim kemarau",
              "Curah hujan harian/bulanan",
              "Waktu puncak musim hujan",
              "Waktu puncak musim kemarau",
              "Prakiraan La Nina (hujan panjang)",
              "Prakiraan El Nino (kemarau panjang)"
            ].map((info, idx) => (
              <div key={idx} className="flex items-center gap-3 text-base text-foreground bg-white/70 dark:bg-background/50 rounded-lg p-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500 shrink-0" />
                {info}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Prinsip Penentuan Pola Tanam */}
      <Card className="border-0 shadow-md bg-gradient-to-br from-primary/5 to-secondary/10">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Droplets className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-foreground text-lg">Prinsip Penentuan Pola Tanam</h3>
          </div>
          <p className="text-base text-muted-foreground mb-4 leading-relaxed">
            Penentuan pola tanam didasarkan atas <strong className="text-foreground">ketersediaan air dalam tanah</strong> untuk mendukung kehidupan tanaman.
          </p>
          <div className="bg-white/70 dark:bg-background/50 rounded-xl p-4">
            <p className="text-base text-foreground font-medium mb-3">
              Mengapa air penting dalam budidaya padi?
            </p>
            <div className="space-y-2">
              {[
                "Komponen utama dalam jaringan tanaman",
                "Mengangkut unsur hara dari tanah ke akar",
                "Mengangkut hasil fotosintesis ke seluruh bagian tanaman"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contoh Pola Tanam */}
      <section>
        <h3 className="font-bold text-foreground text-xl mb-2">Contoh Pola Tanam</h3>
        <p className="text-base text-muted-foreground mb-5 leading-relaxed">
          Pola tanam adalah urutan tanaman dalam satu tahun. Pilih pola sesuai kondisi air di lahan Anda.
        </p>
        
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Padi-Padi-Padi */}
            <Card className="border-0 shadow-sm bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🌾🌾🌾</span>
                  <h4 className="font-bold text-foreground text-base">Padi – Padi – Padi</h4>
                </div>
                <p className="text-base text-muted-foreground mb-4">
                  Untuk wilayah dengan <strong className="text-emerald-700 dark:text-emerald-400">irigasi teknis sangat bagus</strong>
                </p>
                <div className="flex gap-2">
                  {[
                    { period: "Nov–Feb", crop: "Padi", color: "text-emerald-600" },
                    { period: "Mar–Jun", crop: "Padi", color: "text-emerald-600" },
                    { period: "Jul–Okt", crop: "Padi", color: "text-emerald-600" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 bg-white dark:bg-background rounded-lg p-3 text-center shadow-sm">
                      <div className="text-xs text-muted-foreground mb-1">{item.period}</div>
                      <div className={`font-bold text-base ${item.color}`}>{item.crop}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Padi-Padi-Palawija */}
            <Card className="border-0 shadow-sm bg-gradient-to-r from-lime-50 to-yellow-50 dark:from-lime-950/20 dark:to-yellow-950/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🌾🌾🌽</span>
                  <h4 className="font-bold text-foreground text-base">Padi – Padi – Palawija</h4>
                </div>
                <p className="text-base text-muted-foreground mb-4">
                  Pola <strong className="text-lime-700 dark:text-lime-400">paling umum</strong> di Indonesia
                </p>
                <div className="flex gap-2">
                  {[
                    { period: "Nov–Feb", crop: "Padi", color: "text-emerald-600" },
                    { period: "Mar–Jun", crop: "Padi", color: "text-emerald-600" },
                    { period: "Jul–Okt", crop: "Palawija", color: "text-amber-600" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 bg-white dark:bg-background rounded-lg p-3 text-center shadow-sm">
                      <div className="text-xs text-muted-foreground mb-1">{item.period}</div>
                      <div className={`font-bold text-base ${item.color}`}>{item.crop}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Padi-Padi-Bero */}
            <Card className="border-0 shadow-sm bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🌾🌾⏸️</span>
                  <h4 className="font-bold text-foreground text-base">Padi – Padi – Bero</h4>
                </div>
                <p className="text-base text-muted-foreground mb-4">
                  Lahan diistirahatkan untuk <strong className="text-amber-700 dark:text-amber-400">pemulihan kesuburan</strong>
                </p>
                <div className="flex gap-2">
                  {[
                    { period: "Nov–Feb", crop: "Padi", color: "text-emerald-600" },
                    { period: "Mar–Jun", crop: "Padi", color: "text-emerald-600" },
                    { period: "Jul–Okt", crop: "Bero", color: "text-gray-500" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 bg-white dark:bg-background rounded-lg p-3 text-center shadow-sm">
                      <div className="text-xs text-muted-foreground mb-1">{item.period}</div>
                      <div className={`font-bold text-base ${item.color}`}>{item.crop}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Padi-Palawija-Bero */}
            <Card className="border-0 shadow-sm bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🌾🌽⏸️</span>
                  <h4 className="font-bold text-foreground text-base">Padi – Palawija – Bero</h4>
                </div>
                <p className="text-base text-muted-foreground mb-4">
                  Untuk wilayah dengan <strong className="text-orange-700 dark:text-orange-400">air sangat terbatas</strong>
                </p>
                <div className="flex gap-2">
                  {[
                    { period: "Nov–Feb", crop: "Padi", color: "text-emerald-600" },
                    { period: "Mar–Jun", crop: "Palawija", color: "text-amber-600" },
                    { period: "Jul–Okt", crop: "Bero", color: "text-gray-500" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 bg-white dark:bg-background rounded-lg p-3 text-center shadow-sm">
                      <div className="text-xs text-muted-foreground mb-1">{item.period}</div>
                      <div className={`font-bold text-base ${item.color}`}>{item.crop}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* KATAM */}
      <Card className="border-0 shadow-md bg-gradient-to-r from-secondary/10 to-primary/10">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Sprout className="h-6 w-6 text-secondary" />
            <h4 className="font-bold text-foreground text-lg">KATAM (Kalender Tanam Terpadu)</h4>
          </div>
          <p className="text-base text-muted-foreground mb-4 leading-relaxed">
            Sistem rekomendasi dari Kementerian Pertanian untuk menentukan waktu tanam optimal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: "📊", text: "Prakiraan iklim BMKG" },
              { icon: "💧", text: "Data ketersediaan air" },
              { icon: "🌱", text: "Rekomendasi varietas" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-base text-foreground bg-white/70 dark:bg-background/50 rounded-xl p-4 shadow-sm">
                <span className="text-2xl">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Variety Selection */}
      <section>
        <h3 className="font-bold text-foreground text-xl mb-4">Pilih Varietas Sesuai Prakiraan Iklim</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              condition: "BN (Bawah Normal)",
              subtitle: "Prakiraan Kering",
              advice: "Varietas tahan kering",
              example: "Inpari 30, Inpago",
              gradient: "from-amber-400 to-orange-500",
              bg: "bg-amber-50 dark:bg-amber-950/30"
            },
            {
              condition: "AN (Atas Normal)",
              subtitle: "Prakiraan Basah",
              advice: "Varietas tahan wereng",
              example: "+ siapkan drainase",
              gradient: "from-blue-400 to-indigo-500",
              bg: "bg-blue-50 dark:bg-blue-950/30"
            },
            {
              condition: "N (Normal)",
              subtitle: "Kondisi Biasa",
              advice: "Varietas standar",
              example: "Sesuai preferensi",
              gradient: "from-emerald-400 to-green-500",
              bg: "bg-emerald-50 dark:bg-emerald-950/30"
            }
          ].map((item, idx) => (
            <Card key={idx} className="border-0 shadow-md overflow-hidden">
              <div className={`bg-gradient-to-r ${item.gradient} text-white p-4 text-center`}>
                <div className="font-bold text-lg">{item.condition}</div>
                <div className="text-sm opacity-90">{item.subtitle}</div>
              </div>
              <CardContent className={`p-4 text-center ${item.bg}`}>
                <div className="text-base text-muted-foreground mb-1">{item.advice}</div>
                <div className="text-base text-foreground font-bold">{item.example}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Farmer Tips */}
      <FarmerTipsCard 
        tip="Ikuti rekomendasi KATAM dari pemerintah! Jadwal ini sudah mempertimbangkan data iklim 30 tahun terakhir untuk wilayah Anda."
        funFact="Petani yang mengikuti jadwal KATAM mengalami peningkatan hasil panen rata-rata 15-20%."
      />
    </div>
  );
}
