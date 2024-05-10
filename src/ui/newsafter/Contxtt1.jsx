import React, { useState } from 'react';
import "../../pages/news/News.css";
import "@fortawesome/fontawesome-free/css/all.css";
// import { FaChevronDown } from 'react-icons/fa';
// import Content1 from '../../assets/news/12.png';
import News from '../../assets/news/ketiga.png'
import News2 from '../../assets/news/4.jpeg'

function Contxtt1() {
  const [expandedIndex, setExpandedIndex] = useState(-1);
    const [rotatedIndexes, setRotatedIndexes] = useState([]);

    const toggleExpand = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1);
            setRotatedIndexes(rotatedIndexes.filter(i => i !== index));
        } else {
            setExpandedIndex(index);
            setRotatedIndexes([...rotatedIndexes, index]);
        }
    };

    const getMarginBottom = (index) => {
        return expandedIndex === index ? '200px' : '0';
    };

    const isRotated = (index) => {
        return rotatedIndexes.includes(index);
    };
  const styleObj = {
    fontSize: 47,
    textAlign: "Left",
    paddingTop: "10px"
  }
  const anaknya = {
    fontSize: 18,
    color: "#ffff",
    textAlign: "Left",
    paddingTop: "10px"
  }

  const judul = {
    fontSize: 64,
    color: "#ffff",
    textAlign: "Left",
    paddingTop: "10px"
  }
  
  return (
    
    
    <div className="team-heading mt-10 w-[1280px]">
      {/* <details className="dropdown mt-8">
        <summary className="m-1 btn btcat btn-outline w-[150px] rounded-full font-normal">Category <i className="fas fa-chevron-down"></i></summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details> */}
      <p >News / Cybersecurity: Securing the Virtual World in the Digital Era</p>
      <h1 className='txtafter mt-10 w-[600] text-justify' style={judul}>Cybersecurity: Securing the Virtual World in the Digital Era</h1>
      <p style={anaknya}> 
        Infinite Learning <br /> Batam, Indonesia 31 Oktober 2023
      </p><br /><br />
      <img className="w-full h-96 object-cover rounded-[20px] " src={News} alt="News" />
      <div className='article mt-5  items-center text-left'>
        <article>
            Selamat datang di dunia di mana keamanan adalah kunci!🌐
<br /><br />
      Jangan lewatkan kesempatan untuk menjelajahi artikel kami tentang Cybersecurity: Mengunci Dunia Maya untuk Keamanan di Era Digital. Bersiap-siap untuk menggali rahasia-rahasia dunia maya yang penuh tantangan dan petualangan, karena kami akan membawa Anda dalam perjalanan melintasi labirin keamanan yang menarik.
      <br /><br />
      Ayo, kita mulai! 🔒💻
      <br /><br />
      Di era digital yang semakin canggih ini, keamanan siber menjadi perhatian utama. International  Telecommunication Union (ITU) mendefinisikan cybersecurity sebagai tindakan untuk melindungi sistem dan jaringan dari serangan dunia maya. Bayangkan perangkat yang kita gunakan adalah “rumah” kita, maka cybersecurity adalah “kunci” yang menjaga perangkat tetap aman dari tindakan kejahatan siber di internet. 
      Untuk melindungi data dan privasi kita di dunia maya, berikut adalah serangkaian langkah yang harus kita ambil untuk memastikan bahwa perangkat kita tetap aman dari serangan siber.
      <br /><br />
      <b>   Langkah 1</b>: Gunakan Kata Sandi yang Kuat
      Kata sandi yang kuat merupakan pertahanan lapisan pertama dan terpenting untuk mengunci informasi data dan privasi kita. Gunakan kombinasi huruf besar, huruf kecil, angka, dan simbol agar tidak mudah dipecahkan. Jangan gunakan kata sandi yang mudah ditebak sepeti nama atau tanggal lahir. Selain itu, jangan pernah memberikan  kata sandi akun media sosial kita kepada orang lain.
      <br /><br />    
      <b>Langkah 2</b>: Lindungi Data Pribadi
      Identitas dan data pribadi adalah aset berharga yang perlu kita dilindungi, jadi pastikan untuk tidak  memberikannya begitu saja kepada orang yang tidak dikenal. Hindari membagikan data pribadi secara  sembarangan di internet, terutama ketika berpartisipasi dalam kuis online atau mengisi formulir yang  mencurigakan.
      <br /><br />
      <b>Langkah 3</b>: Pastikan Informasi dengan Baik
      Penipu sering menggunakan berbagai cara, termasuk iming-iming hadiah palsu untuk mencuri informasi pribadi Oleh karena itu, sebelum mengeklik tautan atau menanggapi penawaran hadiah online, pastikan untuk konfirmasi dan mencari tahu keasliannya. Ini dapat dilakukan dengan menelusuri dan menghubungi sumber resmi yang terkait
        </article>

        <img className="w-128 h-96 object-cover rounded-[40px] mt-10 ml-72" src={News2} alt="News2" />
<br /><br /><br />
        <article>
        Dengan menerapkan langkah-langkah yang telah dibahas dalam blog ini, kita semua dapat menjaga perangkat dan data pribadi kita tetap aman dari serangan siber, serta dapat menjelajahi dunia maya dengan lebih tenang.
<br /><br />
Cybersecurity Menjadi Prospek Pekerjaan Menjanjikan Mengingat pentingnya penjagaan data di era digital sekarang, tidak hanya kepentingan pribadi, tetapi cybersecurity juga menjadi hal yang sangat krusial bagi setiap perusahaan. Data dan infomasi perusahaan akan dijaga dengan sangat ketat, karena kebocoran data dapat menyebabkan kerugian yang fatal, bahkan bagi perusahaan tangguh sekalipun. Kerugian meliputi kehilangan aset, reputasi dan bisnis yang dijalankan serta biaya perbaikan dan pemulihan yang mahal.
<br /><br />
    Perusahaan pasti membutuhkan seorang cybersecurity specialist untuk melindungi segala sistem dan jaringan yang digunakan perusahaan. Besaran gaji yang ditawarkan di Indonesia yaitu berkisar 11-17 juta rupiah/bulan. Besarnya gaji ini dikarenakan pekerjaan yang rumit dan tanggung jawab yang besar, perusahaan membutuhkan jasa mereka untuk menjaga data, infomasi, kerahasiaan, dan integritas perusahaan. Prospek profesi ini masih terbilang sangat luas, apalagi pekerjaan ini belum banyak dipahami orang awam saat ini.


        </article>
      
</div>
     
    









</div>




  );
}

export default Contxtt1;
