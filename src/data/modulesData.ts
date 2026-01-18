export interface Quiz {
  id: string;
  type: 'multiple-choice' | 'drag-drop' | 'matching' | 'input-number';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
}

export interface Section {
  title: string;
  content: string;
  imageUrl?: string;
}

export interface Submodule {
  id: string;
  slug: string;
  title: string;
  summary: string;
  sections: Section[];
  quiz: Quiz;
  imageUrl: string;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  imageUrl: string;
  submodules: Submodule[];
}

export const modulesData: Module[] = [
  {
    id: 1,
    title: "Mengenal Cuaca dan Iklim",
    description: "Pelajari dasar-dasar cuaca dan iklim, perbedaannya, unsur-unsur pembentuknya, serta alat-alat ukur yang digunakan dalam klimatologi.",
    icon: "cloud-sun",
    color: "primary",
    imageUrl: "/img/thumbnail/1_wide.webp",
    submodules: [
      {
        id: "1-1",
        slug: "1-cuaca-vs-iklim",
        title: "Apa Bedanya Cuaca dan Iklim?",
        summary: "Memahami perbedaan mendasar antara cuaca (kondisi jangka pendek) dan iklim (rata-rata jangka panjang 10-30 tahun).",
        sections: [
          {
            title: "Definisi Cuaca",
            content: "Cuaca adalah kondisi fisik atmosfer di tempat dan waktu yang singkat (dalam hitungan jam hingga hari). Misalnya: hujan pagi ini, cerah siang nanti, atau mendung sore ini. Cuaca bersifat dinamis dan cepat berubah.",
            imageUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&q=80"
          },
          {
            title: "Definisi Iklim",
            content: "Iklim adalah rata-rata kondisi cuaca dalam jangka waktu panjang (10-30 tahun) di wilayah yang lebih luas. Contoh: 'Yogyakarta beriklim tropis dengan musim hujan November-April'. Iklim relatif stabil dan dapat diprediksi polanya.",
            imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&q=80"
          },
          {
            title: "Analogi Mood vs Kepribadian",
            content: "Membedakan cuaca dan iklim itu seperti membedakan suasana hati (mood) dan kepribadian. Cuaca adalah suasana hati yang bisa berubah dari marah (hujan) ke senang (cerah) dalam sekejap. Sedangkan iklim adalah kepribadian seseorang yang sudah terbentuk bertahun-tahun — misalnya orang yang dasarnya tenang, atau daerah yang dasarnya tropis."
          }
        ],
        quiz: {
          id: "q1-1",
          type: "drag-drop",
          question: "Pernyataan berikut termasuk cuaca atau iklim? \"Suhu udara di Sleman hari ini mencapai 36°C\"",
          options: ["Cuaca", "Iklim"],
          correctAnswer: "Cuaca",
          explanation: "Karena ini menggambarkan kondisi spesifik 'hari ini' di satu tempat tertentu, maka termasuk CUACA. Jika pernyataannya adalah 'Rata-rata suhu Sleman setiap bulan Agustus adalah 28°C', itu baru termasuk iklim."
        },
        imageUrl: "/img/thumbnail/1_1-thumbnail.webp"
      },
      {
        id: "1-2",
        slug: "2-unsur-cuaca-iklim",
        title: "8 Unsur Pembentuk Cuaca & Iklim",
        summary: "Mengenal 8 unsur utama yang membentuk cuaca dan iklim: radiasi matahari, penguapan, kelembapan, suhu, tekanan, angin, awan, dan hujan.",
        sections: [
          {
            title: "Radiasi Matahari",
            content: "Sumber energi utama yang menggerakkan semua proses atmosfer. Matahari memanaskan permukaan bumi, menyebabkan penguapan, dan menciptakan perbedaan suhu yang menggerakkan angin.",
            imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
          },
          {
            title: "Penguapan (Evaporasi)",
            content: "Proses berubahnya air menjadi uap air akibat panas matahari. Terjadi di laut, sungai, danau, dan permukaan tanah basah. Uap air ini naik ke atmosfer dan membentuk awan."
          },
          {
            title: "Kelembapan Udara",
            content: "Kandungan uap air di udara. Diukur dalam persen (%) menggunakan higrometer. Kelembapan tinggi membuat udara terasa pengap dan berpengaruh pada pertumbuhan tanaman serta hama."
          },
          {
            title: "Suhu Udara",
            content: "Derajat panas atau dinginnya udara. Diukur dengan termometer dalam satuan Celcius (°C). Suhu mempengaruhi kenyamanan, pertumbuhan tanaman, dan kebutuhan air irigasi."
          },
          {
            title: "Tekanan Udara",
            content: "Berat udara yang menekan permukaan bumi. Diukur dengan barometer dalam milibar (mb). Perbedaan tekanan menyebabkan angin bergerak dari tekanan tinggi ke rendah."
          },
          {
            title: "Angin",
            content: "Udara yang bergerak karena perbedaan tekanan. Angin membawa uap air, mempengaruhi penyebaran hujan, dan penting untuk penyerbukan tanaman serta penggilingan padi."
          },
          {
            title: "Awan",
            content: "Kumpulan titik-titik air atau kristal es yang melayang di atmosfer. Jenis awan (kumulus, stratus, sirus) menandakan kondisi cuaca yang berbeda-beda."
          },
          {
            title: "Hujan (Presipitasi)",
            content: "Air yang jatuh dari awan ke permukaan bumi. Diukur dengan ombrometer dalam milimeter (mm). Curah hujan sangat penting untuk pertanian dan sumber air."
          }
        ],
        quiz: {
          id: "q1-2",
          type: "multiple-choice",
          question: "Manakah yang BUKAN termasuk unsur cuaca dan iklim?",
          options: ["Radiasi Matahari", "Kelembapan Udara", "Kesuburan Tanah", "Tekanan Udara"],
          correctAnswer: "Kesuburan Tanah",
          explanation: "Kesuburan tanah bukan unsur cuaca/iklim, melainkan faktor pertanian yang dipengaruhi oleh cuaca dan iklim. 8 unsur cuaca/iklim adalah: radiasi matahari, penguapan, kelembapan, suhu, tekanan, angin, awan, dan hujan."
        },
        imageUrl: "/img/thumbnail/1_2-thumbnail.webp"
      },
      {
        id: "1-3",
        slug: "3-alat-ukur-klimatologi",
        title: "Alat-Alat Ukur Klimatologi",
        summary: "Mengenal berbagai alat ukur yang digunakan BMKG: Campbell Stokes, panci penguapan, higrometer, termometer, anemometer, dan ombrometer.",
        sections: [
          {
            title: "Campbell Stokes",
            content: "Alat untuk mengukur lama penyinaran matahari dalam jam. Berbentuk bola kaca yang memfokuskan sinar matahari ke pita rekam. Bekas bakar pada pita menunjukkan durasi matahari bersinar.",
            imageUrl: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=600&q=80"
          },
          {
            title: "Panci Penguapan (Evaporimeter)",
            content: "Wadah berisi air untuk mengukur tingkat penguapan dalam mm/hari. Selisih tinggi air dari hari ke hari menunjukkan seberapa banyak air yang menguap."
          },
          {
            title: "Higrometer",
            content: "Alat pengukur kelembapan udara relatif dalam persen (%). Ada yang manual (psikrometer) dan digital. Kelembapan normal sekitar 60-80%."
          },
          {
            title: "Termometer",
            content: "Alat pengukur suhu udara dalam Celcius (°C). Termometer maksimum-minimum mencatat suhu tertinggi dan terendah dalam sehari."
          },
          {
            title: "Anemometer",
            content: "Alat pengukur kecepatan angin dalam knots atau km/jam. Ada juga wind vane (penunjuk arah angin) untuk mengetahui dari mana angin berhembus."
          },
          {
            title: "Ombrometer (Rain Gauge)",
            content: "Alat pengukur curah hujan dalam milimeter (mm). Satu mm hujan artinya satu liter air per meter persegi. BMKG mengukur curah hujan setiap hari pukul 07.00 WIB."
          }
        ],
        quiz: {
          id: "q1-3",
          type: "matching",
          question: "Pasangkan alat dengan fungsinya! Ombrometer digunakan untuk mengukur:",
          options: ["Curah Hujan", "Kecepatan Angin", "Suhu Udara", "Lama Penyinaran"],
          correctAnswer: "Curah Hujan",
          explanation: "Ombrometer (rain gauge) adalah alat untuk mengukur curah hujan dalam mm. Anemometer untuk angin, termometer untuk suhu, dan Campbell Stokes untuk lama penyinaran matahari."
        },
        imageUrl: "/img/thumbnail/1_3-thumbnail.webp"
      }
    ]
  },
  {
    id: 2,
    title: "Pemahaman Informasi Iklim BMKG",
    description: "Pelajari cara membaca dan memahami informasi iklim yang dikeluarkan BMKG: dasarian, sifat hujan, dan zona musim.",
    icon: "bar-chart-2",
    color: "secondary",
    imageUrl: "/img/thumbnail/2_wide.webp",
    submodules: [
      {
        id: "2-1",
        slug: "1-dasarian",
        title: "Mengenal Dasarian",
        summary: "Memahami pembagian waktu Dasarian yang digunakan BMKG: periode 10 hari untuk analisis dan prakiraan iklim.",
        sections: [
          {
            title: "Apa itu Dasarian?",
            content: "Dasarian adalah periode waktu 10 hari yang digunakan BMKG untuk menganalisis dan menyajikan informasi iklim. Ini lebih detail dari bulanan tapi lebih praktis dari harian.",
            imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80"
          },
          {
            title: "Pembagian Dasarian dalam Sebulan",
            content: "Satu bulan dibagi menjadi 3 dasarian:\n• Dasarian I: tanggal 1-10\n• Dasarian II: tanggal 11-20\n• Dasarian III: tanggal 21 sampai akhir bulan\n\nJadi dalam setahun ada 36 dasarian (12 bulan × 3 dasarian)."
          },
          {
            title: "Mengapa Menggunakan Dasarian?",
            content: "Dasarian cocok untuk pertanian karena:\n• Cukup pendek untuk perencanaan aktivitas seperti tanam, pupuk, panen\n• Cukup panjang untuk melihat pola curah hujan\n• Memudahkan perbandingan dengan rata-rata (normal)"
          }
        ],
        quiz: {
          id: "q2-1",
          type: "multiple-choice",
          question: "Jika hari ini tanggal 15 Juli, termasuk Dasarian ke berapa?",
          options: ["Dasarian I", "Dasarian II", "Dasarian III"],
          correctAnswer: "Dasarian II",
          explanation: "Tanggal 15 berada di rentang 11-20, sehingga termasuk Dasarian II. Dasarian I (1-10), Dasarian II (11-20), Dasarian III (21-akhir bulan)."
        },
        imageUrl: "/img/thumbnail/2_1-thumbnail.webp"
      },
      {
        id: "2-2",
        slug: "2-sifat-hujan",
        title: "Membaca Sifat Hujan (AN, N, BN)",
        summary: "Memahami klasifikasi sifat hujan: Atas Normal (AN), Normal (N), dan Bawah Normal (BN) berdasarkan perbandingan dengan rata-rata 30 tahun.",
        sections: [
          {
            title: "Apa itu Normal?",
            content: "Normal adalah rata-rata curah hujan selama 30 tahun di suatu wilayah. BMKG menggunakan data 1991-2020 sebagai referensi. Normal berbeda-beda setiap wilayah dan setiap bulan.",
            imageUrl: "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=600&q=80"
          },
          {
            title: "Cara Menghitung Persentase",
            content: "Persentase = (Curah Hujan Aktual ÷ Normal) × 100%\n\nContoh: Jika curah hujan bulan ini 150 mm dan normalnya 100 mm, maka persentase = 150 ÷ 100 × 100% = 150%"
          },
          {
            title: "Klasifikasi Sifat Hujan",
            content: "Berdasarkan persentase terhadap normal:\n\n🔵 Atas Normal (AN): >115% dari normal\nHujan lebih banyak dari biasanya. Waspadai banjir!\n\n🟢 Normal (N): 85% - 115% dari normal\nHujan sesuai dengan rata-rata biasa.\n\n🟡 Bawah Normal (BN): <85% dari normal\nHujan lebih sedikit dari biasanya. Waspadai kekeringan!"
          },
          {
            title: "Contoh Perhitungan",
            content: "Misalkan curah hujan Bantul Dasarian II Juli = 25 mm, normalnya = 20 mm.\n\nPersentase = 25 ÷ 20 × 100% = 125%\n\nKarena 125% > 115%, maka sifat hujan = Atas Normal (AN)"
          }
        ],
        quiz: {
          id: "q2-2",
          type: "input-number",
          question: "Curah hujan aktual 80 mm, normal 100 mm. Berapa persennya dan apa sifat hujannya?",
          options: ["80% - Bawah Normal (BN)", "80% - Normal (N)", "120% - Atas Normal (AN)"],
          correctAnswer: "80% - Bawah Normal (BN)",
          explanation: "Perhitungan: 80 ÷ 100 × 100% = 80%. Karena 80% < 85%, maka sifat hujan adalah Bawah Normal (BN). Perlu waspada potensi kekeringan."
        },
        imageUrl: "/img/thumbnail/2_2-thumbnail.webp"
      },
      {
        id: "2-3",
        slug: "3-zona-musim",
        title: "Memahami Zona Musim (ZOM)",
        summary: "Mengenal konsep Zona Musim (ZOM): wilayah dengan pola musim hujan dan kemarau yang jelas, yang tidak selalu sama dengan batas administrasi.",
        sections: [
          {
            title: "Definisi Zona Musim",
            content: "Zona Musim (ZOM) adalah wilayah yang memiliki perbedaan curah hujan yang jelas antara musim hujan dan musim kemarau. Indonesia dibagi menjadi 342 ZOM berdasarkan pola curah hujan.",
            imageUrl: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&q=80"
          },
          {
            title: "Batas ZOM ≠ Batas Administrasi",
            content: "Penting! Batas ZOM tidak selalu sama dengan batas kabupaten/kecamatan. Satu kabupaten bisa terdiri dari beberapa ZOM, atau sebaliknya satu ZOM bisa meliputi beberapa kabupaten."
          },
          {
            title: "ZOM di DI Yogyakarta",
            content: "DI Yogyakarta memiliki beberapa ZOM dengan karakteristik berbeda:\n• Wilayah selatan (Bantul, Kulon Progo) cenderung memiliki musim hujan lebih panjang\n• Wilayah utara (Sleman) dipengaruhi lereng Merapi\n• Kota Yogyakarta sebagai wilayah urban memiliki pola sendiri"
          },
          {
            title: "Prakiraan Musim",
            content: "BMKG mengeluarkan prakiraan awal musim hujan dan kemarau berdasarkan ZOM. Petani dapat menggunakan informasi ini untuk merencanakan waktu tanam yang tepat."
          }
        ],
        quiz: {
          id: "q2-3",
          type: "multiple-choice",
          question: "Pernyataan yang BENAR tentang Zona Musim (ZOM) adalah:",
          options: [
            "Batas ZOM selalu sama dengan batas kabupaten",
            "Satu kabupaten bisa memiliki lebih dari satu ZOM",
            "Seluruh Indonesia memiliki pola musim yang sama",
            "ZOM hanya berlaku untuk Pulau Jawa"
          ],
          correctAnswer: "Satu kabupaten bisa memiliki lebih dari satu ZOM",
          explanation: "Batas ZOM berdasarkan pola curah hujan, bukan batas administrasi. Sehingga satu kabupaten bisa memiliki beberapa ZOM dengan awal musim yang berbeda."
        },
        imageUrl: "/img/thumbnail/2_3-thumbnail.webp"
      }
    ]
  },
  {
    id: 3,
    title: "Manfaat Informasi Iklim bagi Petani",
    description: "Aplikasi praktis informasi iklim untuk pertanian: jadwal tanam, mitigasi bencana, dan cara mengakses informasi BMKG.",
    icon: "sprout",
    color: "accent",
    imageUrl: "/img/thumbnail/3_wide.webp",
    submodules: [
      {
        id: "3-1",
        slug: "1-jadwal-pola-tanam",
        title: "Menentukan Jadwal & Pola Tanam",
        summary: "Menggunakan informasi iklim untuk memilih waktu tanam yang tepat, varietas tanaman, dan pola tanam seperti Padi-Padi-Palawija.",
        sections: [
          {
            title: "Pentingnya Jadwal Tanam",
            content: "Menentukan jadwal tanam yang tepat sangat penting karena:\n• Kebutuhan air tanaman harus sesuai dengan ketersediaan hujan\n• Menghindari kekeringan saat fase kritis (berbunga)\n• Panen tidak bertepatan dengan hujan lebat",
            imageUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80"
          },
          {
            title: "Pola Tanam",
            content: "Pola tanam adalah rotasi jenis tanaman dalam setahun. Contoh pola umum:\n\n🌾 Padi - Padi - Palawija\nMusim Hujan 1 (Nov-Feb): Padi\nMusim Hujan 2 (Mar-Jun): Padi\nMusim Kemarau (Jul-Okt): Palawija (jagung/kedelai)\n\n🌽 Padi - Palawija - Palawija\nUntuk wilayah dengan air terbatas"
          },
          {
            title: "KATAM (Kalender Tanam Terpadu)",
            content: "KATAM adalah sistem rekomendasi dari Kementerian Pertanian yang memadukan:\n• Prakiraan iklim BMKG\n• Data ketersediaan air\n• Rekomendasi varietas\n\nPetani bisa mengakses KATAM untuk mengetahui waktu tanam optimal di wilayahnya."
          },
          {
            title: "Memilih Varietas Sesuai Prakiraan",
            content: "Prakiraan iklim membantu memilih varietas:\n• Prakiraan BN (kering): pilih varietas tahan kering seperti Inpari 30\n• Prakiraan AN (basah): pilih varietas tahan wereng, siapkan drainase\n• Prakiraan Normal: varietas standar sesuai preferensi"
          }
        ],
        quiz: {
          id: "q3-1",
          type: "multiple-choice",
          question: "Jika prakiraan iklim menunjukkan Bawah Normal (BN/kering), sebaiknya petani:",
          options: [
            "Tetap menanam padi varietas biasa",
            "Menanam padi varietas tahan kering atau palawija",
            "Menunggu sampai ada hujan",
            "Menanam padi sebanyak-banyaknya"
          ],
          correctAnswer: "Menanam padi varietas tahan kering atau palawija",
          explanation: "Saat prakiraan BN (kering), disarankan memilih varietas tahan kering atau beralih ke palawija (jagung/kedelai) yang kebutuhan airnya lebih sedikit, untuk meminimalkan risiko gagal panen."
        },
        imageUrl: "/img/thumbnail/3_1-thumbnail.webp"
      },
      {
        id: "3-2",
        slug: "2-mitigasi-banjir-kekeringan-hama",
        title: "Mitigasi Banjir, Kekeringan, & Hama",
        summary: "Memahami dampak El Nino, La Nina, dan perubahan iklim terhadap pertanian, serta langkah mitigasi yang dapat dilakukan.",
        sections: [
          {
            title: "El Nino dan Kekeringan",
            content: "El Nino adalah fenomena naiknya suhu permukaan laut Pasifik yang menyebabkan:\n• Musim kemarau lebih panjang\n• Curah hujan berkurang drastis\n• Risiko kekeringan dan kebakaran lahan\n\nMitigasi: siapkan irigasi cadangan, tanam varietas tahan kering, tunda tanam jika perlu.",
            imageUrl: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80"
          },
          {
            title: "La Nina dan Banjir",
            content: "La Nina adalah kebalikan El Nino, menyebabkan:\n• Musim hujan lebih panjang dan intens\n• Curah hujan di atas normal\n• Risiko banjir dan tanah longsor\n\nMitigasi: perbaiki drainase, siapkan pompa air, pilih varietas tahan genangan."
          },
          {
            title: "Hama dan Penyakit",
            content: "Kondisi iklim mempengaruhi perkembangan hama:\n\n🐛 Wereng Batang Coklat (WBC)\nBerkembang pesat saat kelembapan tinggi dan tanaman rapat.\n\n🐀 Tikus\nMeningkat saat kemarau panjang karena habitat menyempit.\n\n🍄 Penyakit Blast\nJamur yang menyerang saat kelembapan tinggi dan suhu dingin di malam hari."
          },
          {
            title: "Langkah Mitigasi Terpadu",
            content: "1. Pantau informasi prakiraan iklim BMKG\n2. Ikuti rekomendasi KATAM\n3. Gotong royong bersihkan saluran air sebelum musim hujan\n4. Siapkan pestisida nabati untuk antisipasi hama\n5. Asuransikan tanaman (AUTP)"
          }
        ],
        quiz: {
          id: "q3-2",
          type: "matching",
          question: "El Nino biasanya menyebabkan:",
          options: ["Kekeringan", "Banjir", "Hujan Es", "Angin Topan"],
          correctAnswer: "Kekeringan",
          explanation: "El Nino menyebabkan musim kemarau lebih panjang dan curah hujan berkurang, sehingga meningkatkan risiko kekeringan. Sebaliknya, La Nina menyebabkan hujan berlebih dan risiko banjir."
        },
        imageUrl: "/img/thumbnail/3_2-thumbnail.webp"
      },
      {
        id: "3-3",
        slug: "3-akses-info-bmkg",
        title: "Cara Mengakses Info BMKG",
        summary: "Panduan praktis mengakses informasi cuaca dan iklim BMKG melalui aplikasi, website, media sosial, dan SMS blast.",
        sections: [
          {
            title: "Aplikasi InfoBMKG",
            content: "Aplikasi resmi BMKG tersedia di Play Store dan App Store. Fitur:\n• Prakiraan cuaca harian dan mingguan\n• Peringatan dini cuaca ekstrem\n• Informasi gempa dan tsunami\n• Kualitas udara\n\nUnduh gratis di smartphone Anda!",
            imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
          },
          {
            title: "Website BMKG",
            content: "Kunjungi www.bmkg.go.id untuk informasi lengkap:\n• Prakiraan iklim bulanan dan musiman\n• Peta curah hujan\n• Analisis dan prakiraan dasarian\n• Data historis cuaca"
          },
          {
            title: "Media Sosial",
            content: "Ikuti akun resmi BMKG untuk update terkini:\n\n📘 Facebook: BMKG\n🐦 Twitter/X: @infoBMKG\n📷 Instagram: @infobmkg\n\nUntuk DIY: @staklim_jogja (Instagram Stasiun Klimatologi Yogyakarta)"
          },
          {
            title: "SMS Blast dan Grup WhatsApp",
            content: "Stasiun Klimatologi DIY menyediakan:\n• SMS Blast peringatan dini\n• Grup WhatsApp penyuluh pertanian\n• Koordinasi dengan Dinas Pertanian\n\nHubungi Staklim Yogyakarta untuk bergabung."
          }
        ],
        quiz: {
          id: "q3-3",
          type: "multiple-choice",
          question: "Untuk mendapatkan peringatan dini cuaca ekstrem, cara paling cepat adalah:",
          options: [
            "Menonton TV setiap jam",
            "Mengaktifkan notifikasi aplikasi InfoBMKG",
            "Membaca koran pagi",
            "Bertanya ke tetangga"
          ],
          correctAnswer: "Mengaktifkan notifikasi aplikasi InfoBMKG",
          explanation: "Aplikasi InfoBMKG memberikan notifikasi real-time saat ada peringatan dini cuaca ekstrem. Ini lebih cepat dari media lain karena langsung push notification ke smartphone."
        },
        imageUrl: "/img/thumbnail/3_3-thumbnail.webp"
      }
    ]
  }
];

export const getModuleById = (id: number): Module | undefined => {
  return modulesData.find(m => m.id === id);
};

export const getSubmoduleBySlug = (moduleId: number, slug: string): Submodule | undefined => {
  const module = getModuleById(moduleId);
  return module?.submodules.find(s => s.slug === slug);
};

export const getAdjacentSubmodules = (moduleId: number, currentSlug: string) => {
  const module = getModuleById(moduleId);
  if (!module) return { prev: null, next: null };

  const currentIndex = module.submodules.findIndex(s => s.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? module.submodules[currentIndex - 1] : null,
    next: currentIndex < module.submodules.length - 1 ? module.submodules[currentIndex + 1] : null
  };
};
