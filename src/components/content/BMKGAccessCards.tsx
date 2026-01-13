import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, MessageCircle, Mail, Globe } from 'lucide-react';

const accessMethods = [
  {
    icon: Smartphone,
    title: "Aplikasi InfoBMKG",
    description: "Aplikasi resmi di Android & iOS",
    features: ["Prakiraan cuaca harian", "Info gempa real-time", "Kualitas udara"],
    color: "bg-blue-50 dark:bg-blue-950/30",
    iconColor: "from-blue-500 to-blue-600"
  },
  {
    icon: Globe,
    title: "Website BMKG",
    description: "bmkg.go.id",
    features: ["Data klimatologi lengkap", "Prakiraan musim", "Peta iklim"],
    color: "bg-emerald-50 dark:bg-emerald-950/30",
    iconColor: "from-emerald-500 to-emerald-600"
  },
  {
    icon: MessageCircle,
    title: "Media Sosial",
    description: "@infoBMKG di berbagai platform",
    features: ["Update cuaca terkini", "Infografis mudah dipahami", "Interaktif"],
    color: "bg-purple-50 dark:bg-purple-950/30",
    iconColor: "from-purple-500 to-purple-600"
  },
  {
    icon: Mail,
    title: "SMS Blast",
    description: "Layanan peringatan dini",
    features: ["Peringatan bencana", "Info cuaca ekstrem", "Langsung ke HP"],
    color: "bg-amber-50 dark:bg-amber-950/30",
    iconColor: "from-amber-500 to-amber-600"
  }
];

export function BMKGAccessCards() {
  return (
    <div className="space-y-6 mb-8">
      {/* Intro */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">4 cara</span> mengakses informasi iklim BMKG
          </p>
        </CardContent>
      </Card>

      {/* Access Methods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {accessMethods.map((method, idx) => {
          const Icon = method.icon;
          return (
            <Card key={idx} className={`${method.color} border-0 shadow-sm`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${method.iconColor} text-white shrink-0`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm mb-0.5">{method.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{method.description}</p>
                    <ul className="space-y-1">
                      {method.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="h-1 w-1 rounded-full bg-current shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* What to Look For */}
      <div>
        <h3 className="font-semibold text-foreground text-sm mb-3">Informasi Penting untuk Petani</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { emoji: "📅", text: "Prakiraan musim" },
            { emoji: "🌧️", text: "Curah hujan dasarian" },
            { emoji: "⚠️", text: "Peringatan dini" },
            { emoji: "🗺️", text: "Peta ZOM" }
          ].map((item, idx) => (
            <Card key={idx} className="border-0 bg-muted/50">
              <CardContent className="p-3 text-center">
                <div className="text-xl mb-1">{item.emoji}</div>
                <div className="text-xs text-muted-foreground">{item.text}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Card className="border-dashed border-muted-foreground/30">
        <CardContent className="p-4 text-center">
          <p className="text-xs text-muted-foreground">
            📲 <span className="font-medium">Download sekarang:</span> Cari "Info BMKG" di Play Store atau App Store
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
