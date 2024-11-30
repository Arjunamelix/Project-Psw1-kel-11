import React from "react";
import Navbar from "../components/Header";
import { useNavigate } from "react-router-dom";

const Modul5 = () => {
    const navigate = useNavigate();
    return (
        <div><Navbar />

    <button style={{
        position:"fixed",
        top:"150px",
        left:"0.1px",
        background:"linear-gradient(135deg, #007acc, #00bfff)",
        color:"white",
        border:"none",
        borderRadius:"50px",
        padding:"10px 20px",
        fontSize:"1rem",
        fontWeight:"bold",
        cursor:"pointer",
        boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)",
        transition:"all 0.3s ease-in-out",
        transform:"scale(1.05)",
        zIndex: 9999,
    }}
                onClick={() => navigate("/menubook")}
            > Back
    </button>

        <div className="container">
            <style>
                {`
                    .container {
                        background-color: linear-gradient(135deg, #e0f7fa, #fce4ec);
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        background-color: #f0f8ff;
                        border-radius: 10px;
                        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                        max-width:1000px;
                        margin:20px auto;
                        display: block;
                        animation:fadein 0.6s ease-in-out;
                    }
                   
                    .card {
                        background: linear-gradient(135deg, #ffffff; #f9fbe7);
                        border-left:4px solid #007acc
                        border-radius: 8px;
                        margin-bottom: 20px;
                        padding: 20px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                        }
                    
                    .card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                        }

                    .card h2 {
                        color: #007acc;
                        font-size: 1.5rem;
                        border-left: 4px solid #007acc;
                        padding-left: 10px;
                        margin-bottom: 15px;
                        position: relative;
                        }

                    .card h2::after{
                        content: "";
                        position: absolute;
                        bottom: -5px;
                        left: 10px;
                        width: 50px;
                        height: 3px;
                        background-color: #007acc;
                        transition: width 0.3s ease;
                        }

                    .card h2:hover::after {
                        width: 100%;
                        }
                    
                    .card p {
                        color: #555;
                        line-height: 1.8;
                        }
                        
                    ul {
                        list-style-type: disc;
                        padding-left: 20px;
                    }

                    ul li {
                        margin-bottom: 10px;
                        color: #333;
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 10px;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    }
                    table th, table td {
                        border: 1px solid #ccc;
                        padding: 10px;
                        text-align: left;
                        background-color: #ffffff;
                        transition: background-color 0.3s ease;
                    }
                    table th {
                        background-color: #d4e8f9;
                        color: #005f99;
                    }

                    table tr:hover td{
                        background-color: #f1f9ff;
                    }

                    @keyframes fadeIn{
                        from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                        to{
                        opacity:1;
                        transform: translateY(0);
                        }
                    }
                    @keyframes slideIn{
                        from {
                        transform: translateX(-30px);
                        opacity: 0;
                        }
                        to{
                        transform: translateX(0);
                        opacity: 1;
                        }
                    }
                `}
            </style>
            <header>
                <h1>SUHU DAN KALOR</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Suhu dan kalor adalah dua konsep penting dalam termodinamika yang saling berkaitan.
                    Suhu mengukur tingkat panas suatu benda, sedangkan kalor adalah energi yang berpindah akibat perbedaan suhu.
                </p>
            </section>
            <section className="card">
               
                <p> <strong>1.Suhu</strong></p>
                <img 
                     src="modul5.png"
                     style={{width: "300px", height: "160px", margin: "5px"}}
                />
                <p>Salah satu langkah antisipasi pencegahan terinfeksi virus corona adalah memeriksa suhu 
                   tubuh seperti terlihat pada gambar.  Maka dari itu, di sejumlah tempat umum seperti 
                   pusat perbelanjaan hingga bandara selalu menerapkan pengecekan suhu tubuh. Dari 
                   suhu tubuh itulah, seseorang bisa mengetahui kondisi tubuhnya sedang sehat atau tidak. 
                   Upaya ini merupakan salah satu cara pencegahan penularan covid -19. Sehingga dapat 
                   kita simpulkan betapa pentingnya suhu dalam kehidupan kita sehari hari.  
                   Suhu merupakan derajat panas atau dingin yang dirasakan indera. Alat yang biasa 
                   digunakan untuk pengukur suhu dinamakan termometer.</p> 
                
                <p>a. Termometer </p>
                <img 
                     src="modul5.1.png"
                     style={{width: "400px", height: "100px", margin: "5px"}}
                />
                <p>Termometer merupakan alat yang  sederhana dengan fungsi yang besar.  Ada 
                   bermacam macam termometer mulai dari yang analog sampai yang digital, 
                   mulai dari yang menggunakan air raksa sampai yang menggunakan infra merah. </p>
                <p>b. Skala Suhu </p>
                <p>Terdapat 4 skala suhu  yang digunakan pada termometer dintaranya Celcius 
                   (oC), Reamur (oR), Fahrenheit (oH)  dan Kelvin (K)</p>
                <img 
                     src="modul5.2.png"
                     style={{width: "300px", height: "100px", margin: "5px"}}
                />
                <p>Konversi antara 4 skala tersebut ditunjukkan oleh tabel berikut :</p>
                <img 
                     src="modul5.3.png"
                     style={{width: "350px", height: "100px", margin: "5px"}}
                />
                <p>Skala Celcius dan Fahrenheit banyak kita temukan di kehidupan sehari hari, 
                   sedangkan skala suhu yang ditetapkan sebagai Satuan Internasional adalah Kelvin. 
                   Berikut gambaran mengkonversi suhu pada 2 termometer yang berbeda secara 
                   umum dituliskan:</p>
                <img 
                     src="modul5.4.png"
                     style={{width: "200px", height: "180px", margin: "20px"}}
                />
                <strong>2. Kalor </strong>
                <p>a. Pengaruh Kalor pada zat </p>
                <img 
                     src="modul5.5.png"
                     style={{width: "250px", height: "150px", margin: "5px"}}
                />
                <p>Gambar diatas menunjukkan air yang sedang dipanaskan hingga mendidih. Saat 
                   air dipanaskan ada proses transfer energi dari satu zat ke zat lainnya yang disertai 
                   dengan perubahan suhu atau yang di sebut dengan kalor. Kalor yang diterima air 
                   ini digunakan untuk menaikkan suhunya sampai mencapai titik didih bahkan 
                   untuk merubah wujud dari cair menjadi gas. </p>
                <p>1) Kalor Jenis dan Kapasitas Kalor</p>
                <p>Kalor jenis suatu benda didefinisika sebagai jumlah kalor yang diperlukan 
                   untuk menaikkan suhu 1 kg suatu zat sebesar 1 K. Kalor jenis ini 
                   menunjukkan kemampuan suatu benda untuk menyerap kalor. Semakin 
                   besar kalor jenis suatu benda, semakin besar pula kemampuan benda 
                   tersebut dalam menyerap kalor.</p>
                <p>Secara matematis </p>
                <img 
                     src="modul5.6.png"
                     style={{width: "200px", height: "30px", margin: "5px"}}
                />
                <p> dengan </p>
                <p>c = kalor jenis suatu zat (J kg-1  oC-1)</p>
                <p>m = massa zat (kg)</p>
                <p>ΔT = perubahan suhu (oK)</p>
                <p>Q= banyak kalor yang diterima atau dilepas (J)</p>
                <img 
                     src="modul5.7.png"
                     style={{width: "350px", height: "200px", margin: "5px"}}
                />
                <p>Kapasitas kalor suatu benda adalah jumlah kalor yang diperlukan atau 
                   dilepaskan jika suhu benda tersebut dinaikkan atau diturunkan 1 K atau 1oC.  
                   Secara matematis dapat dirumuskan sebagai berikut:</p>
                <p>C = 𝑄/ΔT atau C = m.c </p>
                <p>Dengan</p>
                <p>C = kapasitas kalor (JK-1) </p>

                <p>2) Perubahan Wujud Zat </p>
                <p>Kalor yang diterima atau dilepaskan suatu zat dapat mengakibatkan pada 
                   perubahan wujud suatu zat. Penerimaan kalor akan meningkatkan suhu 
                   dan dapat mengubah wujud zat dari padat menjadi cair atau cair menjadi 
                   gas. Sedangkan pelepasan kalor dapat menurunkan suhu atau merubah 
                   wujud dari cair menjadi padat atau gas menjadi cair. </p>
                <p>Ketika sedang berubah wujud, walaupun terdapat pelepasan atau 
                   penyerapan kalor tetapi tidak digunakan untuk menaikkan atau 
                   menurunkan suhu. Kalor ini disebut Kalor laten atau L. Kalor laten adalah 
                   kalor yang dibutuhkan benda untuk mengubah wujudnya per satuan 
                   massa. Secara matematis</p>
                <p> L = 𝑄/m</p>
                <p>Dengan </p>
                <p>L = kalor laten ( Jkg-1) </p>
                <p>Q = kalor yang dibutuhkan saat perubahan wujud (J) </p>
                <p>m = massa zat (kg) </p>

                <p>3) Azas Black</p>
                <p>Asas Black adalah suatu prinsip dalam termodinamika yang dikemukakan 
                   oleh Joseph Black. Bunyi Asas Black adalah sebagai berikut: </p>
                <p>“Pada pencampuran dua zat, banyaknya kalor yang dilepas zat yang 
                   suhunya lebih tinggi sama dengan banyaknya kalor yang diterima zat 
                   yang suhunya lebih rendah”.</p>
                <p>Energi selalu  kekal sehingga benda yang memiliki temperatur lebih 
                   tinggi akan melepaskan energi sebesar QL dan benda yang memiliki 
                   temperatur lebih rendah akan menerima energi sebesar QT dengan besar 
                   yang sama.</p>
                <p>Secara matematis, pernyataan tersebut dapat ditulis sebagai berikut.</p>
                <p>Q lepas = Q terima</p>
                <p>Keterangan:</p>
                <p>QLepas = jumlah kalor yang dilepaskan oleh zat (Joule)</p>
                <p>QTerima = jumlah kalor yang diterima oleh zat (Joule)</p>
                <p>Besarnya kalor dapat dihitung dengan menggunakan persamaan</p>
                <p>Q = mc∆T. </p>
                <p>Ketika menggunakan persamaan ini, perlu diingat bahwa temperatur naik 
                   berarti zat menerima kalor, dan temperatur turun berarti zat melepaskan 
                   kalor, maka</p>
                <img 
                     src="modul5.8.png"
                     style={{width: "350px", height: "70px", margin: "5px"}}
                />
                <p>Keterangan: </p>
                <p>m1 = massa benda 1 yang suhunya tinggi (kg) </p>
                <p>m2 = massa benda 2 yang suhunya rendah (kg) </p>
                <p>c1 = kalor jenis benda 1 (J/kgoC) </p>
                <p>c2 = kalor jenis benda 2 (J/kgoC) </p>
                <p>T1 = suhu mula-mula benda 1 (oC atau K) </p>
                <p>T2 = suhu mula-mula benda 2 (oC atau K) </p>
                <p>Tc = suhu akhir atau suhu campuran (oC atau K) </p>
            </section>
            <section className="card">
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Suhu:</strong> Ukuran tingkat panas atau dingin suatu benda, biasanya dinyatakan dalam skala Celcius, Fahrenheit, atau Kelvin.
                    </li>
                    <li>
                        <strong>Kalor:</strong> Energi yang berpindah akibat perbedaan suhu antara dua benda.
                    </li>
                    <li>
                        <strong>Kalor Jenis (c):</strong> Jumlah energi yang diperlukan untuk menaikkan suhu 1 kg zat sebesar 1°C.
                    </li>
                </ul>     
            </section>
            <section>
                <h2>Persamaan Penting</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Konsep</th>
                            <th>Persamaan</th>
                            <th>Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hubungan Kalor</td>
                            <td>Q = mcΔT</td>
                            <td>Q = kalor, m = massa, c = kalor jenis, ΔT = perubahan suhu</td>
                        </tr>
                        <tr>
                            <td>Perpindahan Kalor </td>
                            <td>P = kA(T₁ - T₂) / d</td>
                            <td>k = konduktivitas termal, A = luas, d = ketebalan</td>
                        </tr>
                        <tr>
                            <td>Energi dalam Perubahan Wujud</td>
                            <td>Q = mL</td>
                            <td>m = massa, L = kalor laten</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                   Konsep suhu dan kalor digunakan dalam pengaturan suhu ruangan (AC atau pemanas), desain alat memasak,
                   pengolahan makanan, serta teknik pendinginan seperti kulkas dan freezer.
                </p>
            </section>
        </div>
        </div>
    );
};

export default Modul5;