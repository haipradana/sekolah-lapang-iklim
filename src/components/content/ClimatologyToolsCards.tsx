import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const tools = [
  {
    emoji: "🔮",
    name: "Campbell Stokes",
    measures: "Lama penyinaran matahari",
    unit: "jam",
    howItWorks: "Bola kaca membakar pita rekam saat matahari bersinar",
    color: "bg-amber-50 dark:bg-amber-950/30",
    image: "/placeholder.svg",
    description: "Campbell Stokes adalah alat pengukur lama penyinaran matahari. Alat ini menggunakan bola kaca yang memfokuskan sinar matahari untuk membakar pita rekam khusus, sehingga tercatat berapa jam matahari bersinar dalam sehari."
  },
  {
    emoji: "🥘",
    name: "Panci Penguapan",
    measures: "Tingkat penguapan air",
    unit: "mm/hari",
    howItWorks: "Selisih ketinggian air dari hari ke hari",
    color: "bg-cyan-50 dark:bg-cyan-950/30",
    image: "/placeholder.svg",
    description: "Panci Penguapan (Evaporation Pan) digunakan untuk mengukur tingkat penguapan air. Dengan mengukur selisih ketinggian air setiap hari, kita dapat mengetahui seberapa banyak air yang menguap."
  },
  {
    emoji: "💧",
    name: "Higrometer",
    measures: "Kelembapan udara",
    unit: "persen (%)",
    howItWorks: "Ada yang manual (psikrometer) dan digital",
    color: "bg-teal-50 dark:bg-teal-950/30",
    image: "/placeholder.svg",
    description: "Higrometer adalah alat untuk mengukur kelembapan udara. Tipe manual disebut psikrometer yang menggunakan dua termometer (bola basah dan bola kering), sedangkan tipe digital menggunakan sensor elektronik."
  },
  {
    emoji: "🌡️",
    name: "Termometer",
    measures: "Suhu udara",
    unit: "Celcius (°C)",
    howItWorks: "Tipe max-min mencatat suhu tertinggi & terendah",
    color: "bg-red-50 dark:bg-red-950/30",
    image: "/placeholder.svg",
    description: "Termometer mengukur suhu udara dalam satuan Celcius. Termometer max-min khusus mencatat suhu tertinggi dan terendah dalam 24 jam terakhir untuk analisis cuaca."
  },
  {
    emoji: "🌀",
    name: "Anemometer",
    measures: "Kecepatan angin",
    unit: "km/jam / knots",
    howItWorks: "Wind vane menunjukkan arah hembusan angin",
    color: "bg-slate-50 dark:bg-slate-950/30",
    image: "/placeholder.svg",
    description: "Anemometer mengukur kecepatan angin menggunakan mangkuk yang berputar. Biasanya dipasangkan dengan wind vane (penunjuk arah angin) untuk mengetahui dari mana angin berhembus."
  },
  {
    emoji: "🌧️",
    name: "Ombrometer",
    measures: "Curah hujan",
    unit: "milimeter (mm)",
    howItWorks: "1 mm = 1 liter air per m². Diukur pukul 07.00 WIB",
    color: "bg-blue-50 dark:bg-blue-950/30",
    image: "/placeholder.svg",
    description: "Ombrometer (penakar hujan) mengukur curah hujan dalam satuan milimeter. 1 mm curah hujan berarti 1 liter air per meter persegi. Pengukuran standar dilakukan setiap pukul 07.00 WIB."
  }
];

export function ClimatologyToolsCards() {
  const [selectedTool, setSelectedTool] = useState<typeof tools[0] | null>(null);

  return (
    <div className="space-y-6 mb-8">
      {/* Intro */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground text-center">
            <span className="font-semibold text-primary">6 alat ukur</span> yang digunakan BMKG untuk memantau cuaca dan iklim. <span className="text-xs">(Klik untuk lihat gambar)</span>
          </p>
        </CardContent>
      </Card>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <Card 
            key={index} 
            className={`${tool.color} border-0 shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]`}
            onClick={() => setSelectedTool(tool)}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                {/* Emoji */}
                <div className="text-3xl shrink-0">
                  {tool.emoji}
                </div>
                
                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {tool.name}
                  </h3>
                  
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-muted-foreground">Mengukur:</span>
                      <span className="text-xs text-foreground">{tool.measures}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-muted-foreground">Satuan:</span>
                      <span className="text-xs bg-background/80 px-1.5 py-0.5 rounded font-mono">{tool.unit}</span>
                    </div>
                    <p className="text-xs text-muted-foreground pt-1 border-t border-border/50">
                      {tool.howItWorks}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fun Fact */}
      <Card className="border-dashed border-muted-foreground/30">
        <CardContent className="p-4 text-center">
          <p className="text-xs text-muted-foreground">
            💡 <span className="font-medium">Tahukah kamu?</span> Stasiun Klimatologi mengukur curah hujan setiap hari pukul 07.00 WIB sebagai standar nasional
          </p>
        </CardContent>
      </Card>

      {/* Tool Detail Dialog */}
      <Dialog open={!!selectedTool} onOpenChange={(open) => !open && setSelectedTool(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="text-2xl">{selectedTool?.emoji}</span>
              {selectedTool?.name}
            </DialogTitle>
            <DialogDescription>
              Mengukur: {selectedTool?.measures}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Placeholder Image */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
              <div className="text-center text-muted-foreground">
                <div className="text-5xl mb-2">{selectedTool?.emoji}</div>
                <p className="text-xs">Gambar {selectedTool?.name}</p>
                <p className="text-xs opacity-60">(Placeholder)</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <p className="text-sm text-foreground leading-relaxed">
                {selectedTool?.description}
              </p>
              
              <div className="flex items-center gap-4 pt-2 border-t">
                <div className="text-center flex-1">
                  <p className="text-xs text-muted-foreground">Satuan</p>
                  <p className="font-mono text-sm font-medium">{selectedTool?.unit}</p>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center flex-1">
                  <p className="text-xs text-muted-foreground">Cara Kerja</p>
                  <p className="text-xs">{selectedTool?.howItWorks}</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
