import { MainLayout } from '@/components/layout/MainLayout';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Users,
  Target,
  BookOpen,
  Sprout
} from 'lucide-react';

export default function About() {
  return (
    <MainLayout>
      <div className="p-6 md:p-8">
        <Breadcrumbs 
          items={[{ label: 'Tentang' }]} 
          className="mb-6"
        />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Tentang Program</h1>
          <p className="text-muted-foreground">
            Sekolah Lapang Iklim BMKG Stasiun Klimatologi DI Yogyakarta
          </p>
        </div>

        {/* Hero Card */}
        <Card className="mb-8 border-0 shadow-card overflow-hidden">
          <div className="gradient-hero p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm">
                <Cloud className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Sekolah Lapang Iklim</h2>
                <p className="text-white/80">BMKG Staklim DI Yogyakarta</p>
              </div>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              Platform pembelajaran interaktif yang dirancang untuk membantu petani dan 
              masyarakat umum memahami informasi cuaca dan iklim serta pemanfaatannya 
              dalam kegiatan pertanian sehari-hari.
            </p>
          </div>
        </Card>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Tujuan</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Meningkatkan literasi iklim masyarakat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Membantu petani memanfaatkan informasi BMKG</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Mendukung ketahanan pangan melalui adaptasi iklim</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Mengurangi risiko gagal panen akibat cuaca ekstrem</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/20 text-secondary">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Sasaran</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Petani dan kelompok tani</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Penyuluh pertanian</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Mahasiswa dan akademisi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Masyarakat umum</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <Card className="mb-8 border-0 shadow-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Fitur Pembelajaran</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="font-medium text-foreground">3 Modul</p>
                <p className="text-sm text-muted-foreground">Materi terstruktur</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <Sprout className="h-8 w-8 mx-auto mb-2 text-secondary" />
                <p className="font-medium text-foreground">9 Sub-Modul</p>
                <p className="text-sm text-muted-foreground">Pembahasan lengkap</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <Target className="h-8 w-8 mx-auto mb-2 text-accent" />
                <p className="font-medium text-foreground">Kuis Interaktif</p>
                <p className="text-sm text-muted-foreground">Uji pemahaman</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="border-0 shadow-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Alamat</p>
                  <p className="text-muted-foreground">
                    Stasiun Klimatologi Klas I Yogyakarta<br />
                    Jl. Wates Km. 8, Balecatur, Gamping<br />
                    Sleman, DI Yogyakarta 55294
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Telepon</p>
                  <p className="text-muted-foreground">(0274) 798-230</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">staklim.yogyakarta@bmkg.go.id</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Website & Media Sosial</p>
                  <p className="text-muted-foreground">
                    www.bmkg.go.id | Instagram: @staklim_jogja
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <Button asChild className="w-full sm:w-auto">
                <a href="https://www.bmkg.go.id" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Kunjungi Website BMKG
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
