const colorButton = document.getElementById('colorButton'); // Mengambil elemen tombol pertama
const moveButton = document.getElementById('moveButton'); // Mengambil elemen tombol kedua
const navbarToggle = document.getElementById('navbar-toggle'); // Mengambil elemen hamburger
const navbarMenu = document.getElementById('navbar-menu'); // Mengambil elemen menu navbar
const navbar = document.querySelector('.navbar'); // Mengambil elemen navbar

// Mengubah warna tombol ketika diklik
colorButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Membuat warna acak
    colorButton.style.backgroundColor = randomColor; // Mengatur warna latar belakang tombol
});

// Menggerakkan tombol kedua menjauh dari mouse
moveButton.addEventListener('mousemove', (event) => {
    const buttonRect = moveButton.getBoundingClientRect(); // Mengambil posisi tombol
    const mouseX = event.clientX; // Mendapatkan posisi X mouse
    const mouseY = event.clientY; // Mendapatkan posisi Y mouse

    // Hitung jarak antara mouse dan tombol
    const buttonCenterX = buttonRect.left + buttonRect.width / 2; // Titik tengah tombol
    const buttonCenterY = buttonRect.top + buttonRect.height / 2; // Titik tengah tombol

    const dx = buttonCenterX - mouseX; // Selisih posisi X
    const dy = buttonCenterY - mouseY; // Selisih posisi Y

    // Jika mouse mendekati tombol, gerakkan tombol menjauh
    const distance = Math.sqrt(dx * dx + dy * dy); // Menghitung jarak
    if (distance < 100) { // Jika jarak kurang dari 100 piksel
        const moveX = (dx / distance) * 50; // Menghitung gerakan ke arah mouse
        const moveY = (dy / distance) * 50; // Menghitung gerakan ke arah mouse

        moveButton.style.transform = `translate(${moveX}px, ${moveY}px)`; // Menggerakkan tombol
    }
});

// Toggle navbar menu on hamburger click
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active'); // Menambah atau menghapus class 'active'
});