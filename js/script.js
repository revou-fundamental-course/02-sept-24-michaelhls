function toggleNavbar() {
    const navbarContent = document.querySelector('.selection-content');
    navbarContent.classList.toggle('hidden');
}

function showContent(contentId, clickedButton) {
    // Hide all content divs
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.add('hidden');
    });

    // Show the selected content div
    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.remove('hidden');

    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.selection-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    clickedButton.classList.add('active');
}

function hitungLuasSegitiga() {
    event.preventDefault();
    // Mengambil nilai dari input
    var alas = parseFloat(document.getElementById('panjang-alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi-segitiga').value);
    
    // Validasi input
    if (isNaN(alas) || alas <= 0 || isNaN(tinggi) || tinggi <= 0) {
        alert('Silakan masukkan panjang alas dan tinggi segitiga yang valid.');
        return;
    }

    // Menghitung luas segitiga
    var luas = 0.5 * alas * tinggi;

    // Menampilkan hasil
    document.getElementById('result-luas').textContent = 'Hasil perhitungan: Luas segitiga adalah ' + luas.toFixed(2);
}
function hitungKelilingSegitiga() {
    event.preventDefault();
    // Mengambil nilai dari input
    var sisi = parseFloat(document.getElementById('panjang-sisi').value);
    
    // Validasi input
    if (isNaN(sisi) || sisi <= 0) {
        alert('Silakan masukkan panjang sisi segitiga yang valid.');
        return;
    }

    // Menghitung luas segitiga
    var keliling = 3 * sisi;

    // Menampilkan hasil
    document.getElementById('result-keliling').textContent = 'Hasil perhitungan: Luas segitiga adalah ' + keliling.toFixed(2);
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('hitung-luas-button').addEventListener('click', hitungLuasSegitiga);
    document.getElementById('hitung-keliling-button').addEventListener('click', hitungKelilingSegitiga);
    });

/*
function hitungLuasSegitiga(event) {
    event.preventDefault(); // Mencegah halaman refresh

    // Mengambil nilai dari input
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);
    
    // Validasi input
    if (isNaN(alas) || alas <= 0 || isNaN(tinggi) || tinggi <= 0) {
        alert('Silakan masukkan nilai alas dan tinggi yang valid.');
        return;
    }

    // Menghitung luas segitiga
    var luas = 0.5 * alas * tinggi;

    // Menampilkan hasil
    document.getElementById('result-luas').textContent = 'Hasil perhitungan: Luas segitiga adalah ' + luas.toFixed(2);
}

function hitungKelilingSegitiga(event) {
    event.preventDefault(); // Mencegah halaman refresh

    // Mengambil nilai dari input
    var sisi = parseFloat(document.getElementById('sisi').value);

    // Validasi input
    if (isNaN(sisi) || sisi <= 0) {
        alert('Silakan masukkan nilai sisi yang valid.');
        return;
    }

    // Menghitung keliling segitiga
    var keliling = 3 * sisi;

    // Menampilkan hasil
    document.getElementById('result-keliling').textContent = 'Hasil perhitungan: Keliling segitiga adalah ' + keliling.toFixed(2);
}

// Menambahkan event listener pada saat dokumen siap
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('hitung-luas-button').addEventListener('click', hitungLuasSegitiga);
    document.getElementById('hitung-keliling-button').addEventListener('click', hitungKelilingSegitiga);
    }
);
*/