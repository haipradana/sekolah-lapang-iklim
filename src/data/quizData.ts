// Quiz data for all submodules
// Organized by module and submodule

export interface QuizQuestion {
    id: string;
    question: string;
    imageUrl?: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export interface MultiQuiz {
    id: string;
    questions: QuizQuestion[];
}

// ===========================================
// MODUL 1: Mengenal Cuaca dan Iklim
// ===========================================

export const quiz1_1: MultiQuiz = {
    id: "quiz-1-1",
    questions: [
        {
            id: "q1-1-1",
            question: "Pernyataan berikut termasuk cuaca atau iklim? \"Suhu udara di Sleman hari ini mencapai 36°C\"",
            options: ["Cuaca", "Iklim", "Keduanya", "Bukan keduanya"],
            correctAnswer: "Cuaca",
            explanation: "Karena ini menggambarkan kondisi spesifik 'hari ini' di satu tempat tertentu, maka termasuk CUACA. Cuaca bersifat jangka pendek (jam hingga hari)."
        },
        {
            id: "q1-1-2",
            question: "\"Yogyakarta beriklim tropis dengan musim hujan November-April\" termasuk pernyataan tentang?",
            options: ["Cuaca", "Iklim", "Prakiraan cuaca", "Kondisi harian"],
            correctAnswer: "Iklim",
            explanation: "Ini adalah pernyataan IKLIM karena menggambarkan pola rata-rata jangka panjang suatu wilayah, bukan kondisi sesaat."
        },
        {
            id: "q1-1-3",
            question: "Cuaca berlaku dalam jangka waktu berapa?",
            options: ["Jam hingga hari", "Minggu hingga bulan", "Tahun hingga dekade", "10-30 tahun"],
            correctAnswer: "Jam hingga hari",
            explanation: "Cuaca adalah kondisi atmosfer jangka pendek, dalam hitungan jam hingga hari. Contoh: hujan pagi ini, cerah siang nanti."
        },
        {
            id: "q1-1-4",
            question: "Iklim dihitung berdasarkan rata-rata cuaca dalam jangka waktu?",
            options: ["Jam hingga hari", "Hari hingga minggu", "10 hari hingga 30 tahun", "100 tahun ke atas"],
            correctAnswer: "10 hari hingga 30 tahun",
            explanation: "Iklim adalah rata-rata kondisi cuaca dalam jangka waktu 10 hari hingga 30 tahun di suatu wilayah. BMKG menggunakan data 30 tahun (1991-2020) sebagai referensi normal iklim."
        }
    ]
};

export const quiz1_2: MultiQuiz = {
    id: "quiz-1-2",
    questions: [
        {
            id: "q1-2-1",
            question: "Manakah yang BUKAN termasuk unsur cuaca dan iklim?",
            options: ["Radiasi Matahari", "Kelembapan Udara", "Kesuburan Tanah", "Tekanan Udara"],
            correctAnswer: "Kesuburan Tanah",
            explanation: "Kesuburan tanah bukan unsur cuaca/iklim, melainkan faktor pertanian yang dipengaruhi oleh cuaca dan iklim. 8 unsur cuaca/iklim adalah: radiasi matahari, penguapan, kelembapan, suhu, tekanan, angin, awan, dan hujan."
        },
        {
            id: "q1-2-2",
            question: "Apa sumber energi utama yang menggerakkan semua proses di atmosfer?",
            options: ["Angin", "Hujan", "Radiasi Matahari", "Tekanan Udara"],
            correctAnswer: "Radiasi Matahari",
            explanation: "Radiasi Matahari adalah sumber energi utama atmosfer. Matahari memanaskan permukaan bumi, menyebabkan penguapan, dan menciptakan perbedaan suhu yang menggerakkan angin."
        },
        {
            id: "q1-2-3",
            question: "Kelembapan udara diukur menggunakan alat yang disebut?",
            options: ["Termometer", "Barometer", "Higrometer", "Anemometer"],
            correctAnswer: "Higrometer",
            explanation: "Higrometer adalah alat pengukur kelembapan udara dalam persen (%). Kelembapan normal sekitar 60-80%."
        },
        {
            id: "q1-2-4",
            question: "Angin bergerak dari daerah bertekanan tinggi ke daerah bertekanan?",
            options: ["Tinggi", "Rendah", "Sama", "Tidak tentu"],
            correctAnswer: "Rendah",
            explanation: "Angin adalah udara yang bergerak karena perbedaan tekanan. Udara selalu bergerak dari daerah bertekanan tinggi ke daerah bertekanan rendah."
        },
        {
            id: "q1-2-5",
            question: "Dalam siklus hidrometeorologi, setelah Radiasi Matahari terjadi proses apa?",
            options: ["Pembentukan Awan", "Hujan", "Penguapan", "Angin"],
            correctAnswer: "Penguapan",
            explanation: "Urutannya: Radiasi Matahari → Penguapan → Kelembapan → Awan → Hujan. Matahari memanaskan air di permukaan bumi sehingga terjadi penguapan."
        }
    ]
};

export const quiz1_3: MultiQuiz = {
    id: "quiz-1-3",
    questions: [
        {
            id: "q1-3-1",
            question: "Ombrometer (penakar hujan) digunakan untuk mengukur?",
            options: ["Curah Hujan", "Kecepatan Angin", "Suhu Udara", "Lama Penyinaran"],
            correctAnswer: "Curah Hujan",
            explanation: "Ombrometer (rain gauge) adalah alat untuk mengukur curah hujan dalam mm. Pengukuran standar dilakukan setiap pukul 07.00 WIB."
        },
        {
            id: "q1-3-2",
            question: "Alat berbentuk bola kaca yang memfokuskan sinar matahari untuk membakar pita rekam adalah?",
            options: ["Termometer", "Campbell Stokes", "Barograf", "Higrometer"],
            correctAnswer: "Campbell Stokes",
            explanation: "Campbell Stokes adalah alat pengukur lama penyinaran matahari (dalam jam). Bekas bakar pada pita menunjukkan durasi matahari bersinar."
        },
        {
            id: "q1-3-3",
            question: "Jika curah hujan tercatat 1 mm, berapa liter air yang jatuh per meter persegi?",
            options: ["0,1 liter", "1 liter", "10 liter", "100 liter"],
            correctAnswer: "1 liter",
            explanation: "1 mm curah hujan = 1 liter air per meter persegi. Ini adalah standar pengukuran curah hujan di seluruh dunia."
        },
        {
            id: "q1-3-4",
            question: "Lihat gambar berikut. Alat ini digunakan untuk mengukur apa?",
            imageUrl: "/img/1_3_alat-ukur/5_anemometer.webp",
            options: ["Curah Hujan", "Kecepatan Angin", "Suhu Tanah", "Tekanan Udara"],
            correctAnswer: "Kecepatan Angin",
            explanation: "Ini adalah Anemometer, alat pengukur kecepatan angin dalam km/jam atau knots. Mangkuk yang berputar menunjukkan seberapa kencang angin berhembus."
        }
    ]
};

// ===========================================
// MODUL 2: Pemahaman Informasi Iklim BMKG
// ===========================================

export const quiz2_1: MultiQuiz = {
    id: "quiz-2-1",
    questions: [
        {
            id: "q2-1-1",
            question: "Jika hari ini tanggal 15 Juli, termasuk Dasarian ke berapa?",
            options: ["Dasarian I", "Dasarian II", "Dasarian III"],
            correctAnswer: "Dasarian II",
            explanation: "Tanggal 15 berada di rentang 11-20, sehingga termasuk Dasarian II. Pembagian: Dasarian I (1-10), Dasarian II (11-20), Dasarian III (21-akhir bulan)."
        },
        {
            id: "q2-1-2",
            question: "Berapa jumlah dasarian dalam satu tahun? (Petunjuk: 12 bulan × 3 dasarian)",
            options: ["12", "24", "36", "48"],
            correctAnswer: "36",
            explanation: "Dalam setahun ada 36 dasarian. Perhitungan: 12 bulan × 3 dasarian per bulan = 36 dasarian."
        },
        {
            id: "q2-1-3",
            question: "Tanggal 25 Agustus termasuk Dasarian?",
            options: ["Dasarian I", "Dasarian II", "Dasarian III"],
            correctAnswer: "Dasarian III",
            explanation: "Tanggal 25 berada di rentang 21-akhir bulan, sehingga termasuk Dasarian III."
        },
        {
            id: "q2-1-4",
            question: "Dasarian III berlaku untuk tanggal berapa?",
            options: ["1 - 10", "11 - 20", "21 - akhir bulan", "1 - 15"],
            correctAnswer: "21 - akhir bulan",
            explanation: "Dasarian III mencakup tanggal 21 sampai akhir bulan. Untuk bulan Februari bisa 21-28/29, untuk bulan lain 21-30/31."
        }
    ]
};

export const quiz2_2: MultiQuiz = {
    id: "quiz-2-2",
    questions: [
        {
            id: "q2-2-1",
            question: "Curah hujan aktual 80 mm, normal 100 mm. Berapa persennya dan apa sifat hujannya?",
            options: ["80% - BN (Bawah Normal)", "80% - N (Normal)", "120% - AN (Atas Normal)", "100% - N (Normal)"],
            correctAnswer: "80% - BN (Bawah Normal)",
            explanation: "Perhitungan: 80 ÷ 100 × 100% = 80%. Karena 80% < 85%, maka sifat hujan adalah Bawah Normal (BN). Waspadai potensi kekeringan."
        },
        {
            id: "q2-2-2",
            question: "Jika curah hujan lebih dari 115% dari normal, sifat hujannya adalah?",
            options: ["BN (Bawah Normal)", "N (Normal)", "AN (Atas Normal)", "Ekstrem"],
            correctAnswer: "AN (Atas Normal)",
            explanation: "Atas Normal (AN) adalah ketika curah hujan >115% dari normal. Hujan lebih banyak dari biasanya, perlu waspada banjir."
        },
        {
            id: "q2-2-3",
            question: "Curah hujan aktual 120 mm, normal 100 mm. Berapa persennya?",
            options: ["80%", "100%", "120%", "150%"],
            correctAnswer: "120%",
            explanation: "Perhitungan: 120 ÷ 100 × 100% = 120%. Karena 120% > 115%, sifat hujan adalah Atas Normal (AN)."
        },
        {
            id: "q2-2-4",
            question: "Sifat hujan 'Normal' berkisar antara berapa persen dari rata-rata?",
            options: ["0% - 50%", "50% - 85%", "85% - 115%", ">115%"],
            correctAnswer: "85% - 115%",
            explanation: "Normal (N) adalah saat curah hujan antara 85% - 115% dari rata-rata. Di bawah 85% = BN, di atas 115% = AN."
        },
        {
            id: "q2-2-5",
            question: "BN (Bawah Normal) artinya hujan lebih... dari biasanya",
            options: ["Banyak", "Sedikit", "Sama", "Tidak tentu"],
            correctAnswer: "Sedikit",
            explanation: "Bawah Normal (BN) berarti curah hujan lebih sedikit dari rata-rata (<85%). Perlu waspada potensi kekeringan."
        }
    ]
};

export const quiz2_3: MultiQuiz = {
    id: "quiz-2-3",
    questions: [
        {
            id: "q2-3-1",
            question: "Pernyataan yang BENAR tentang Zona Musim (ZOM) adalah?",
            options: [
                "Batas ZOM selalu sama dengan batas kabupaten",
                "Satu kabupaten bisa memiliki lebih dari satu ZOM",
                "Seluruh Indonesia memiliki pola musim yang sama",
                "ZOM hanya berlaku untuk Pulau Jawa"
            ],
            correctAnswer: "Satu kabupaten bisa memiliki lebih dari satu ZOM",
            explanation: "Batas ZOM berdasarkan pola curah hujan, bukan batas administrasi. Sehingga satu kabupaten bisa memiliki beberapa ZOM dengan awal musim yang berbeda."
        },
        {
            id: "q2-3-2",
            question: "Pak Tani di Bantul timur (ZOM 141) dan Bu Tani di Bantul barat (ZOM 140) bertetangga kecamatan. Apakah prakiraan awal musim hujan mereka sama?",
            options: [
                "Ya, pasti sama karena satu kabupaten",
                "Tidak, bisa berbeda 1-2 dasarian",
                "Tergantung cuaca hari itu",
                "Selalu sama setiap tahun"
            ],
            correctAnswer: "Tidak, bisa berbeda 1-2 dasarian",
            explanation: "Meski bertetangga dan satu kabupaten, ZOM berbeda berarti awal musim hujan bisa berbeda 1-2 dasarian. Itulah pentingnya mengetahui ZOM lahan masing-masing."
        },
        {
            id: "q2-3-3",
            question: "Apakah batas Zona Musim selalu sama dengan batas administrasi (kabupaten/kecamatan)?",
            options: ["Ya, selalu sama", "Tidak selalu sama", "Tergantung provinsi", "Hanya di Jawa"],
            correctAnswer: "Tidak selalu sama",
            explanation: "Batas ZOM ditentukan berdasarkan pola curah hujan, bukan batas administrasi. Satu ZOM bisa meliputi beberapa kabupaten, atau sebaliknya."
        },
        {
            id: "q2-3-4",
            question: "Zona Musim (ZOM) berguna untuk prakiraan apa?",
            options: [
                "Harga gabah",
                "Awal musim hujan dan kemarau",
                "Jumlah penduduk",
                "Luas lahan pertanian"
            ],
            correctAnswer: "Awal musim hujan dan kemarau",
            explanation: "ZOM digunakan BMKG untuk prakiraan awal musim hujan dan kemarau. Petani dapat menggunakan informasi ini untuk merencanakan waktu tanam yang tepat."
        }
    ]
};

export const quiz2_4: MultiQuiz = {
    id: "quiz-2-4",
    questions: [
        {
            id: "q2-4-1",
            question: "CH adalah singkatan dari apa?",
            options: ["Curah Hujan", "Ciri Hujan", "Cara Hujan", "Cuaca Harian"],
            correctAnswer: "Curah Hujan",
            explanation: "CH adalah singkatan dari Curah Hujan, yaitu jumlah air hujan yang jatuh dalam satuan milimeter (mm)."
        },
        {
            id: "q2-4-2",
            question: "SH adalah singkatan dari apa?",
            options: ["Sifat Hujan", "Suhu Harian", "Sistem Hujan", "Siklus Hidrologi"],
            correctAnswer: "Sifat Hujan",
            explanation: "SH adalah singkatan dari Sifat Hujan, yaitu perbandingan curah hujan dengan rata-rata normal 30 tahun dalam persen (%)."
        },
        {
            id: "q2-4-3",
            question: "Perhatikan peta CH berikut. Jika daerah Anda berwarna KUNING (101-150 mm), apa kategori curah hujannya?",
            imageUrl: "/img/2_4_peta-bmkg/ch-april-2026.jpg",
            options: ["Rendah", "Menengah", "Tinggi", "Sangat Tinggi"],
            correctAnswer: "Menengah",
            explanation: "Warna kuning pada peta CH menunjukkan curah hujan 101-150 mm yang termasuk kategori MENENGAH. Cukup untuk kebutuhan pertanian."
        },
        {
            id: "q2-4-4",
            question: "Jika peta SH menunjukkan Bawah Normal (BN < 85%), apa risikonya bagi pertanian?",
            options: ["Banjir", "Kekeringan", "Hujan lebat", "Tidak ada risiko"],
            correctAnswer: "Kekeringan",
            explanation: "Sifat Hujan Bawah Normal artinya hujan lebih sedikit dari biasanya, sehingga meningkatkan risiko KEKERINGAN. Petani perlu menyiapkan irigasi tambahan."
        },
        {
            id: "q2-4-5",
            question: "Jika peta CH menunjukkan warna HIJAU TUA (> 500 mm), langkah apa yang perlu disiapkan?",
            options: ["Siapkan irigasi tambahan", "Perbaiki drainase dan waspadai banjir", "Tanam varietas tahan kering", "Tidak perlu antisipasi"],
            correctAnswer: "Perbaiki drainase dan waspadai banjir",
            explanation: "CH > 500 mm termasuk SANGAT TINGGI dengan risiko banjir. Petani perlu memastikan saluran drainase bersih dan lancar untuk mengalirkan air berlebih."
        }
    ]
};

// ===========================================
// MODUL 3: Manfaat Informasi Iklim bagi Petani
// ===========================================

export const quiz3_1: MultiQuiz = {
    id: "quiz-3-1",
    questions: [
        {
            id: "q3-1-1",
            question: "Jika prakiraan iklim menunjukkan BN (Bawah Normal/kering), sebaiknya petani?",
            options: [
                "Tetap menanam padi varietas biasa",
                "Menanam padi varietas tahan kering atau palawija",
                "Menunggu sampai ada hujan",
                "Menanam padi sebanyak-banyaknya"
            ],
            correctAnswer: "Menanam padi varietas tahan kering atau palawija",
            explanation: "Saat prakiraan BN (Bawah Normal/kering), disarankan memilih varietas tahan kering seperti Inpari 30, atau beralih ke palawija (jagung/kedelai) yang kebutuhan airnya lebih sedikit."
        },
        {
            id: "q3-1-2",
            question: "Pola tanam yang paling umum di Indonesia adalah?",
            options: ["Padi - Padi - Padi", "Padi - Padi - Palawija", "Padi - Palawija - Bero", "Palawija - Palawija - Bero"],
            correctAnswer: "Padi - Padi - Palawija",
            explanation: "Pola Padi-Padi-Palawija adalah yang paling umum: padi di musim hujan 1 dan 2, lalu palawija (jagung/kedelai) di musim kemarau saat air terbatas."
        },
        {
            id: "q3-1-3",
            question: "Musim tanam utama (Rendeng) berlangsung pada bulan apa?",
            options: ["Januari - April", "April - Juli", "November - Maret", "Agustus - Oktober"],
            correctAnswer: "November - Maret",
            explanation: "Musim tanam utama (Rendeng) dilaksanakan November-Maret saat puncak musim hujan. Ini adalah waktu tanam terbaik karena ketersediaan air melimpah."
        },
        {
            id: "q3-1-4",
            question: "KATAM adalah singkatan dari?",
            options: [
                "Kalender Tanam Terpadu",
                "Katalog Tanaman Pertanian",
                "Kartu Tani Modern",
                "Kelompok Tani Mandiri"
            ],
            correctAnswer: "Kalender Tanam Terpadu",
            explanation: "KATAM (Kalender Tanam Terpadu) adalah sistem rekomendasi dari Kementerian Pertanian yang memadukan prakiraan iklim BMKG, data ketersediaan air, dan rekomendasi varietas."
        },
        {
            id: "q3-1-5",
            question: "Jika prakiraan menunjukkan AN (Atas Normal/hujan lebih banyak), petani perlu menyiapkan?",
            options: ["Irigasi tambahan", "Drainase yang baik", "Varietas tahan kering", "Pupuk ekstra"],
            correctAnswer: "Drainase yang baik",
            explanation: "Saat prakiraan AN (Atas Normal/hujan lebih banyak), risiko banjir meningkat. Petani perlu menyiapkan drainase yang baik dan memilih varietas tahan genangan."
        }
    ]
};

export const quiz3_2: MultiQuiz = {
    id: "quiz-3-2",
    questions: [
        {
            id: "q3-2-1",
            question: "El Niño biasanya menyebabkan kondisi apa di Indonesia?",
            options: ["Banjir", "Kekeringan", "Hujan Es", "Angin Topan"],
            correctAnswer: "Kekeringan",
            explanation: "El Niño menyebabkan musim kemarau lebih panjang dan curah hujan berkurang, sehingga meningkatkan risiko kekeringan di Indonesia."
        },
        {
            id: "q3-2-2",
            question: "La Niña menyebabkan kondisi apa di Indonesia?",
            options: ["Kekeringan", "Cuaca normal", "Hujan lebih banyak/banjir", "Suhu ekstrem"],
            correctAnswer: "Hujan lebih banyak/banjir",
            explanation: "La Niña adalah kebalikan El Niño, menyebabkan musim hujan lebih panjang dan intens, meningkatkan risiko banjir dan tanah longsor."
        },
        {
            id: "q3-2-3",
            question: "Hama Wereng Batang Coklat (WBC) berkembang pesat saat kondisi?",
            options: ["Kemarau panjang", "Kelembapan tinggi", "Suhu sangat dingin", "Angin kencang"],
            correctAnswer: "Kelembapan tinggi",
            explanation: "Wereng berkembang pesat saat kelembapan tinggi dan tanaman rapat. Saat musim hujan dengan kelembapan tinggi, perlu waspada serangan wereng."
        },
        {
            id: "q3-2-4",
            question: "Populasi tikus di sawah cenderung meningkat saat?",
            options: ["Musim hujan", "Kemarau panjang", "Saat panen", "Awal tanam"],
            correctAnswer: "Kemarau panjang",
            explanation: "Populasi tikus meningkat saat kemarau panjang karena habitat mereka (seperti tepi sungai) mengering, sehingga mereka mencari makan ke sawah."
        }
    ]
};

export const quiz3_3: MultiQuiz = {
    id: "quiz-3-3",
    questions: [
        {
            id: "q3-3-1",
            question: "Untuk mendapatkan peringatan dini cuaca ekstrem, cara paling cepat adalah?",
            options: [
                "Menonton TV setiap jam",
                "Mengaktifkan notifikasi aplikasi InfoBMKG",
                "Membaca koran pagi",
                "Bertanya ke tetangga"
            ],
            correctAnswer: "Mengaktifkan notifikasi aplikasi InfoBMKG",
            explanation: "Aplikasi InfoBMKG memberikan notifikasi real-time saat ada peringatan dini cuaca ekstrem. Ini lebih cepat dari media lain karena langsung push notification ke smartphone."
        }
    ]
};

// Export semua quiz sebagai map untuk akses mudah
export const quizData: Record<string, MultiQuiz> = {
    "1-1": quiz1_1,
    "1-2": quiz1_2,
    "1-3": quiz1_3,
    "2-1": quiz2_1,
    "2-2": quiz2_2,
    "2-3": quiz2_3,
    "2-4": quiz2_4,
    "3-1": quiz3_1,
    "3-2": quiz3_2,
    "3-3": quiz3_3,
};

// Helper function to get quiz by submodule id
export const getQuizBySubmoduleId = (submoduleId: string): MultiQuiz | undefined => {
    return quizData[submoduleId];
};
