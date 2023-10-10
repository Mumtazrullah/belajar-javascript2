//judul
console.log("If Statement Menggunakan Gerbang Logika")

// Inisialisasi beberapa variabel
let nilai = 95;
let lulusUjian = true;
let memilikiIjazah = true;
let pengalamanKerja = 3;
let bahasaIndonesiaBaik = true;
let memilikiSertifikat = false;

// Contoh penggunaan if statement dengan gerbang logika
if (lulusUjian && memilikiIjazah) {
  console.log("Selamat! Anda lulus ujian dan memiliki ijazah.");
  
  if (nilai >= 80 || (nilai >= 70 && pengalamanKerja >= 2)) {
    console.log("Anda memenuhi syarat untuk posisi tertentu.");

    if (bahasaIndonesiaBaik) {
      console.log("Anda juga memiliki kemampuan bahasa Indonesia yang baik.");
      
      if (memilikiSertifikat) {
        console.log("Anda memiliki sertifikat tambahan.");
        console.log("Anda sangat memenuhi syarat untuk posisi tertentu.");
      } else {
        console.log("Anda tidak memiliki sertifikat tambahan.");
      }
    } else {
      console.log("Anda perlu meningkatkan kemampuan bahasa Indonesia Anda.");
    }
  } else {
    console.log("Anda tidak memenuhi syarat untuk posisi tertentu.");
  }
} else if (!lulusUjian) {
  console.log("Maaf, Anda tidak lulus ujian.");
} else {
  console.log("Maaf, Anda belum memiliki ijazah.");
}

//judul
console.log("\nPerulangan For")

for (let x = 0; x < 7; x++) {
    console.log("Perulangan menggunakan for ke-" + (x + 1));
  }

//judul
console.log("\nPerulangan While")

let y = 0;

while (y < 6) {
  console.log("Perulangan menggunakan while ke-" + (y + 1));
  y++;
}

//judul
console.log("\nPerulangan Continue dan Break")

for (let z = 1; z <= 5; z++) {
    if (z === 3) {
      continue; // Melanjutkan ke iterasi berikutnya jika i sama dengan 3
    }
    
    console.log("Perulangan Menggunakan Continue dan Break ke-" + z);
  
    if (z === 4) {
      break; // Menghentikan perulangan jika i sama dengan 4
    }
  }
  