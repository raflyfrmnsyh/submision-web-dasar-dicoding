const data_js = {
    intro_js : "JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT.",
}
const sejarah_js = {
    sejarah_1 : "Awal hingga pertengahan 1990-an adalah waktu yang penting bagi internet, dan pada bulan September 1995, seorang programmer Netscape bernama Brandan Eich mengembangkan bahasa scripting baru hanya dalam 10 hari. Awalnya bernama Mocha, tetapi dengan cepat dikenal sebagai LiveScript dan, kemudian, JavaScript.",
    sejarah_2 : "JavaScript pada mulanya ditemukan oleh Brendan Eich pada tahun 1995, yang kemudian dikembangkan untuk Netscape 2, dan menjadi standar ECMA-262 pada tahun 1997. Setelah Netscape menyerahkan JavaScript ke ECMA, yayasan Mozilla terus mengembangkan JavaScript untuk browser Firefox. Versi terbaru Mozilla adalah 1.8.5. (Identik dengan ES5).",
    sejarah_3 : "JavaScript sejauh ini merupakan bahasa pemrograman yang paling populer di dunia. Menurut laporan Octoverse 2018 dari GitHub, ada lebih banyak repositori kode JavaScript daripada bahasa pemrograman lain, dan jumlah ini terus meningkat tahun demi tahun."
}
const fungsi_js = {
    fungsi_1 : "Membuat Website Menjadi Lebih Interaktif,Menciptakan Konten website yang bisa bergerak dengan otomatis tanpa perlu direload berkali kali",
    fungsi_2 : "Dapat Menjalakan Web server,Dengan Bantuan Node Js Javascript Mampu bergerak dalam sisi Server",
    fungsi_3 : "Menciptakan Interaksi pada client atau user lebih seru dengan fitur fitur yang di tawarkan seperti pembuatan game berbasis web dan lain sebagainya"
}


const intro = document.querySelector('.data-js');
const sejarah_1 = document.querySelector('.sejarah-1');
const sejarah_2 = document.querySelector('.sejarah-2');
const sejarah_3 = document.querySelector('.sejarah-3');
const fungsi_1 = document.querySelector('.fungsi-1');
const fungsi_2 = document.querySelector('.fungsi-2');
const fungsi_3 = document.querySelector('.fungsi-3');

intro.innerHTML = data_js.intro_js;
sejarah_1.innerHTML = sejarah_js.sejarah_1;
sejarah_2.innerHTML = sejarah_js.sejarah_2;
sejarah_3.innerHTML = sejarah_js.sejarah_3;
fungsi_1.innerHTML = fungsi_js.fungsi_1;
fungsi_2.innerHTML = fungsi_js.fungsi_2;
fungsi_3.innerHTML = fungsi_js.fungsi_3;
