import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Instagram, Globe, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { FarmerTipsCard } from '@/components/common/FarmerTipsCard';

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
    icon: Instagram,
    title: "Instagram Staklim Jogja",
    description: "@staklim_jogja",
    features: ["Update cuaca DIY", "Infografis iklim", "Info pertanian"],
    color: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30",
    iconColor: "from-pink-500 via-purple-500 to-indigo-500"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Staklim",
    description: "081126381113",
    features: ["Konsultasi langsung", "Grup penyuluh", "Info peringatan dini"],
    color: "bg-green-50 dark:bg-green-950/30",
    iconColor: "from-green-500 to-green-600"
  }
];

const staklimContacts = [
  { icon: Phone, label: "Telepon", value: "0274 2880152" },
  { icon: MessageCircle, label: "WhatsApp", value: "081126381113" },
  { icon: Instagram, label: "Instagram", value: "@staklim_jogja" },
  { icon: Mail, label: "Email", value: "staklim.yogya@gmail.com" },
  { icon: Globe, label: "Website", value: "staklim-jogja.bmkg.go.id" },
];

export function BMKGAccessCards() {
  return (
    <div className="space-y-8 mb-8">
      {/* Intro */}
      <Card className="border-0 shadow-md bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardContent className="p-5">
          <h3 className="font-bold text-foreground text-lg mb-2 text-center">Cara Mengakses Informasi Iklim BMKG</h3>
          <p className="text-base text-muted-foreground text-center">
            Ada <span className="font-semibold text-primary">4 cara mudah</span> untuk mendapatkan informasi iklim terkini
          </p>
        </CardContent>
      </Card>

      {/* Access Methods */}
      <section>
        <h3 className="font-bold text-foreground text-xl mb-4">Pilihan Akses Informasi</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {accessMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <Card key={idx} className={`${method.color} border-0 shadow-md`}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${method.iconColor} text-white shrink-0`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-foreground text-base mb-1">{method.title}</h4>
                      <p className="text-base text-muted-foreground mb-3">{method.description}</p>
                      <ul className="space-y-1">
                        {method.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-base text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 shrink-0" />
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
      </section>

      {/* Staklim DIY Contact */}
      <Card className="border-0 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-5">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6" />
            <div>
              <h3 className="font-bold text-lg">Stasiun Klimatologi Yogyakarta</h3>
              <p className="text-sm opacity-90">Jl. Kabupaten KM 5.5 Duwet, Sendangadi, Mlati, Sleman</p>
            </div>
          </div>
        </div>
        <CardContent className="p-5 bg-muted/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {staklimContacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <div key={idx} className="flex items-center gap-3 bg-background rounded-xl p-3 shadow-sm">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{contact.label}</div>
                    <div className="text-sm font-medium text-foreground">{contact.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* What to Look For */}
      <section>
        <h3 className="font-bold text-foreground text-xl mb-4">Informasi Penting untuk Petani</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { emoji: "📅", text: "Prakiraan musim", desc: "Awal hujan & kemarau" },
            { emoji: "🌧️", text: "Curah hujan", desc: "Data dasarian & bulanan" },
            { emoji: "⚠️", text: "Peringatan dini", desc: "Cuaca ekstrem" },
            { emoji: "🗺️", text: "Peta ZOM", desc: "Zona musim wilayah" }
          ].map((item, idx) => (
            <Card key={idx} className="border-0 shadow-sm bg-gradient-to-br from-muted/50 to-muted/30">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="font-bold text-base text-foreground mb-1">{item.text}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Card className="border-0 shadow-md bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
        <CardContent className="p-5 text-center">
          <p className="text-lg font-medium mb-2">
            📲 Download Aplikasi InfoBMKG Sekarang!
          </p>
          <p className="text-sm opacity-90">
            Cari "Info BMKG" di Play Store atau App Store - Gratis!
          </p>
        </CardContent>
      </Card>

      {/* Farmer Tips */}
      <FarmerTipsCard 
        tip="Follow Instagram @staklim_jogja untuk update cuaca dan iklim DIY terkini! Aktifkan juga notifikasi aplikasi Info BMKG."
        funFact="Selamat! Anda sudah menyelesaikan seluruh materi Sekolah Lapang Iklim. Semoga bermanfaat untuk pertanian Anda! 🎉"
      />
    </div>
  );
}
