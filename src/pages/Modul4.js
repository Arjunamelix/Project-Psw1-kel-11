import React from "react";
import Navbar from "../components/Header";
import { useNavigate } from "react-router-dom";

const Modul4 = () => {
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
                <h1>FLUIDA DINAMIS</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <strong>DEBIT ALIRAN DAN AZAS KONTINUITAS</strong>
                <p>
                    Fluida dinamis mempelajari fluida yang sedang bergerak. Topik ini penting dalam analisis aliran fluida seperti dalam pipa, sungai, dan sistem hidrolik.
                </p>
            </section>
            <section className="card">
                
                <strong>1. Pengertian dan jenis Fluida </strong>
                <p>Fluida  sangat dekat dan ada dalam kehidupan kita sehari-hari, Fluida didefinisan 
                   sebagai Suatu zat yang bisa mengalami perubahan perubahan bentuk secara 
                   kontinyu/terus menerus bila terkena tekanan atau  gaya geser walaupun relatif kecil 
                   atau  biasa disebut zar mengalir 
                   Fluida dibedakan menjadi 2 jenis:</p>
                   <p> a. Fluida Statis : Fluida yang tidak bergerak </p>
                   <p> b. Fluida Dinamis : Fluida yang bergerak  </p>
                   <p>Fluida Dinamis adalah fluida yang bergerak, dengan ciri ciri sebagai berikut : </p>
                   <p>1. Fluida dianggap tidak kompresibel </p>
                   <p>2. Fluida dianggap bergerak tanpa gesekan walaupun ada gerakan materi (tidak   
                      mempunyai kekentalan ) </p>
                   <p>3. Alira fluida adalah aliran stasioner, yaitu kecepatan dan arah gerak partikel 
                      fluida melalui suatu titik tertentu selalu tetap</p>
                   <p>4. Tak tergantung waktu (tunak) artinya kecepatannya konstan pada titik 
                      tertentu dan membentuk aliran laminer  </p>

                    <b>Jenis Aliran Fluida </b>
                    <p>Jenis aliran fluida dibedakan menjadi 2 jenis </p>
                    <p>a. Aliran laminer </p>
                    <p>yaitu aliran fluida dalam pipa sejajar dengan dinding pipa tanpa adanya  
                       komponen radial. </p>

                    <img 
                     src="modul4.png"
                     style={{width: "200px", height: "80px", placeItems: "center" , margin: "20px"}}
                    />

                    <p> b. Aliran turbulen </p>
                    <p> yaitu aliran fluida dalam pipa tidak beraturan/tidak sejajar dengan pipa. </p>

                    <img 
                     src="modul4.1.png"
                     style={{width: "200px", height: "80px", margin: "20px"}}
                    /> 

                    <strong> 2. Debit Fluida </strong>
                    <p>Pada fluida yang bergerak memiliki besaran yang dinamakan debit. Debit adalah laju 
                       aliran air. Besarnya debit menyatakan banyaknnya volume air yang mengalir setiap 
                       detik. </p>

                    <img 
                     src="modul4.2.png"
                     style={{width: "140px", height: "80px", placeItems: "center"}}
                    /> 

                 <p>Keterangan: </p>
                 <p>Q  = Debit (m3/s)</p>
                 <p>V  = volume (m3)</p>
                 <p>t   = waktu (s)</p>

                 <strong>3. Azas Kontinuitas </strong>

                 <p>Amati gambar berikut !</p>

                 <img 
                     src="modul4.3.png"
                     style={{width: "300px", height: "200px", placeItems: "center"}}
                /> 
                <p>Pada saat kita menyiram tanaman dengan menggunakan selang dan  jarak 
                   tanaman  jauh dari ujung selang maka yang kita lakukan adalah memencet ujung 
                   selang supaya luas permukaan ujung selang menjadi semakin kecil. Akibatnya 
                   kecepatan air yang memancar semakin besar. disebabkan debit air yang masuk 
                   harus sama dengan debit air yang keluar.</p>
                <p>Azas Kontinuitas </p>
                <p>fluida yang tak termampatkan dan mengalir dalam keadaan tunak, maka    
                   laju aliran volume di setiap waktu sama besar </p>
                   <img 
                     src="modul4.4.png"
                     style={{width: "300px", height: "100px", placeItems: "center"}}
                /> 
                <p>Bila aliran  fluida melewati pipa yang berbeda penampangnya maka fluida akan 
                   mengalami desakan perubahan luas penampangnya yang dilewatinya. Asumsikan 
                   bahwa fluida tidak kompresibel, maka delam selang waktu yang sama jumlah fluida 
                   yang mengalir melalui penampang harus sama dengan jumlah fluida yang mengalir 
                   melalui penampang. </p>
                <p>Volume fluida pada penampang A1 sama dengan volume fluida penampang A2, maka 
                   debit fluida di penampang A1 sama dengan debit fluida di penampang A2 .</p>
                   <img 
                     src="modul4.5.png"
                     style={{width: "90px", height: "100px", placeItems: "center"}}
                    /> 
                 <p>Jika </p>
                 <p> l1  = panjang pipa yang dilewati fluida saat penampangnya A1 </p>
                 <p> l2  = panjang pipa yang dilewati fluida saat penampangnya A2  </p>
                 <p> v1  = kecepatan aliran fluida di penampang 1 (m/s)  </p>
                 <p> v2  = kecepatan aliran fluida di penampang 2 (m/s ).  </p>
                 <p> A1  = luas penampang 1 </p>
                 <p> A2  = luas penampang 2 </p>

                 <p> 
                 Persamaan diatas dikenal dengan Persamaan Kontinuitas. </p>
                 
                 <img 
                     src="modul4.6.png"
                     style={{width: "150px", height: "100px", margin: "20px"}}
                /> 

                <strong>4. Azas  Bernaulli </strong>
                <p>Perhatikan Gambar berikut! </p>

                <img 
                     src="modul4.7.png"
                     style={{width: "300px", height: "180px", margin: "20px"}}
                /> 

                <p>Terlihat dalam gambar, seorang petugas pemedam kebakarn hutan sedang berusaha 
                   memadamkan api yang membakar lahan  dengan menggunakan selang yang sangat 
                   panjang serta berusaha menempatkan posisi selang sedemikian rupa sehingga dapat 
                   menjangkau titik api yang ingin dia padamkan </p>

                   <img 
                     src="modul4.8.png"
                     style={{width: "300px", height: "150px", placeItems: "center"}}
                /> 

                <p>Kita ketahui bahwa kelajuan fluida paling besar terjadi pada pipa yang sempit, sesuai 
                   dengan azas kontinuitas yang telah kita pelajari sebelumnya. bagaimanakah dengan 
                   tekanannya? </p>
                <p>W total  = Δ Ek </p>
                <p>W1 - W2 + W3 = Ek2 – Ek1</p>
                <p>dimana W3 adalah kerja yang dilakukan oleh gravitasi.</p>

                <img 
                     src="modul4.9.png"
                     style={{width: "300px", height: "30px", margin: "20px"}}
                /> 
                <p>nilai W2 negatif, disebabkan gaya yang dialami fluida oleh P2 berlawanan arah 
                   terhadap laju fluida. </p>
                   <img 
                     src="modul4.10.png"
                     style={{width: "300px", height: "30px", margin: "20px"}}
                />
                 <img 
                     src="modul4.11.png"
                     style={{width: "300px", height: "30px", margin: "20px"}}
                /> 
                <p>dengan asumsi bahwa volume fluida yang dipindahkan oleh W1 dan W2 adalah 
                   sama, maka  
                   Persamaan di atas selanjutnya dibagi oleh  
                   sehingga didapatkan persamaan</p>
                
                <img 
                     src="modul4.12.png"
                     style={{width: "300px", height: "90px", margin: "20px"}}
                /> 
                <p>Persamaan di atas dikenal dengan persamaan Bernoulli. Persamaan Bernoulli 
                   dapat dinyatakan juga dengan </p>
                
                <img 
                     src="modul4.13.png"
                     style={{width: "300px", height: "60px", margin: "20px"}}
                /> 

                <p>P adalah tekanan (Pascal) </p>
                <p>ρ adalah massa jenis fluida (kg/m3) </p>
                <p>v adalah kecepatan fluida (m/s) </p>
                <p>g adalah percepatan gravitasi (g = 9,8 m/s2) </p>
                <p>h adalah ketinggian (m)</p>

            </section>
            <section>
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Persamaan Kontinuitas:</strong> Menyatakan bahwa laju aliran massa fluida tetap konstan pada setiap titik dalam sistem tertutup.
                    </li>
                    <li>
                        <strong>Hukum Bernoulli:</strong> Energi total per satuan volume fluida yang bergerak tetap konstan sepanjang garis aliran.
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
                            <td>Persamaan Kontinuitas</td>
                            <td>A₁v₁ = A₂v₂</td>
                            <td>A = luas penampang, V = kecepatan fluida</td>
                        </tr>
                        <tr>
                            <td>Hukum Bernoulli</td>
                            <td>P + ½ρv² + ρgh = konstan</td>
                            <td>P = tekanan, ρ = massa jenis fluida, v = kecepatan fluida, h = ketinggian</td>
                        </tr>
                        <tr>
                            <td>Debit</td>
                            <td>Q = Av</td>
                            <td>A = luas penampang, v = kecepatan fluida</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                   Fluida dinamis diaplikasikan dalam sistem pipa, desain pesawat, irigasi, dan alat seperti pompa dan turbin.
                </p>
            </section>
        </div>
        </div>
    );
};

export default Modul4;