document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // DATA USER (DATABASE SEDERHANA)
    // ==========================================
    // Anda bisa menambahkan user baru di sini dengan mudah.
    // Format: { username: 'nama_user', password: 'kata_sandi' }
    const users = [
        { username: "tkj", password: "musake" },
        { username: "siswa", password: "123" },
        { username: "guru", password: "admin" },
        { username: "thomas", password: "210907"}
    ];

    // Mengambil elemen dari HTML
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // ==========================================
    // LOGIKA VALIDASI LOGIN
    // ==========================================
    loginForm.addEventListener('submit', function(event) {
        // Mencegah halaman refresh saat tombol login ditekan
        event.preventDefault();

        // Ambil nilai dari input dan hilangkan spasi kosong di awal/akhir (trim)
        const inputUsername = usernameInput.value.trim();
        const inputPassword = passwordInput.value.trim();

        // Cari apakah ada user di dalam array 'users' yang cocok
        // Cara kerja: method .find() akan mengembalikan objek user jika ditemukan,
        // atau 'undefined' jika tidak ditemukan.
        const userFound = users.find(user => {
            return user.username === inputUsername && user.password === inputPassword;
        });

        // Kondisi Login
        if (userFound) {
            // JIKA LOGIN BERHASIL
            loginForm.style.display = 'none'; // Sembunyikan form
            errorMessage.classList.remove('visible'); // Sembunyikan pesan error
            successMessage.classList.add('visible'); // Tampilkan pesan sukses
        } else {
            // JIKA LOGIN GAGAL
            // Tampilkan pesan error
            errorMessage.classList.add('visible');
            
            // Reset kolom password untuk keamanan
            passwordInput.value = '';
            passwordInput.focus();
        }
    });

    /* 
    =======================================================
    PANDUAN MENAMBAH USER BARU (BAGAIMANA CARA KERJANYA)
    =======================================================
    
    1. Buka file script.js ini.
    2. Cari variabel const users = [...].
    3. Tambahkan kurung kurawal baru {} di dalam array.
    
    Contoh penambahan:
    Jika ingin menambah user dengan username "budi" dan password "rahasia",
    tambahkan kode ini di dalam array users:

    { username: "budi", password: "rahasia" }

    Sehingga menjadi:
    const users = [
        { username: "tkj", password: "musake" },
        { username: "siswa", password: "123" },
        { username: "budi", password: "rahasia" }  <-- User Baru
    ];

    4. Simpan file (Ctrl+S), lalu refresh browser.
       Sekarang Anda bisa login menggunakan username "budi" dan password "rahasia".
    */
});
