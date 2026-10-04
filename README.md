# TaskManage — RotiCanai

Frontend sistem pengurusan projek dan tugasan.

## Struktur fail

- `index.html` — struktur utama halaman dan pautan ke CSS serta JavaScript.
- `css/style.css` — gaya, warna, susun atur dan paparan responsif.
- `css/lecturer.css` — reka bentuk senarai tugasan pensyarah.
- `css/lecturer-details.css` — halaman butiran tugasan pensyarah dan borang penghantaran fail.
- `css/team.css` — reka bentuk dashboard tugasan kumpulan.
- `css/teams.css` — direktori pasukan dan kad pasukan responsif.
- `css/team-manage.css` — halaman pengurusan pasukan sendiri.
- `js/app.js` — data contoh, paparan halaman dan interaksi pengguna.
- `assets/campus.svg` — ilustrasi kampus untuk dashboard.
- `assets/planner.svg` — ilustrasi meja kerja baharu pada dashboard.
- `css/dashboard.css` — susun atur dashboard, kad statistik, senarai tugasan dan reka bentuk responsif.
- `css/member.css` — halaman ahli, carian, dan agihan peranan responsif.
- `scripts/preview.cjs` — pelayan pratonton tempatan tanpa pakej tambahan.

## Cara membuka

1. Buka folder projek ini dalam VS Code.
2. Buka `index.html` melalui pelayar, atau gunakan **Open with Live Server** jika sambungan Live Server sudah dipasang.
3. Edit gaya dalam `css/style.css` dan fungsi aplikasi dalam `js/app.js`.

Projek ini menggunakan HTML, CSS dan JavaScript biasa. Tiada langkah build diperlukan. HTML bagi paparan dinamik masih dijana melalui template JavaScript dalam `js/app.js`.

Jika Node.js tersedia, jalankan `node scripts/preview.cjs`, kemudian buka `http://127.0.0.1:4173`.

## Reka bentuk dan paparan responsif

Warna dan susun atur berdasarkan gambar rujukan: dashboard hijau dan halaman tugasan/ahli neutral dengan menu aktif beige. Maklumat empat kumpulan di bawah ialah sumber rasmi untuk nama, ahli, projek, deskripsi dan peranan. Apabila gambar baharu diberi sebagai rujukan antara muka, ikut reka bentuknya tetapi jangan salin atau reka maklumat ahli/projek sebagai fakta. Untuk maklumat yang tiada, tunjukkan `—` atau placeholder yang jelas.

### Data kumpulan rasmi

- **RotiCanai** — Task management system. Deskripsi: “A simple system to create, assign, track, and manage project task and deadlines”. Noramierul Shafiq bin Sohpian — System Analyst & Requirements Engineer; Hudson Oh Tze Yung — Project Manager & Planning Coordinator; Shahrul Nizam Bin Shahrin — Estimation & Quality Assurance Engineer.
- **Binary Brigade** — Clear Cache management system. Deskripsi: “To create a system that detects, organises and clears extra device caches that take up space within the device.” Jonas (leader) — Project Manager & Planning Coordinator; Harken — Estimation & Quality Assurance Engineer; Max — System Analyst & Requirements Engineer.
- **Nasi Lemak** — Library Management System. Deskripsi: “A simple system to manage books, borrowing, returning, and student records.” Chia Jia Jun — Project Manager & Planning Coordinator; Venessa Bong Chia Xuan — Estimation & Quality Assurance Engineer; Sydney Vicker — System Analyst & Requirements Engineer.
- **PeaCock** — To-do list app. Deskripsi: “application designed to help users manage and organize their daily tasks”. GERRAD — System Analyst & Requirements Engineer; HAZZER — Project Manager & Planning Coordinator; WESLEY — Estimation & Quality Assurance Engineer.

- Desktop: menu sisi, kad ringkasan dan panel berbilang lajur.
- Tablet: menu bawah dan panel yang disusun mengikut ruang tersedia.
- Telefon: jadual menjadi kad berlabel, butang sentuh lebih besar dan dialog mengikut lebar skrin.
- Tema cerah dikekalkan walaupun sistem operasi menggunakan mod gelap.

Semakan pelayar menggunakan `scripts/check-ui.cjs` meliputi empat halaman pada lebar 1670, 1280, 768, 390 dan 320 piksel, serta interaksi tugasan, carian dan upload fail. Hasil dan tangkap layar disimpan dalam `qa/`. Skrip memerlukan pelayan pratonton dan sesi Chrome ujian pada port debugging 9223.

## Status semasa

Ini masih frontend prototaip. Butiran kumpulan dan ahli seed ikut data rasmi di atas. Tiada tugasan kumpulan atau aktiviti demo dimasukkan; dashboard hanya memaparkan tugasan pensyarah yang telah diberikan. Tugasan baharu dan jemputan yang ditambah pengguna hanya disimpan dalam memori dan akan hilang apabila halaman dimuat semula. Jemputan tidak menghantar e-mel. Backend, pangkalan data dan log masuk belum disambungkan. Kebanyakan teks antaramuka masih dalam Bahasa Inggeris seperti fail asal.

Google Fonts memerlukan internet; pelayar menggunakan fon gantian jika tidak tersedia.

Fail asal kekal dalam folder Downloads. Fail dalam projek telah disusun semula kepada tiga fail berasingan di atas.

Halaman Lecturer Task menyediakan carian, penapis status, halaman butiran sepenuh halaman dan pilihan fail PDF, DOCX atau PPTX sehingga 10 MB. Tarikh 2 Oct 2026 dan 15 Oct 2026 serta status Ongoing datang daripada butiran tugasan pensyarah. Upload kini hanya memilih dan merekod nama fail dalam sesi pelayar; penghantaran ke server memerlukan backend.

Halaman Teams menyediakan tab All Teams, carian, paparan butiran, modal Create Team, halaman pengurusan pasukan sendiri dan overview read-only bagi pasukan lain. Team Initials dijana automatik daripada nama pasukan. Data tugasan dan perubahan antara muka masih prototaip dan disimpan dalam memori sesi sahaja.

Dashboard menampilkan kiraan tugasan, tugasan yang diketahui dengan penapis status dan susunan tarikh akhir, deadline akan datang serta ahli RotiCanai. Carian, penapis dan susunan hanya mengubah paparan semasa. Senarai tugasan kumpulan kekal kosong sehingga tugasan sebenar diberi atau ditambah.

Halaman Member memaparkan direktori ahli RotiCanai, carian ahli, jemputan dan kiraan agihan peranan berdasarkan rekod ahli. E-mel dan status tidak dipalsukan jika belum diberikan.
