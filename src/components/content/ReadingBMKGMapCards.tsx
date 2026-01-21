import { Card, CardContent } from '@/components/ui/card';
import { Map, CloudRain, Droplets, AlertTriangle, Lightbulb, BookOpen, TrendingUp, TrendingDown } from 'lucide-react';
import { FarmerTipsCard } from '@/components/common/FarmerTipsCard';

export function ReadingBMKGMapCards() {
  return (
    <div className="space-y-6 mb-8">
      {/* Intro - Apa itu Peta BMKG */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4">
          <div className="inline-flex items-center gap-2 mb-3">
            <Map className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary text-lg">Mengenal Peta Prakiraan BMKG</span>
          </div>
          <p className="text-base text-muted-foreground mb-3">
            BMKG menerbitkan peta prakiraan iklim setiap bulannya untuk membantu petani dan masyarakat 
            memahami kondisi curah hujan yang akan terjadi. Dua jenis peta utama yang perlu dipahami adalah:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="p-3 bg-background rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <CloudRain className="h-4 w-4 text-blue-500" />
                <span className="font-medium text-foreground">Peta CH (Curah Hujan)</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Menunjukkan <strong>jumlah hujan</strong> dalam milimeter (mm) yang diprakirakan turun dalam satu bulan.
              </p>
            </div>
            <div className="p-3 bg-background rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="h-4 w-4 text-green-500" />
                <span className="font-medium text-foreground">Peta SH (Sifat Hujan)</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Menunjukkan <strong>perbandingan hujan</strong> dengan rata-rata normal (apakah lebih banyak, normal, atau lebih sedikit).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section: Peta Curah Hujan (CH) */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <CloudRain className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold text-foreground text-lg">Cara Membaca Peta Curah Hujan (CH)</h3>
          </div>
          
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">CH</strong> adalah singkatan dari <strong className="text-foreground">Curah Hujan</strong>, 
            yaitu jumlah air hujan yang jatuh dalam satuan <strong className="text-foreground">milimeter (mm)</strong>. 
            Semakin tinggi angkanya, semakin banyak hujan yang diprakirakan turun.
          </p>

          {/* Legenda CH */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-foreground mb-2">Legenda Warna Peta CH:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-amber-900"></div>
                <span className="text-muted-foreground">0-20 mm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-amber-600"></div>
                <span className="text-muted-foreground">21-50 mm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-orange-400"></div>
                <span className="text-muted-foreground">51-100 mm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-yellow-300"></div>
                <span className="text-muted-foreground">101-150 mm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-yellow-200"></div>
                <span className="text-muted-foreground">151-200 mm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-lime-300"></div>
                <span className="text-muted-foreground">201-300 mm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-400"></div>
                <span className="text-muted-foreground">301-400 mm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-600"></div>
                <span className="text-muted-foreground">&gt;500 mm</span>
              </div>
            </div>
          </div>

          {/* Kategori CH */}
          <div className="space-y-2 mb-4">
            <h4 className="text-sm font-medium text-foreground">Kategori Curah Hujan:</h4>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <div className="p-2 bg-amber-100 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                <span className="font-medium text-amber-800 dark:text-amber-200">🌵 RENDAH: 0-100 mm</span>
                <p className="text-muted-foreground text-xs mt-1">Hujan sangat sedikit, potensi kekeringan</p>
              </div>
              <div className="p-2 bg-yellow-100 dark:bg-yellow-950/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <span className="font-medium text-yellow-800 dark:text-yellow-200">🌤️ MENENGAH: 101-200 mm</span>
                <p className="text-muted-foreground text-xs mt-1">Hujan cukup untuk pertanian</p>
              </div>
              <div className="p-2 bg-green-100 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                <span className="font-medium text-green-800 dark:text-green-200">🌧️ TINGGI: 201-500 mm</span>
                <p className="text-muted-foreground text-xs mt-1">Hujan lebat, waspadai genangan</p>
              </div>
              <div className="p-2 bg-blue-100 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <span className="font-medium text-blue-800 dark:text-blue-200">⛈️ SANGAT TINGGI: &gt;500 mm</span>
                <p className="text-muted-foreground text-xs mt-1">Hujan sangat lebat, risiko banjir tinggi</p>
              </div>
            </div>
          </div>

          {/* Contoh Peta CH */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <img 
                src="/img/2_4_peta-bmkg/ch-februari-2026.jpg" 
                alt="Peta Prediksi Curah Hujan Februari 2026 D.I. Yogyakarta"
                className="w-full h-auto rounded-lg border"
              />
              <p className="text-xs text-center text-muted-foreground mt-2">Peta CH Februari 2026</p>
            </div>
            <div>
              <img 
                src="/img/2_4_peta-bmkg/ch-april-2026.jpg" 
                alt="Peta Prediksi Curah Hujan April 2026 D.I. Yogyakarta"
                className="w-full h-auto rounded-lg border"
              />
              <p className="text-xs text-center text-muted-foreground mt-2">Peta CH April 2026</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section: Peta Sifat Hujan (SH) */}
      <Card className="border-green-200 dark:border-green-800">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Droplets className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold text-foreground text-lg">Cara Membaca Peta Sifat Hujan (SH)</h3>
          </div>
          
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">SH</strong> adalah singkatan dari <strong className="text-foreground">Sifat Hujan</strong>, 
            yaitu perbandingan curah hujan yang diprakirakan dengan <strong className="text-foreground">rata-rata normal 30 tahun</strong>. 
            Nilai dinyatakan dalam <strong className="text-foreground">persen (%)</strong>.
          </p>

          {/* Legenda SH */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-foreground mb-2">Legenda Warna Peta SH:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3 p-2 bg-amber-100 dark:bg-amber-950/30 rounded-lg">
                <TrendingDown className="h-4 w-4 text-amber-600" />
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded bg-amber-900"></div>
                    <div className="w-4 h-4 rounded bg-amber-600"></div>
                    <div className="w-4 h-4 rounded bg-amber-400"></div>
                  </div>
                  <span className="text-foreground font-medium">BAWAH NORMAL (BN): 0-84%</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-yellow-100 dark:bg-yellow-950/30 rounded-lg">
                <span className="h-4 w-4 flex items-center justify-center text-yellow-600">≈</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-yellow-300"></div>
                  <span className="text-foreground font-medium">NORMAL (N): 85-115%</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-950/30 rounded-lg">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded bg-lime-400"></div>
                    <div className="w-4 h-4 rounded bg-green-500"></div>
                    <div className="w-4 h-4 rounded bg-green-700"></div>
                  </div>
                  <span className="text-foreground font-medium">ATAS NORMAL (AN): &gt;115%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Penjelasan SH */}
          <div className="bg-muted/30 p-3 rounded-lg mb-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Cara bacanya:</strong> Jika suatu daerah berwarna <span className="text-amber-600 font-medium">coklat/oranye</span>, 
              artinya hujan diprakirakan <span className="text-amber-600 font-medium">lebih sedikit</span> dari rata-rata. 
              Jika berwarna <span className="text-green-600 font-medium">hijau</span>, hujan diprakirakan <span className="text-green-600 font-medium">lebih banyak</span> dari rata-rata.
            </p>
          </div>

          {/* Contoh Peta SH */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <img 
                src="/img/2_4_peta-bmkg/sh-februari-2026.jpg" 
                alt="Peta Prediksi Sifat Hujan Februari 2026 D.I. Yogyakarta"
                className="w-full h-auto rounded-lg border"
              />
              <p className="text-xs text-center text-muted-foreground mt-2">Peta SH Februari 2026</p>
            </div>
            <div>
              <img 
                src="/img/2_4_peta-bmkg/sh-april-2026.jpg" 
                alt="Peta Prediksi Sifat Hujan April 2026 D.I. Yogyakarta"
                className="w-full h-auto rounded-lg border"
              />
              <p className="text-xs text-center text-muted-foreground mt-2">Peta SH April 2026</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implikasi untuk Pertanian */}
      <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <h3 className="font-semibold text-foreground text-lg">Apa Artinya Bagi Pertanian?</h3>
          </div>
          
          <div className="space-y-4">
            {/* CH Rendah */}
            <div className="p-3 bg-background rounded-lg border">
              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-600"></span>
                Jika CH (Curah Hujan) RENDAH (0-100 mm)
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-5">
                <li>• Air hujan tidak mencukupi kebutuhan padi</li>
                <li>• <strong className="text-foreground">Solusi:</strong> Siapkan irigasi tambahan, atau tanam palawija (jagung/kedelai)</li>
                <li>• Pilih varietas padi tahan kering (contoh: Inpari 30)</li>
                <li>• Tunda tanam jika air irigasi tidak tersedia</li>
              </ul>
            </div>

            {/* CH Tinggi */}
            <div className="p-3 bg-background rounded-lg border">
              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-600"></span>
                Jika CH (Curah Hujan) TINGGI (&gt;300 mm)
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-5">
                <li>• Hujan lebat, risiko banjir dan genangan di sawah</li>
                <li>• <strong className="text-foreground">Solusi:</strong> Pastikan saluran drainase bersih dan lancar</li>
                <li>• Pilih varietas tahan genangan (contoh: Inpari 30)</li>
                <li>• Waspadai serangan hama wereng saat kelembapan tinggi</li>
              </ul>
            </div>

            {/* SH Bawah Normal */}
            <div className="p-3 bg-background rounded-lg border">
              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-amber-600" />
                Jika SH (Sifat Hujan) BAWAH NORMAL (&lt;85%)
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-5">
                <li>• Hujan lebih sedikit dari biasanya di bulan tersebut</li>
                <li>• <strong className="text-foreground">Risiko:</strong> Kekeringan, tanaman kekurangan air</li>
                <li>• Koordinasi dengan PPL untuk jadwal tanam yang disesuaikan</li>
                <li>• Pertimbangkan pompanisasi atau sumber air alternatif</li>
              </ul>
            </div>

            {/* SH Atas Normal */}
            <div className="p-3 bg-background rounded-lg border">
              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                Jika SH (Sifat Hujan) ATAS NORMAL (&gt;115%)
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 ml-5">
                <li>• Hujan lebih banyak dari biasanya di bulan tersebut</li>
                <li>• <strong className="text-foreground">Risiko:</strong> Banjir, hama penyakit berkembang</li>
                <li>• Siapkan pompa air untuk mengeluarkan air dari sawah</li>
                <li>• Lakukan pengendalian hama secara intensif</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cara Praktis Membaca Peta */}
      <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold text-foreground text-lg">Langkah Praktis Membaca Peta</h3>
          </div>
          
          <ol className="space-y-3 text-base">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-sm flex items-center justify-center font-medium">1</span>
              <div>
                <span className="font-medium text-foreground">Cari lokasi Anda di peta</span>
                <p className="text-sm text-muted-foreground">Temukan kabupaten dan kecamatan tempat lahan Anda berada</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-sm flex items-center justify-center font-medium">2</span>
              <div>
                <span className="font-medium text-foreground">Perhatikan warna di daerah Anda</span>
                <p className="text-sm text-muted-foreground">Cocokkan warna pada peta dengan legenda di bagian kanan</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-sm flex items-center justify-center font-medium">3</span>
              <div>
                <span className="font-medium text-foreground">Baca angka prakiraan</span>
                <p className="text-sm text-muted-foreground">Untuk peta CH: lihat berapa mm hujan. Untuk peta SH: lihat berapa persen dari normal</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-sm flex items-center justify-center font-medium">4</span>
              <div>
                <span className="font-medium text-foreground">Tentukan langkah antisipasi</span>
                <p className="text-sm text-muted-foreground">Sesuaikan jadwal tanam, pilih varietas, dan siapkan mitigasi berdasarkan prakiraan</p>
              </div>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Contoh Kasus */}
      <Card className="border-dashed border-muted-foreground/30">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground text-base mb-2">Contoh Kasus: Membaca Peta April 2026</h4>
              <p className="text-base text-muted-foreground mb-2">
                Lihat peta CH April 2026 di atas. Hampir seluruh wilayah DIY berwarna <span className="text-yellow-600 font-medium">kuning</span> (101-200 mm), 
                yang artinya curah hujan masih <strong className="text-foreground">menengah</strong>.
              </p>
              <p className="text-base text-muted-foreground mb-2">
                Pada peta SH April 2026, sebagian besar wilayah berwarna <span className="text-yellow-600 font-medium">kuning muda</span> (Normal) 
                dan <span className="text-green-600 font-medium">hijau</span> (Atas Normal di beberapa tempat).
              </p>
              <p className="text-base text-muted-foreground">
                <strong className="text-foreground">Kesimpulan:</strong> April 2026 masih aman untuk bertanam, tapi mulai siapkan pengelolaan air 
                karena memasuki peralihan ke musim kemarau.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Farmer Tips */}
      <FarmerTipsCard 
        tip="Cek peta BMKG setiap awal bulan! Dengan mengetahui prakiraan CH dan SH, Anda bisa menyiapkan langkah antisipasi lebih awal."
        funFact="Peta BMKG gratis diakses di website bmkg.go.id atau aplikasi InfoBMKG. Prakiraan diupdate setiap bulan!"
      />
    </div>
  );
}
