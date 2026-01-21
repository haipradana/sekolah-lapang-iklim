import { Card, CardContent } from '@/components/ui/card';
import { MapPin, AlertTriangle, Info, Map, Lightbulb } from 'lucide-react';
import { FarmerTipsCard } from '@/components/common/FarmerTipsCard';

export function SeasonZoneCards() {
  const zomData = [
    { code: "268", color: "bg-blue-200", locations: "Kulon Progo (barat laut)", textColor: "text-gray-800" },
    { code: "269", color: "bg-orange-400", locations: "Sleman (utara)", textColor: "text-gray-800" },
    { code: "270", color: "bg-yellow-300", locations: "Kulon Progo & Sleman (tengah)", textColor: "text-gray-800" },
    { code: "271", color: "bg-pink-200", locations: "Kota Yogyakarta & Sleman (selatan)", textColor: "text-gray-800" },
    { code: "272", color: "bg-lime-300", locations: "Sleman (timur) & Prambanan", textColor: "text-gray-800" },
    { code: "273", color: "bg-green-600", locations: "Kulon Progo (barat)", textColor: "text-white" },
    { code: "274", color: "bg-cyan-400", locations: "Bantul & Gunungkidul (barat)", textColor: "text-gray-800" },
    { code: "275", color: "bg-blue-300", locations: "Gunungkidul (tengah-selatan)", textColor: "text-gray-800" },
  ];

  return (
    <div className="space-y-6 mb-8">
      {/* Definition */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4">
          <div className="inline-flex items-center gap-2 mb-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary text-lg">Apa itu Zona Musim (ZOM)?</span>
          </div>
          <p className="text-base text-muted-foreground mb-3">
            ZOM adalah daerah yang pola hujan rata-ratanya memiliki <strong className="text-foreground">perbedaan yang jelas</strong> antara periode musim kemarau dan musim hujan.
          </p>
          <p className="text-base text-muted-foreground mb-3">
            Daerah yang pola hujannya <em>tidak memiliki</em> perbedaan jelas antara musim kemarau dan hujan disebut <strong className="text-foreground">Non Zona Musim (Non ZOM)</strong>.
          </p>
          <p className="text-base text-muted-foreground">
            Indonesia dibagi menjadi <span className="font-semibold text-foreground">342 ZOM</span> berdasarkan pola curah hujan.
          </p>
        </CardContent>
      </Card>

      {/* Real Case Example */}
      <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground text-base mb-2">Contoh Kasus Nyata</h3>
              <p className="text-base text-muted-foreground mb-2">
                Pak Tani di Bantul (ZOM 274) dan Bu Tani di Gunungkidul selatan (ZOM 275) bertetangga kecamatan, tapi prakiraan awal musim hujan mereka <strong className="text-foreground">bisa berbeda 1-2 dasarian</strong>.
              </p>
              <p className="text-base text-muted-foreground">
                <strong className="text-foreground">Implikasinya:</strong> Jika keduanya tanam bersamaan hanya berdasarkan info kabupaten, salah satu bisa tanam terlalu cepat atau terlambat. Dengan tahu ZOM masing-masing, waktu tanam bisa lebih optimal.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>


      {/* Important Note */}
      <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground text-base mb-1">Penting!</h3>
              <p className="text-base text-muted-foreground">
                Batas ZOM <strong>≠</strong> batas kabupaten/kecamatan
              </p>
              <ul className="mt-2 space-y-1 text-base text-muted-foreground">
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

      {/* ZOM Map DIY */}
      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <div className="flex justify-center">
            <img 
              src="/img/2_3_zom/ZOM-revisi.jpeg" 
              alt="Peta Zona Musim (ZOM) Provinsi D.I. Yogyakarta - BMKG (Normal 1991-2020)"
              className="w-full sm:max-w-md lg:max-w-lg h-auto rounded-lg"
            />
          </div>
          <div className="p-4 bg-muted/30">
            <div className="flex items-center gap-2 mb-2">
              <Map className="h-4 w-4 text-primary" />
              <span className="text-base font-medium text-foreground">Peta ZOM Prov. D.I. Yogyakarta</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sumber: BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* DIY Zones Detail */}
      <div>
        <h3 className="font-semibold text-foreground text-base mb-3">8 Zona Musim di DI Yogyakarta</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {zomData.map((zom) => (
            <Card key={zom.code} className="border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className={`${zom.color} ${zom.textColor} px-3 py-2 text-center`}>
                  <span className="font-bold text-base">ZOM {zom.code}</span>
                </div>
                <div className="p-2 bg-muted/50">
                  <p className="text-sm text-muted-foreground text-center leading-tight">{zom.locations}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Coverage Detail by Kabupaten */}
      <Card className="border-0 bg-muted/50">
        <CardContent className="p-4">
          <h4 className="font-semibold text-foreground text-base mb-3">Cakupan ZOM per Kabupaten/Kota</h4>
          <div className="space-y-3 text-base">
            <div className="flex gap-2">
              <span className="font-medium text-foreground min-w-[100px]">Kulon Progo</span>
              <span className="text-muted-foreground">ZOM 268, 270, 273</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-foreground min-w-[100px]">Sleman</span>
              <span className="text-muted-foreground">ZOM 269, 270, 271, 272</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-foreground min-w-[100px]">Kota Yogya</span>
              <span className="text-muted-foreground">ZOM 271</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-foreground min-w-[100px]">Bantul</span>
              <span className="text-muted-foreground">ZOM 274</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-foreground min-w-[100px]">Gunungkidul</span>
              <span className="text-muted-foreground">ZOM 272, 274, 275</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Forecast Info */}
      <Card className="border-dashed border-muted-foreground/30">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground text-base mb-1">Prakiraan Musim</h4>
              <p className="text-base text-muted-foreground">
                BMKG mengeluarkan prakiraan awal musim hujan & kemarau berdasarkan ZOM. 
                Petani dapat menggunakan informasi ini untuk merencanakan waktu tanam yang tepat.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Farmer Tips */}
      <FarmerTipsCard 
        tip="Ketahui kode ZOM lahan Anda! Dengan tahu ZOM, Anda bisa baca prakiraan musim BMKG yang spesifik untuk wilayah Anda."
        funFact="Tetangga desa bisa beda ZOM, jadi waktu tanam optimalnya juga bisa beda!"
      />
    </div>
  );
}
