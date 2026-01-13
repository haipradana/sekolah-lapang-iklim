import { Card, CardContent } from '@/components/ui/card';
import { Waves, Sun, Bug } from 'lucide-react';
import { FarmerTipsCard } from '@/components/common/FarmerTipsCard';

const mitigationData = [
  {
    icon: Waves,
    title: "Banjir",
    trigger: "Hujan ekstrem / La Niña",
    color: "bg-blue-50 dark:bg-blue-950/30",
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
    color: "bg-amber-50 dark:bg-amber-950/30",
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
    color: "bg-rose-50 dark:bg-rose-950/30",
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
  { emoji: "🐛", name: "Wereng", condition: "Kelembapan tinggi" },
  { emoji: "🐀", name: "Tikus", condition: "Kemarau panjang" },
  { emoji: "🍄", name: "Blast", condition: "Suhu rendah + lembap" },
  { emoji: "🐦", name: "Burung", condition: "Saat padi menguning" }
];

export function MitigationCards() {
  return (
    <div className="space-y-6 mb-8">
      {/* Intro */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">3 risiko utama</span> yang bisa dimitigasi dengan informasi iklim
          </p>
        </CardContent>
      </Card>

      {/* 3 Main Mitigation Cards */}
      <div className="space-y-4">
        {mitigationData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Card key={idx} className={`${item.color} border-0 shadow-sm`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl bg-background ${item.iconColor} shrink-0`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Pemicu: {item.trigger}
                    </p>
                    <div className="space-y-1">
                      {item.actions.map((action, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 shrink-0" />
                          {action}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Pest Examples */}
      <div>
        <h3 className="font-semibold text-foreground text-sm mb-3">Contoh OPT & Kondisi Pemicu</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {pests.map((pest, idx) => (
            <Card key={idx} className="border-0 bg-muted/50">
              <CardContent className="p-3 text-center">
                <div className="text-2xl mb-1">{pest.emoji}</div>
                <div className="font-medium text-sm text-foreground">{pest.name}</div>
                <div className="text-sm text-muted-foreground">{pest.condition}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tip */}
      <Card className="border-dashed border-muted-foreground/30">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-muted-foreground">
            💡 <span className="font-medium">Tips:</span> Tanam serentak se-hamparan dapat memutus siklus hama dan penyakit
          </p>
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
