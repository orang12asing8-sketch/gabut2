// Mock Data Awal untuk Simulasi SkillSwap SMK
const initialSkills = [
    {
        id: 1,
        name: "Ahmad Rizki",
        major: "RPL",
        skillOffered: "Pemrograman Dasar HTML & CSS",
        skillWanted: "Desain Poster / Banner (DKV)",
        whatsapp: "6281234567890"
    },
    {
        id: 2,
        name: "Siti Aminah",
        major: "DKV",
        skillOffered: "Desain Vektor & Ilustrasi CorelDraw",
        skillWanted: "Belajar Rumus Excel Dasar (AKL)",
        whatsapp: "6289876543210"
    },
    {
        id: 3,
        name: "Budi Santoso",
        major: "TKR",
        skillOffered: "Perawatan & Servis Ringan Mesin Motor",
        skillWanted: "Membuat Website Portofolio (RPL)",
        whatsapp: "6285678901234"
    }
];

// Masukkan ke LocalStorage jika belum ada
if (!localStorage.getItem("skills")) {
    localStorage.setItem("skills", JSON.stringify(initialSkills));
}
