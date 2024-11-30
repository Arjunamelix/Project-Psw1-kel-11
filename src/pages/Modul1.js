import React from "react";
import Navbar from "../components/Header";
import { useNavigate } from "react-router-dom";

const Modul1 = () => {
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

        <div className="container ">
            
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
                    .image {
                        width: 70%;
                        max-width: 600px; 
                        height: auto;
                        border-radius: 15px; 
                        margin-top: 15px;
                        box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1); 
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                        padding: 20px;
                        margin-bottom: 20px;,
                    }
                `}
            </style>
            <header style={{
                background: "linear-gradient(135deg, #007acc, #005f99)",
                color: "white",
                padding:"15px",
                borderRadius:"10px",
                textAlign:"center",
                marginBottom:"20px"
            }}>
                <h1 style={{
                    fontSize:"2rem",
                    fontWeight:"bold"
                }}>DINAMIKA ROTASI DAN BENDA TEGAR</h1>
            </header>
           
            <section>
                <h2>Pendahuluan</h2>
                <p>
                Dinamika rotasi adalah ilmu yang mempelajari tentang gerak rotasi (berputar) 
                dengan memperhatikan aspek penyebabnya, yaitu momen gaya. Momen gaya atau 
                yang lebih dikenal dengan torsi ini akan menyebabkan terjadinya percepatan 
                sudut. Suatu benda dikatakan melakukan gerak rotasi (berputar) jika semua bagian 
                benda bergerak mengelilingi poros atau sumbu putar. Sumbu putar benda terletak 
                pada salah satu bagian dari benda tersebut.
                </p> 
                <p>
                Benda tegar merupakan benda yang tidak mengalami perubahan bentuk akibat 
                pengaruh gaya, sehingga dalam melakukan pergerakan, benda tersebut tidak 
                mengalami perubahan bentuk dan volume benda. Benda tegar dapat melakukan gerak 
                translasi dan rotasi.
                </p>
            </section>
            
            <section className="card">
                <h2>Konsep Dasar</h2>
                <ul>
                    <strong>1. Momen Gaya/ Torsi (τ) </strong>
                    <p>Momen gaya atau torsi (τ) merupakan besaran vektor yang mengakibatkan 
                       benda berotasi atau berputar. </p>
                       <img src="modul1.jpg" className="image"></img>
                       
                    <p>Berdasarkan Gambar di atas, orang memberikan gaya kepada kunci sehingga 
                       kunci dapat memutar baut. Baut berfungsi sebagai sumbu rotasi, sedangkan 
                       perpanjangan garis gaya disebut garis kerja gaya. Jika gaya (F) yang diberikan 
                       tangan (garis kerja gaya) tegak lurus terhadap lengan kunci, maka lengan kunci 
                       ini berfungsi sebagai lengan gaya. Namun, jika gaya yang diberikan tidak tegak 
                       lurus lengan kunci, maka lengan gaya merupakan jarak yang tegak lurus dari 
                       sumbu rotasi dengan garis kerja gaya (r). </p>

                    <p>Untuk memahami komnsep Momen Gaya /Torsi (τ), Perhatikan beberapa 
                       kejadian berikut ! </p>
                       <img src="modul1.1.png" className="image"></img>
                    <p>Gambar di atas, Untuk memutar baut, 
                       kedudukan tangan seperti gambar (c) lebih mudah dilakukan daripada 
                       kedudukan tangan pada gambar (b) dan (a). Sementara kedudukan tangan 
                       seperti gambar (b) lebih mudah dilakukan daripada seperti gambar (a). Gaya (F) 
                       yang diperlukan untuk memutar baut pada kedudukan (c) lebih kecil dari gaya 
                       yang diperlukan pada gambar (b) atau (a). Berdasarkan fakta ini, besar gaya 
                       putar atau momen gaya tidak hanya ditentukan oleh besar gaya, tetapi juga 
                       panjang lengan gaya (r). Hubungan ketiga faktor ini, diberikan dengan 
                       persamaan berikut. </p>

                       <b><p>𝝉 = 𝑟 x 𝐹      atau       𝝉 = 𝑟  𝐹 𝑠𝑖𝑛 𝜃 </p></b>

                       <p>Dimana : 
                          τ    =  Momen Gaya (Nm) 
                          F    =  Gaya yang bekerja (N) 
                          r    =   Lengan Momen (m)  
                          θ   =   sudut yang terbentuk antara garis kerja gaya F terhadap lengan momen r</p>

                        <p>Seperti halnya gaya F, torsi τ juga termasuk besaran vektor, yang memiliki 
                           besar dan arah. Bedanya, arah torsi hanya dua, searah atau berlawanan arah 
                           jarum jam. Kedua arah torsi ini cukup dibedakan dengan memberikan tanda 
                           positif (berlawanan dengan perputaran arah jarum jam), atau negatif (searah
                           dengan perputaran arah jarum jam). Supaya konsisten dengan aturan 
                           matematika maupun aturan arah pada momentum sudut dan gaya Lorentz. </p>
                        
                        <strong>2. Momen Inersia (I) </strong>
                        <p>Momen inersia (I) merupakan besaran yang menyatakan ukuran 
                           kecenderungan benda untuk tetap mempertahankan keadaannya
                           ukuran kemampuan benda untuk mempertahankan kecepatan sudut 
                           rotasinya. Benda yang sukar berputar atau benda yang sulit dihentikan saat 
                           berputar memiliki momen inersia yang besar, dan sebaliknya. 
                           Momen inersia didefnisikan sebagai hasil kali antara massa partikel dan 
                           kuadrat jarak partikel dari sumbu rotasi. Secara matematis, momen inersia 
                           dapat dirumuskan sebagai berikut.</p>
                        <b>l = 𝑚.𝑟2 </b>
                        <p>Dimana : 
I  
                           l = Momen inersia (kgm2) 
                           m = massa partikel (kg)  
                           r = jarak partikel dari sumbu pusat rotasi (m) 
                           Jika terdapat sejumlah partikel dengan massa masing-masing m1, m2, m3,... 
                           dan memiliki jarak r1, r2, r3, ... terhadap poros, maka momen inersia totalnya adalah 
                           penjumlahan momen inersia setiap partikel, yaitu sebagai berikut. </p>

                           <img src="modul1.2.png" style={{
                            height:"50px",
                            position:"center",

                           }}></img>
                        <p>Atau secara pengintegralan dapat ditulis dengan persamaan:</p>
                        <img src="modul1.3.png"></img>
                        <p>Berdasarkan konsep momen inersia I yang telah dipaparkan di atas, 
                           berikut beberapa persamaan momen inersia benda tegar yang teratur 
                           bentuknya dan berotasi pada sumbu tertentu seperti tertera pada gambar 
                           tabel berikut: </p>
                           <img src="modul1.4.png" className="image"></img>
                        <strong>Menentukan Momen Inersia Benda Tegar dengan prinsip Teorema Sumbu Sejajar</strong>
                        <p>Berdasarkan  tabel di atas,  kita telah  mengetahui bahwa  momen  inersia 
                           batang silinder bermassa M dengan panjang L yang porosnya melalui pusat 
                           massa (tabel a) adalah 𝐼𝑝𝑚 = 1/12

                           ~𝑀𝐿2. Untuk mendapatkan Momen Inersia 
                           Batang silinder yang bergerak pada ujung batang maka dapat digunakan 
                           dengan prinsip Teorema Sumbu Sejajar dengan persamaan sebagai berikut : </p>
                           <img src="modul1.5.png" ></img>
                           <p>Dimana :</p> 
                           <p>Is = Momen Inersia titik pusat rotasi 
                              (Nm2)</p>
                           <p>Ipm = Momen Inersia benda di pusat massa 
                              (Nm2)</p>
                           <p> M =  Massa benda (kg)</p> 
                           <p> d = Jarak antara titik pusat massa ke titik 
                              rotasi (m)</p>
                            <p>sehingga untuk mendapatkan momen inersia batang silinder yang bergerak pada 
                               ujung batang dapat diperoleh :</p>
                            <img src="modul1.6.png" ></img>
                            <strong>3.Hubungan antara Momen Gaya (τ), Momen Inersia (I) dan Percepatan 
                            Sudut (α)</strong>
                            <p>Untuk mendapatkan hubungan antara Momen Gaya (τ), Momen Inersia (I) dan 
                               Percepatan Sudut (α), maka kita dapat menganlogikan dengan menerapkan 
                               hukum Newton II translasi, yaitu :</p>
                            <img src="modul1.7.png" ></img>
                            <p>Diperoleh</p>
                            <img src="modul1.8.png" ></img>
                            <p> disebut  Hukum Newton II Gerak rotasi </p>
                            <p>Dimana:</p>
                            <p>τ =  Momen Gaya (N.m) </p>
                            <p>I =  Momen Inersia (kg.m2) </p>
                            <p>α =  Percepatan Sudut (rad/s2)  </p>
                            <strong>4. Energi Kinetik Rotasi (Ekrot)</strong>
                            <p>Benda yang berputar pada poros nya memiliki suatu bentuk energi yang disebut 
                               energi kinetik rotasi (Ekrot). Persamaan energi kinetik rotasi ini dapat diturunkan 
                               dari konsep energi kinetik translasi yaitu :</p>

                            <img src="modul1.9.png" ></img>
                            <p>Dimana:</p>
                            <p>Ekrot =  Energi Kinetik Rotasi (Joule) </p>
                            <p>I     =  Momen Inersia benda (kg.m2)  </p>
                            <p>ῳ     =  Kecepatan Sudut benda (rad/s)  </p>
                            <p><strong>Gerak Menggelinding  </strong></p>
                            <img src="modul1.10.png" ></img>
                            <p>Pada gambar di atas, suatu benda bergerak menggelinding, maka benda tersebut 
                               melakukan gerak translasi (memiliki v) sekaligus gerak rotasi memiliki (ῳ). Oleh 
                               karena itu, energi kinetik yang dimiliki benda juga terdiri atas energi kinetik 
                               translasi dan rotasi, sehingga diperoleh : </p>
                               <img src="modul1.11.png" ></img>
                            
                            <p><strong>Momentum Sudut (L)</strong></p>
                            <p>Momentum sudut (L) didefinisikan sebagai perkalian silang antara vektor 
                               momentum linear benda p dan vektor posisi r.  </p>
                            <img src="modul1.12.png" ></img>
                            <p>Momentum sudut L persamaannya dapat ditulis :</p>
                            <p>L =𝐼.𝜔 </p>
                            <p>Dimana:</p>
                            <p>L  :  Momentum sudut (kg. m2/s) </p>
                            <p>I  :  Momen inersia benda (kg.m2)  </p>
                            <p>ῳ  :  Kecepatan sudut (rad/s)  </p>
                    
                </ul>     
            </section>
    
            <section className="card"> 
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
                            <td>Momen Inersia</td>
                            <td>I = Σmᵢrᵢ²</td>
                            <td>rᵢ = jarak partikel ke sumbu rotasi</td>
                        </tr>
                        <tr>
                            <td>Hubungan Torque</td>
                            <td>τ = r × F</td>
                            <td>r = lengan gaya, F = gaya</td>
                        </tr>
                        <tr>
                            <td>Energi Kinetik Rotasi</td>
                            <td>E = (1/2)Iω²</td>
                            <td>ω = kecepatan sudut</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="card">
                <h2>Contoh Aplikasi</h2>
                <p>
                    Dinamika rotasi banyak diaolikasikan dalam kehidupan sehari-hari,
                    seperti roda mobil, mesin turbin, dan permainan bola.
                </p>
            </section>
        </div>~
        </div>
    );
};

export default Modul1;