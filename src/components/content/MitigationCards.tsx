import { Card, CardContent } from '@/components/ui/card';
import { Waves, Sun, Bug, AlertTriangle, Shield, CheckCircle2 } from 'lucide-react';
import { FarmerTipsCard } from '@/components/common/FarmerTipsCard';

const mitigationData = [
  {
    icon: Waves,
    title: "Banjir",
    trigger: "Hujan ekstrem / La Niña",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    iconColor: "text-blue-600",
    actions: [
      "Perbaiki saluran drainase",
      "Pilih varietas tahan genangan",
      "Siapkan pompa air",
      "Pantau prakiraan cuaca harian"
    ]
  },
  {
    icon: Sun,
    title: "Kekeringan",
    trigger: "Curah hujan rendah / El Niño",
    gradient: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    iconColor: "text-amber-600",
    actions: [
      "Pilih varietas tahan kering",
      "Terapkan mulsa untuk hemat air",
      "Atur jadwal irigasi efisien",
      "Beralih ke palawija jika perlu"
    ]
  },
  {
    icon: Bug,
    title: "Hama & Penyakit",
    trigger: "Dipengaruhi suhu & kelembapan",
    gradient: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50 dark:bg-rose-950/30",
    iconColor: "text-rose-600",
    actions: [
      "Pantau OPT rutin",
      "Tanam serentak se-wilayah",
      "Kendalikan gulma",
      "Gunakan pestisida bijak"
    ]
  }
];

const pests = [
  { emoji: "🐛", name: "Wereng", condition: "Kelembapan tinggi", color: "bg-emerald-100 dark:bg-emerald-900/30" },
  { emoji: "🐀", name: "Tikus", condition: "Kemarau panjang", color: "bg-amber-100 dark:bg-amber-900/30" },
  { emoji: "🍄", name: "Blast", condition: "Suhu rendah + lembap", color: "bg-purple-100 dark:bg-purple-900/30" },
  { emoji: "🐦", name: "Burung", condition: "Saat padi menguning", color: "bg-sky-100 dark:bg-sky-900/30" }
];

export function MitigationCards() {
  return (
    <div className="space-y-8 mb-8">
      {/* Hero Image */}
      <Card className="border-0 shadow-lg overflow-hidden">
        <div className="flex justify-center bg-gradient-to-b from-sky-100 to-amber-50 dark:from-sky-950/30 dark:to-amber-950/30 p-4">
          <img 
            src="/img/3_2/petani-matahari.webp" 
            alt="Petani siaga mengamati kondisi cuaca di sawah"
            className="w-full sm:max-w-md rounded-lg"
          />
        </div>
        <CardContent className="p-4 text-center bg-gradient-to-r from-primary/5 to-secondary/5">
          <p className="text-sm text-muted-foreground">
            Petani yang memahami informasi iklim dapat mengantisipasi risiko lebih baik
          </p>
        </CardContent>
      </Card>

      {/* Hero Intro */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary/20">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">Mitigasi Risiko Iklim</h3>
              <p className="text-base text-muted-foreground">Lindungi hasil panen Anda dengan informasi iklim</p>
            </div>
          </div>
          <div className="bg-white/70 dark:bg-background/50 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-base text-muted-foreground">
                Ada <strong className="text-foreground">3 risiko utama</strong> yang bisa dimitigasi dengan informasi iklim: 
                <span className="text-blue-600 font-medium"> Banjir</span>, 
                <span className="text-amber-600 font-medium"> Kekeringan</span>, dan 
                <span className="text-rose-600 font-medium"> Hama/Penyakit</span>.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3 Main Mitigation Cards */}
      <section>
        <h3 className="font-bold text-foreground text-xl mb-4">3 Risiko & Langkah Mitigasi</h3>
        <div className="space-y-5">
          {mitigationData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="border-0 shadow-md overflow-hidden">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${item.gradient} text-white p-4`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-sm opacity-90">Pemicu: {item.trigger}</p>
                    </div>
                  </div>
                </div>
                {/* Actions */}
                <CardContent className={`p-5 ${item.bgColor}`}>
                  <p className="text-base font-medium text-foreground mb-3">Langkah Mitigasi:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.actions.map((action, aIdx) => (
                      <div 
                        key={aIdx} 
                        className="flex items-center gap-3 text-base text-foreground bg-white/70 dark:bg-background/50 rounded-lg p-3"
                      >
                        <CheckCircle2 className={`h-5 w-5 ${item.iconColor} shrink-0`} />
                        {action}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* El Nino & La Nina */}
      <section>
        <h3 className="font-bold text-foreground text-xl mb-4">Fenomena Iklim Global</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* El Nino */}
          <Card className="border-0 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
              <div className="flex items-center gap-2">
                <Sun className="h-6 w-6" />
                <h4 className="font-bold text-lg">El Niño</h4>
              </div>
            </div>
            <CardContent className="p-5 bg-orange-50 dark:bg-orange-950/30">
              <p className="text-base text-muted-foreground mb-3">
                Fenomena naiknya suhu permukaan laut Pasifik yang menyebabkan:
              </p>
              <ul className="space-y-2">
                {[
                  "Musim kemarau lebih panjang",
                  "Curah hujan berkurang drastis",
                  "Risiko kekeringan & kebakaran"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-base text-foreground">
                    <span className="h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* La Nina */}
          <Card className="border-0 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4">
              <div className="flex items-center gap-2">
                <Waves className="h-6 w-6" />
                <h4 className="font-bold text-lg">La Niña</h4>
              </div>
            </div>
            <CardContent className="p-5 bg-blue-50 dark:bg-blue-950/30">
              <p className="text-base text-muted-foreground mb-3">
                Kebalikan El Niño, menyebabkan kondisi yang berbeda:
              </p>
              <ul className="space-y-2">
                {[
                  "Musim hujan lebih panjang & intens",
                  "Curah hujan di atas normal",
                  "Risiko banjir & tanah longsor"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-base text-foreground">
                    <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pest Examples */}
      <section>
        <h3 className="font-bold text-foreground text-xl mb-2">Contoh OPT & Kondisi Pemicu</h3>
        <p className="text-base text-muted-foreground mb-4">
          Organisme Pengganggu Tanaman (OPT) berkembang sesuai kondisi iklim tertentu
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {pests.map((pest, idx) => (
            <Card key={idx} className={`border-0 shadow-sm ${pest.color}`}>
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2">{pest.emoji}</div>
                <div className="font-bold text-base text-foreground mb-1">{pest.name}</div>
                <div className="text-sm text-muted-foreground">{pest.condition}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Integrated Mitigation Steps */}
      <Card className="border-0 shadow-md bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
        <CardContent className="p-5">
          <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            Langkah Mitigasi Terpadu
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { num: "1", text: "Pantau informasi prakiraan iklim BMKG" },
              { num: "2", text: "Ikuti rekomendasi KATAM" },
              { num: "3", text: "Gotong royong bersihkan saluran air" },
              { num: "4", text: "Siapkan pestisida nabati" },
              { num: "5", text: "Asuransikan tanaman (AUTP)" },
              { num: "6", text: "Koordinasi dengan kelompok tani" }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/70 dark:bg-background/50 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {step.num}
                </div>
                <span className="text-base text-foreground">{step.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Farmer Tips */}
      <FarmerTipsCard 
        tip="Ajak tetangga tanam serentak! Hama dan penyakit akan sulit berkembang jika semua lahan di sekitar Anda memiliki jadwal yang sama."
        funFact="Tanam serentak bisa mengurangi serangan wereng hingga 70% karena memutus siklus hidupnya."
      />
    </div>
  );
}
