// Pretest & Posttest data - 10 soal yang sama untuk mengukur pemahaman awal dan akhir

export interface TestQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export interface TestData {
    id: string;
    title: string;
    description: string;
    questions: TestQuestion[];
}

// 10 soal untuk pretest dan posttest
const testQuestions: TestQuestion[] = [
    {
        id: "pt-1",
        question: "Dalam pengukuran curah hujan, satuan curah hujan yang digunakan adalah...",
        options: [
            "Kilogram (kg)",
            "Hektar (ha)",
            "Milimeter (mm)"
        ],
        correctAnswer: "Milimeter (mm)",
        explanation: "Curah hujan diukur dalam satuan milimeter (mm). Satu mm curah hujan artinya satu liter air per meter persegi."
    },
    {
        id: "pt-2",
        question: "Iklim adalah.....",
        options: [
            "Keadaan atau fenomena fisik dari atmosfer pada suatu tempat dan pada waktu pendek (jam, harian hingga mingguan)",
            "Rata-rata unsur-unsur cuaca di suatu wilayah dalam jangka waktu yang panjang (dasarian, bulanan, tahunan)",
            "Wilayah yang memiliki rata-rata unsur-unsur cuaca yang sama"
        ],
        correctAnswer: "Rata-rata unsur-unsur cuaca di suatu wilayah dalam jangka waktu yang panjang (dasarian, bulanan, tahunan)",
        explanation: "Iklim adalah rata-rata kondisi cuaca dalam jangka panjang (10-30 tahun). Pilihan A adalah definisi cuaca."
    },
    {
        id: "pt-3",
        question: "Contoh kasus: Prakiraan awal musim kemarau 2025 sebagian wilayah Kapanewon Sentolo jatuh pada dasarian I Mei 2025, artinya...",
        options: [
            "Awal musim kemarau jatuh sekitar tanggal 11 - 20 Mei 2025",
            "Awal musim kemarau jatuh sekitar tanggal 1 - 10 Mei 2025",
            "Awal musim kemarau jatuh sekitar tanggal 21 - 30 Mei 2025"
        ],
        correctAnswer: "Awal musim kemarau jatuh sekitar tanggal 1 - 10 Mei 2025",
        explanation: "Dasarian I adalah periode tanggal 1-10 setiap bulannya. Jadi dasarian I Mei = tanggal 1-10 Mei."
    },
    {
        id: "pt-4",
        question: "Aplikasi dari BMKG yang dapat dimanfaatkan untuk bidang pertanian melalui media telepon genggam (android) adalah...",
        options: [
            "InfoBMKG",
            "BMKGinformasi",
            "WawasanBMKG"
        ],
        correctAnswer: "InfoBMKG",
        explanation: "InfoBMKG adalah aplikasi resmi BMKG yang tersedia di Play Store dan App Store untuk mendapatkan informasi cuaca dan iklim."
    },
    {
        id: "pt-5",
        question: "Unsur manakah yang BUKAN unsur utama cuaca?",
        options: [
            "Suhu udara",
            "Curah hujan",
            "Hama dan penyakit tanaman"
        ],
        correctAnswer: "Hama dan penyakit tanaman",
        explanation: "Hama dan penyakit tanaman bukan unsur cuaca, melainkan faktor pertanian yang dipengaruhi oleh cuaca. 8 unsur cuaca/iklim adalah: radiasi matahari, penguapan, kelembapan, suhu, tekanan, angin, awan, dan hujan."
    },
    {
        id: "pt-6",
        question: "Suatu daerah dikatakan telah memasuki musim hujan jika...",
        options: [
            "Terjadi hujan selama 5 hari berturut-turut",
            "Jika curah hujan dalam 1 dasarian (10 hari) lebih dari 50 mm dan diikuti 2 dasarian berikutnya",
            "Jika curah hujan dalam 1 minggu 50 mm"
        ],
        correctAnswer: "Jika curah hujan dalam 1 dasarian (10 hari) lebih dari 50 mm dan diikuti 2 dasarian berikutnya",
        explanation: "Kriteria awal musim hujan BMKG: curah hujan ≥50 mm dalam satu dasarian dan diikuti oleh curah hujan ≥50 mm pada dua dasarian berikutnya."
    },
    {
        id: "pt-7",
        question: "Sifat hujan di bawah normal berarti...",
        options: [
            "Curah hujan yang terjadi seperti kondisi normalnya",
            "Curah hujan yang terjadi lebih tinggi 115% dari normalnya",
            "Curah hujan yang terjadi lebih rendah 85% dari normalnya"
        ],
        correctAnswer: "Curah hujan yang terjadi lebih rendah 85% dari normalnya",
        explanation: "Bawah Normal (BN) adalah saat curah hujan <85% dari rata-rata normal. Normal 85-115%, Atas Normal >115%."
    },
    {
        id: "pt-8",
        question: "Berikut ini adalah alat untuk mengukur curah hujan secara manual, yaitu:",
        options: [
            "Ombrometer",
            "Termometer",
            "Anemometer"
        ],
        correctAnswer: "Ombrometer",
        explanation: "Ombrometer (rain gauge) adalah alat pengukur curah hujan. Termometer untuk suhu, anemometer untuk kecepatan angin."
    },
    {
        id: "pt-9",
        question: "Dampak dari fenomena La Nina yaitu....",
        options: [
            "Berkurangnya curah hujan",
            "Bertambahnya curah hujan",
            "Sering terjadi hujan badai"
        ],
        correctAnswer: "Bertambahnya curah hujan",
        explanation: "La Nina menyebabkan musim hujan lebih panjang dan intens, sehingga curah hujan bertambah dan risiko banjir meningkat."
    },
    {
        id: "pt-10",
        question: "Gelas ukur dalam penakar hujan berfungsi untuk...",
        options: [
            "Menentukan arah hujan",
            "Mengukur tinggi air hujan yang tertampung",
            "Mengukur kelembaban udara"
        ],
        correctAnswer: "Mengukur tinggi air hujan yang tertampung",
        explanation: "Gelas ukur pada ombrometer berfungsi untuk mengukur tinggi air hujan yang tertampung dalam satuan milimeter (mm)."
    }
];

export const pretestData: TestData = {
    id: "pretest",
    title: "Pre-Test",
    description: "Uji pemahaman awal Anda sebelum mempelajari materi. Jawab 10 soal berikut untuk mengukur pengetahuan Anda tentang cuaca, iklim, dan informasi BMKG.",
    questions: testQuestions
};

export const posttestData: TestData = {
    id: "posttest",
    title: "Post-Test",
    description: "Uji pemahaman akhir setelah mempelajari semua materi. Jawab 10 soal berikut untuk mengukur seberapa banyak pengetahuan Anda bertambah.",
    questions: testQuestions
};
