const data_css = {
    intro_css : "Cascading Style Sheet merupakan aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam. CSS bukan merupakan bahasa pemograman.",
}
const sejarah_css = {
    sejarah_1 : "Tahun 1994 Hakon Wium Lie bekerja di CERN yang merupakan sebuah perusahaan dimana tempat lahirnya Web dan Web mulai digunakan sebagai platform untuk penerbitan elektronik. Namun, satu bagian penting dari platform web yaitu adalah tidak ada cara untuk menata dokumen seperti tidak adanya cara untuk menggambarkan tata letak seperti surat kabar di halaman Web.",
    sejarah_2 : "Setelah mengerjakan presentasi surat kabar yang dipersonalisasi di MIT Media Laboratory, Hakon melihat kebutuhan akan bahasa style sheet untuk Web. Style sheet di browser bukanlah ide yang sama sekali baru. Pemisahan struktur dokumen dari tata letak dokumen telah menjadi tujuan HTML sejak awal tahun 1990. Tim Berners-Lee menulis browser/editor NeXT-nya sedemikian rupa sehingga Tim Berners-Lee dapat menentukan gaya dengan lembar gaya sederhana. Namun, Tim Berners-Lee tidak mempublikasikan sintaks untuk lembar gaya, mengingat itu adalah masalah bagi setiap browser untuk memutuskan cara terbaik untuk menampilkan halaman kepada penggunanya.",
    sejarah_3 : "Secara resmi, CSS diusulkan pada tahun 1994 sebagai bahasa penataan web untuk memecahkan beberapa masalah Html 4. Ada bahasa penataan lain yang diusulkan saat itu, seperti style page untuk HTML dan JSSS tetapi CSS tidak menyertakan properti di CSS2. Seiring berjalannya waktu, CSS level 2 dikembangkan oleh W3C dan diterbitkan sebagai rekomendasi pada Mei 1998. CSS 2 menyertakan sejumlah kemampuan baru seperti di bawah ini:"
}
const fungsi_css = {
    fungsi_1 : "Memuat halaman situs dengan cepat, peran CSS dalam menyederhanakan kerja HTML membuat proses pengodean akan lebih singkat sehingga hal ini berpengaruh pada penerapan dokumen dan proses pemanggilannya. Proses pembukaan halaman web dan pengunduhan dokumen dari situs akan berjalan lebih cepat daripada adanya atribut tag HTML di setiap dokumen.",
    fungsi_2 : "Desain diproses dengan cepat, penggunaan CSS untuk mengerjakan desain halaman web memang terbukti mempercepat proses pembangunan sebuah halaman web. Hal ini dikarenakan pembagian kerja antara HTML yang berperan membangun struktur web dan CSS dengan perannya terfokus pada desain web. Adanya CSS function dapat memungkinkan pengembang menerapkan satu dokumen dapat muncul di berbagai halaman web tanpa penyalinan kode berulang.",
    fungsi_3 : "Adaptif terhadap berbagai perangkat, fungsi CSS yang ini telah disinggung sebelumnya yaitu membuat konten halaman menjadi adaptif atau kompatibel terhadap berbagai perangkat atau browser dengan ukuran dan versi berbeda. CSS memungkinkan sebuah dokumen dibuka dalam perangkat terbaru dan versi lamanya, begitu pula berlaku pada versi browser yang dipakai pengguna."
}


const intro = document.querySelector('.data-css');
const sejarah_1 = document.querySelector('.sejarah-1');
const sejarah_2 = document.querySelector('.sejarah-2');
const sejarah_3 = document.querySelector('.sejarah-3');
const fungsi_1 = document.querySelector('.fungsi-1');
const fungsi_2 = document.querySelector('.fungsi-2');
const fungsi_3 = document.querySelector('.fungsi-3');

intro.innerHTML = data_css.intro_css;
sejarah_1.innerHTML = sejarah_css.sejarah_1;
sejarah_2.innerHTML = sejarah_css.sejarah_2;
sejarah_3.innerHTML = sejarah_css.sejarah_3;
fungsi_1.innerHTML = fungsi_css.fungsi_1;
fungsi_2.innerHTML = fungsi_css.fungsi_2;
fungsi_3.innerHTML = fungsi_css.fungsi_3;
