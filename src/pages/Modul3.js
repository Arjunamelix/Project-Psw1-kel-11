import React from "react";
import Navbar from "../components/Header";
import { useNavigate } from "react-router-dom";

const Modul3 = () => {
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
                <h1>FLUIDA STATIS</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Fluida statis mempelajari fluida yang berada dalam keadaan diam dan gaya yang bekerja pada fluida tersebut.
                    Konsep ini penting untuk memahami tekanan pada fluida, hukum pascal, dan prinsip Archimedes.
                </p>
            </section>
            <section className="card">
                <strong>1. Konsep Fluida  </strong>
                <p>Pada waktu di sekolah tingkat pertama, telah dikenalkan ada tiga jenis wujud zat, 
                   yaitu: zat padat, zat cair dan gas. Fluida adalah zat yang dapat mengalir dan 
                   memberikan sedikit hambatan terhadap perubahan bentuk ketika ditekan. Fluida 
                   secara umum dibagi menjadi dua macam, yaitu fluida tak bergerak (hidrostatis) 
                   dan fluida bergerak (hidrodinamis). Pada modul ini kita akan fokus pada 
                   pembahasan fluida yang tidak bergerak (hidrostatis) atau fluida statis. </p>
                
                <strong>2. Tekanan </strong>
                <p>Tekanan didefinisikan sebagai gaya yang bekerja tegak lurus pada suatu bidang 
                   dibagi dengan luas bidang itu. Dan secara matematis dirumuskan sebagai berikut: </p>
                <img 
                 src="modul3.png"
                 style={{width: "100px", height: "50px", placeItems: "center"}}
                 />

                 <p>Keterangan: </p>
                 <p>P = tekanan ( Pascal= N/m2) </p>
                 <p>F = Gaya (N) </p>
                 <p>A = Luas permukaan (m2)</p>

                 <strong>3. Tekanan Hidrostatis </strong>
                 <p>Makin tinggi zat cair dalam wadah, maka makin berat zat cair itu, sehingga makin 
                    besar tekanan yang dikerjakan zat cair pada dasar wadah. Dengan kata lain pada 
                    posisi yang semakin dalam dari permukaan, maka tekanan hidrostatis yang 
                    dirasakan semakin besar. </p>
                <img 
                 src="modul3.1.png"
                 style={{width: "100px", height: "100px", placeItems: "center"}}
                 />
                 <p>Dan tekanan hidrostatis tersebut dirumuskan sebagai berikut:</p>
                 <img 
                 src="modul3.2.png"
                 style={{width: "120px", height: "40px", placeItems: "center"}}
                 />

                 <p>Keterangan: </p>
                 <p> Ph = tekanan hidrostatis ( Pa) </p>
                 <p> ρf  = massa jenis fluida (kg/m3 ) </p>
                 <p> g = percepatan gravitasi (m/s2) </p>
  

                 <strong>4. Hukum Hidrostatika  </strong>
                 <p>“semua titik yang terletak pada kedalaman yang sama maka tekanan 
                 hidrostatikanya sama.” </p>

                 <img 
                 src="modul3.3.png"
                 style={{width: "150px", height: "90px", placeItems: "center"}}
                 />
                 
                 <p>Jadi semua titik yang terletak pada bidang datar didalam satu jenis zat cair 
                    memiliki tekanan yang sama, ini dikenal dengan hukum pokok hidrostatika dan 
                    tekanan ini disebut dengan tekanan hidrostatis.</p>

                <p>  Phidrostatis  di titik A  = P hidrostatis di titik B </p>


                <strong>5. Hukum Pascal dan Penerapannya </strong>
                 <p>Prinsip Pascal  mengatakan bahwa tekanan yang diberikan kepada zat cair dalam 
                    ruang tertutup diteruskan sama besar ke segala arah,  
                    Sebagai contoh sederhana aplikasi dari hukum Pascal adalah dongkrak hidrolik. </p>

                <img 
                 src="modul3.4.png"
                 style={{width: "200px", height: "160px", placeItems: "center"}}
                 />

                 <p>Perhatikan gambar mekanisme hidrolik diatas. Karena cairan tidak dapat 
                    ditambahkan ataupun keluar dari sistem tertutup, maka volume cairan yang 
                    terdorong di sebelah kiri akan mendorong piston (silinder pejal) di sebelah kanan 
                    ke arah atas.</p>
                <p>Dengan menggunakan prinsip Pascal, berlaku hubungan, secara matematis: </p>
                <img 
                 src="modul3.5.png"
                 style={{width: "160px", height: "100px", placeItems: "center"}}
                 />

                 <p>Keterangan: </p>
                 <p>P1  = tekanan pada penampang 1 (Pa) </p>
                 <p>P2  = tekanan pada penampang 2 (Pa)</p>
                 <p>F1  = gaya pada penampang 1 (N)</p>
                 <p>F2  = gaya pada penampang 2 (N) </p>
                 <p>A1  = luas penampang 1(m2) </p>
                 <p>A2  = luas penampang 2 (m2) </p>

                 <p>Penerapan dalam kehidupan sehari-hari, yang menggunakan prinsip hukum 
                    Pascal antara lain dongkrak hidrolik, pompa hidrolik ban sepeda, mesin hidrolik 
                    pengangkat mobil, mesin pengepres hidrolik, dan rim piringan hidrolik. </p>

                <strong>6. Hukum Archimedes </strong>
                 <p>ukum Archimedes berbunyi, "Sebuah benda yang tercelup sebagian atau 
                    seluruhnya ke dalam fluida akan mengalami gaya ke atas atau gaya apung yang 
                    besarnya sama dengan berat fluida yang dipindahkannya". 
                    Gaya apung ini merupakan selisih dari gaya berat benda di udara dengan gaya 
                    berat benda di dalam fluida </p>
                <img 
                 src="modul3.6.png"
                 style={{width: "130px", height: "50px", placeItems: "center"}}
                 />

                 <p>FA =  gaya ke atas = gaya apung (N) </p>
                 <p>Wu = gaya berat benda di udara (N) </p>
                 <p>Wf = gaya berat benda di fluida (N) </p>

                 <p>secara matematis</p>
                 <img 
                 src="modul3.7.png"
                 style={{width: "130px", height: "50px", placeItems: "center"}}
                 />

                 <p>Keterangan: </p>
                 <p>FA =  gaya ke atas = gaya apung (N) </p>
                 <p>ρf  =  massa jenis fluida (kg/m3) </p>
                 <p>Vbf  = Volume benda yang tercelup dalam fluida (m3) </p>
                 <p>g   = percepatan gravitasi (m/s2) </p>

                 <p><strong>Mengapung </strong></p>

                 <img 
                 src="modul3.8.png"
                 style={{width: "100px", height: "140px", placeItems: "center"}}
                 />
                 
                 <p>Jika benda dicelupkan ke dalam fluida, benda muncul sebagian ke permukaan 
                    air, karena berat benda lebih kecil dari gaya apung (Fa &lt; W). Ini adalah konsep 
                    mengapung.Dari konsep tersebut, dapat dirumuskan hubungan antara massa 
                    jenis benda dengan massa jenis fluida:Jika benda dicelupkan ke dalam fluida, benda muncul sebagian ke permukaan 
                    air, karena berat benda lebih kecil dari gaya apung (Fa &lt; W). Ini adalah konsep 
                    mengapung. Dari konsep tersebut, dapat dirumuskan hubungan antara massa 
                    jenis benda dengan massa jenis fluida:</p>
                
                <img 
                 src="modul3.9.png"
                 style={{width: "100px", height: "50px", placeItems: "center"}}
                 />

                 <p>ρb   = massa jenis benda ( kgm-3) </p>
                 <p>Vbf = Volume benda yang tercelup (m3) </p>
                 <p>Vb   = Volume benda (m3) </p>
                 <p>ρf     =  massa jenis fluida ( kgm-3) </p>

                 <p><strong>Melayang</strong></p>
                 <img 
                 src="modul3.10.png"
                 style={{width: "100px", height: "140px", placeItems: "center"}}
                 />
                 <p>Jika benda dicelupkan seluruhnya kedalam fluida (air), maka gaya apung (Fa) 
                 sama dengan berat benda  W (Fa = W).</p>

                 <p><strong>Tenggelam</strong></p>
                 <img 
                 src="modul3.11.png"
                 style={{width: "100px", height: "150px", placeItems: "center"}}
                 />

                 <p> Jika benda dicelupkan seluruhnya kedalam fluida (air), maka gaya apung ( F 
                     a) lebih kecil dari berat benda W (Fa &lt; W). Sehingga benda bergerak kebawah 
                     menuju dasar wadah air. Ini adalah konsep tenggelam. </p>


            </section>
            <section className="card">
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Tekanan (P):</strong> Gaya per satuan luas pada permukaan fluida .
                    </li>
                    <li>
                        <strong>Hukum Pascal:</strong> Tekanan yang diberikan pada fluida dalam ruangan tertutup diteruskan ke segala arah dengan sama besar.
                    </li>
                    <li>
                        <strong>Prinsip Archimedes</strong> Benda yang dicelupkan ke dalam fluida akan mengalami gaya angkat ke atas sebesar berat fluida yang dipindahkan.
                    </li>
                </ul>     
            </section>
            <section>
                <h2>Persamaan Penting</h2>
                <table>
                    <thead>
                        <tr>
                            <th>KTekanan</th>
                            <th>P = F / A</th>
                            <th>F = gaya, A = luas permukaan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tekanan Hidrostatis</td>
                            <td>P = pgh</td>
                            <td>ρ = massa jenis fluida, g = gravitasi, h = kedalaman</td>
                        </tr>
                        <tr>
                            <td>Gaya Angkat Archimedes</td>
                            <td>F = ρVg</td>
                            <td>ρ = massa jenis fluida, V = volume benda tercelup, g = gravitasi</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                   Fluida statis digunakan dalam perancangan kapal, dam, pompa hidrolik, dan alat pengukur tekanan seperti barometer dan manometer.
                </p>
            </section>
        </div>
        </div>
    );
};

export default Modul3;