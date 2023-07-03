const data_html = {
    intro : "Hypertext Markup Language adalah bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet. Ini dapat dibantu oleh teknologi seperti Cascading Style Sheets dan bahasa scripting seperti JavaScript dan VBScript.",
    
}
const sejarah_html = {
    sejarah_1 : "Sejarah HTML pertama kali dibuat oleh Tim Berners-Lee yang merupakan fisikawan di lembaga penelitian CERN, Swiss. Berners-Lee mempunyai ide atau pemikiran mengenai sistem hypertext berbasis internet. Sekitar tahun 1991, Tim merilis versi HTML pertama yang di dalamnya terdalam sekitar 18 tag.",
    sejarah_2 : "Untuk sekarang, HTML mengalami beberapa pengembangan dari sisi fitur serta informasi yang disajikan hingga versi terbaru, yaitu HTML5. Setiap tahunnya, bahasa ini mempunyai tingkat popularitas yang cukup tinggi sehingga dijadikan sebagai web standard resmi di dunia pemrograman.",
    sejarah_3 : " Selanjutnya, HTML juga mengalami tahap perbaikan (maintain) dan dikembangkan oleh World Wide Web Consortium (W3C). Pada tahun 2014, merupakan waktu dimana HTML mengalami upgrade yang cukup signifikan dan terdapat fitur semantic untuk memudahkan pengembang website dalam menyusun kode dan memberitahukan makna dari konten tersebut",
}
const fungsi_html = {
    fungsi_1 : "Setelah mengenal sejarah singkat dari bahasa markup HTML, selanjutnya kita juga harus mengetahui kegunaannya. Berikut ini beberapa fungsi dan tujuan dari penerapan HTML untuk pembuatan situs atau web app.",
    fungsi_2 : "Fungsi utama penggunaan HTML sendiri adalah membangun tampilan website yang telah menerapkan metode semantik untuk memudahkan setiap pengembang dalam proses development dan maintenance. Kemudian, HTML juga dapat dikolaborasikan dengan penggunaan bahasa CSS (Cascade Style Sheet) serta JavaScript.",
    fungsi_3 : "Dimana, peran dari HTML5 berfungsi untuk menyusun kerangka dan struktur halaman website. Kemudian, CSS membantu dalam memberikan tampilan desain meliputi warna, font, outline, dan lain sebagainya. Dan Tugas dari bahasa pemrograman JavaScript adalah memberikan sentuhan interaksi untuk memberikan pengalaman yang berbeda kepada user."
}












// Menampilkan Data HTML

const apa_itu = document.querySelector('.data-apa');
const sejarah_1 = document.querySelector('.sejarah-1');
const sejarah_2 = document.querySelector('.sejarah-2');
const sejarah_3 = document.querySelector('.sejarah-3');
const fungsi_1 = document.querySelector('.fungsi-1');
const fungsi_2 = document.querySelector('.fungsi-2');
const fungsi_3 = document.querySelector('.fungsi-3');

apa_itu.innerHTML = data_html.intro;
sejarah_1.innerHTML = sejarah_html.sejarah_1;
sejarah_2.innerHTML = sejarah_html.sejarah_2;
sejarah_3.innerHTML = sejarah_html.sejarah_3;
fungsi_1.innerHTML = fungsi_html.fungsi_1;
fungsi_2.innerHTML = fungsi_html.fungsi_2;
fungsi_3.innerHTML = fungsi_html.fungsi_3;

