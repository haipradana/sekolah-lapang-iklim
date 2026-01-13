import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, Droplets, CloudRain, Wind, Thermometer, Gauge, Cloud, CloudSun, ChevronLeft, ChevronRight } from 'lucide-react';

const elements = [
  {
    icon: Sun,
    title: "Radiasi Matahari",
    description: "Sumber energi utama atmosfer",
    points: ["Memanaskan bumi", "Menggerakkan siklus air", "Mempengaruhi suhu"],
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
    emoji: "☀️"
  },
  {
    icon: Droplets,
    title: "Penguapan",
    description: "Air berubah jadi uap",
    points: ["Terjadi di laut & darat", "Akibat panas matahari", "Membentuk awan"],
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
    emoji: "💧"
  },
  {
    icon: CloudSun,
    title: "Kelembapan",
    description: "Kandungan uap air di udara",
    points: ["Diukur dengan higrometer", "Satuan: persen (%)", "Normal: 60-80%"],
    color: "from-teal-400 to-emerald-500",
    bgColor: "bg-teal-50 dark:bg-teal-950/30",
    emoji: "💨"
  },
  {
    icon: Thermometer,
    title: "Suhu Udara",
    description: "Derajat panas/dingin udara",
    points: ["Diukur dengan termometer", "Satuan: Celcius (°C)", "Pengaruhi pertumbuhan"],
    color: "from-red-400 to-rose-500",
    bgColor: "bg-red-50 dark:bg-red-950/30",
    emoji: "🌡️"
  },
  {
    icon: Gauge,
    title: "Tekanan Udara",
    description: "Berat udara menekan bumi",
    points: ["Diukur dengan barometer", "Satuan: milibar (mb)", "Penyebab gerakan angin"],
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    emoji: "🎈"
  },
  {
    icon: Wind,
    title: "Angin",
    description: "Udara bergerak",
    points: ["Dari tekanan tinggi ke rendah", "Bawa uap air & hujan", "Bantu penyerbukan"],
    color: "from-slate-400 to-gray-500",
    bgColor: "bg-slate-50 dark:bg-slate-950/30",
    emoji: "🌬️"
  },
  {
    icon: Cloud,
    title: "Awan",
    description: "Titik air melayang",
    points: ["Kumulus, stratus, sirus", "Tanda kondisi cuaca", "Terbentuk dari uap air"],
    color: "from-sky-400 to-blue-400",
    bgColor: "bg-sky-50 dark:bg-sky-950/30",
    emoji: "☁️"
  },
  {
    icon: CloudRain,
    title: "Hujan",
    description: "Air jatuh dari awan",
    points: ["Diukur dengan ombrometer", "Satuan: milimeter (mm)", "Sumber air utama"],
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    emoji: "🌧️"
  }
];

export function WeatherElementsCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % elements.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + elements.length) % elements.length);
  };

  const currentElement = elements[currentIndex];
  const Icon = currentElement.icon;

  return (
    <div className="space-y-8 mb-8">
      {/* Infographic Image */}
      <div className="rounded-xl overflow-hidden shadow-lg max-w-2xl mx-auto">
        <img 
          src="/img/siklus-hidrologi.webp" 
          alt="Siklus Hidrologi" 
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="space-y-6">
      {/* Desktop Grid View - only on lg and above */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-4">
        {elements.map((el, idx) => {
          const ElIcon = el.icon;
          return (
            <Card key={idx} className={`${el.bgColor} border-0 shadow-sm hover:shadow-md transition-shadow`}>
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${el.color} text-white mb-2`}>
                    <ElIcon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground text-base mb-1">
                    {el.title}
                  </h3>
                  <p className="text-base text-muted-foreground mb-2">
                    {el.description}
                  </p>
                  <ul className="space-y-1 text-left w-full">
                    {el.points.map((point, pIndex) => (
                      <li key={pIndex} className="text-base text-muted-foreground flex items-start gap-1.5">
                        <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${el.color} shrink-0 mt-2`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Mobile & Tablet Carousel View */}
      <div className="lg:hidden">
        {/* Cycle Indicator */}
        <div className="flex items-center justify-center gap-1 flex-wrap mb-4">
          {elements.map((el, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`text-lg transition-all duration-200 p-1 rounded-full ${
                idx === currentIndex 
                  ? 'scale-125 bg-primary/10' 
                  : 'opacity-50 hover:opacity-80'
              }`}
            >
              {el.emoji}
            </button>
          ))}
        </div>

        {/* Main Card with Navigation */}
        <Card className={`${currentElement.bgColor} border-0 shadow-md transition-all duration-300`}>
          <CardContent className="p-6">
            {/* Counter */}
            <div className="text-sm text-muted-foreground text-center mb-4">
              {currentIndex + 1} / {elements.length}
            </div>

            {/* Icon & Title */}
            <div className="flex flex-col items-center text-center mb-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${currentElement.color} text-white mb-3`}>
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-foreground text-lg">
                {currentElement.title}
              </h3>
              <p className="text-base text-muted-foreground">
                {currentElement.description}
              </p>
            </div>

            {/* Points */}
            <ul className="space-y-2 max-w-xs mx-auto">
              {currentElement.points.map((point, pIndex) => (
                <li key={pIndex} className="text-base text-muted-foreground flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full bg-gradient-to-br ${currentElement.color} shrink-0`} />
                  {point}
                </li>
              ))}
            </ul>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={goPrev}
                className="gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                Sebelum
              </Button>
              
              <div className="flex gap-1">
                {elements.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      idx === currentIndex 
                        ? 'bg-primary w-4' 
                        : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <Button 
                variant="ghost" 
                size="sm" 
                onClick={goNext}
                className="gap-1"
              >
                Lanjut
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cycle Info - Mobile & Tablet */}
      <Card className="border-dashed border-muted-foreground/30 lg:hidden">
        <CardContent className="p-4">
          <p className="text-sm text-center text-muted-foreground">
            🔄 <span className="font-medium">Siklus hidrometeorologi:</span> Geser untuk melihat 8 unsur yang saling berkaitan
          </p>
        </CardContent>
      </Card>

      {/* Cycle Explanation - Desktop only */}
      <Card className="hidden lg:block border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardContent className="p-6">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            🔄 Siklus Hidrometeorologi
          </h4>
          <div className="flex items-center justify-center gap-2 text-base text-muted-foreground flex-wrap">
            <span className="bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1.5 rounded-full">☀️ Radiasi</span>
            <span>→</span>
            <span className="bg-cyan-100 dark:bg-cyan-900/30 px-3 py-1.5 rounded-full">💧 Penguapan</span>
            <span>→</span>
            <span className="bg-teal-100 dark:bg-teal-900/30 px-3 py-1.5 rounded-full">💨 Kelembapan</span>
            <span>→</span>
            <span className="bg-sky-100 dark:bg-sky-900/30 px-3 py-1.5 rounded-full">☁️ Awan</span>
            <span>→</span>
            <span className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1.5 rounded-full">🌧️ Hujan</span>
            <span>→</span>
            <span className="text-sm text-muted-foreground/70">kembali ke awal</span>
          </div>
          <p className="text-sm text-center text-muted-foreground mt-4">
            Suhu, tekanan, dan angin mempengaruhi setiap tahap dalam siklus ini
          </p>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
