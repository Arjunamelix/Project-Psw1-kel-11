import React from "react";
import Navbar from "../components/Header";
import { useNavigate } from "react-router-dom";

const Modul2 = () => {
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
                <h1>ELASTISITAS BAHAN</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <section className="card">
                <strong>1. Apa	Elastistas	itu	?</strong>
                <p>Kekenyalan	dalam	fisika	diistilahkan	dengan Elastisitas	adalah	suatu	sifat	bahan	
                   yang	dapat	berubah	baik	dalam	ukuran	 maupun	bentuk setelah	mendapat	gaya	
                   luar,	 tetapi	benda	itu	akan	kembali	ke	ukuran dan	bentuk semula	setelah	gaya	
                   luar	itu	ditiadakan.   
                </p>
                <p>Dalam	 fisika,	 fenomena	 elastisitas	 ini	 perlu	 dinyatakan	 dalam	 suatu	 angka	 agar	
                   dapat	 diketahui	 potensinya	 dan	 dapat	 dimanfaatkan	 secara	 maksimal	 untuk	
                   berbagai	keperluan	alat	maupun	teknologi.
                   Bagaiman	penjelasan	fisikanya?</p>
                <p>Elastisitas	 kekenyalan	 suatu	 bahan	 dapat	 dipahami	 melalui	 struktur	 mikronya,	
                   yaitu	berkaitan	dengan	molekul-molekul	penyusun	bahan	itu.	Kebanyakan	bahan	
                   tersusun	atas	atom-atom	atau	molekul-molekul	yang	rapi	menurut	pola-pola	yang	
                   tetap	 yang	 disebut	 struktur	 kekisi dari	 bahan	 itu.	 Atom-atom	 atau	 molekulmolekul	 tersebut	 menempel	 kukuh	 diposisinya	 masing-masing	 pada	 pola-pola	
                   tertentu	karena	dijaga	oleh	gaya	antarmolekul.</p>
                <p>Jadi,	 elastisitas	 bahan	 merupakan	 akibat	 adanya	 gaya-gaya	 antarmolekul	
                   yang	merakit	bahan	tersebut.</p>
                <img 
                 src="modul2.png"
                 style={{width: "300px", height: "200px", placeItems: "center"}}
                 />
                <p>Gambar 1.Karet	ditarik	disela-sela	dua	jari	tangan</p>
                <p>Siapkan	sebuah	karet	dan	lakukan	seperti	gambar
                   Rasakan	apa	yang	terjadi	kemudian	jelaskan	menurut	kalimat	sendiri,	apa	yang	
                   anda	rasakan	Ketika	:</p>
                <p>- Posisi	karet	tepat	Ketika	membentuk	posisi	seperti	gambar</p>
                <p>- Jauhkan	jarak	kedua	jari	ke	kanan-kiri	dengan	tetap	mempertahankan	posisi	
                     karet	ditempat	yang	sama,	apa	yang	anda	rasakan?	(semakin	berat/sakit	atau	
                     sama	saja	tidak	semakin	berat/semakin	sakit?)	</p>
                <p>- Tuliskan	alasan	apa	yang	anda	rasakan	dengan	kalimat	anda	sendiri.</p>
                <p>Kesimpulan	:	karet	akan	kembali	ke	ukuran	dan	bentuk	semula,	setelah	kedua	jari	
                   anda	lepaskan	peristiwa	ini	disebut	elastisitas	bahan.</p>
                <p><strong>a. Tegangan	(Stress)</strong></p>
                <img
                 src="modul2.1.png"
                 style={{width: "300px", height: "90px"}}
                 />
                 <p>Tegangan	menyatakan	perbandingan	antara	gaya	dengan	luasan	yang	
                    mendapat	gaya,	bila	dinyatakan	dalam	persamaan	ditulis	sebagai	:</p>
                 <img
                 src="modul2.2.png"
                 style={{width: "50px", height: "45px"}}
                 />
                 <p>Dengan :</p>
                 <p>σ	=	tegangan	(N/m2)</p>
                 <p>F	=	Gaya	(Newton)	dan</p>
                 <p>A	=	Luas	bidang	yang	dikenai	gaya	(m2)</p>

                 <p>Menurut	persamaan	tersebut,	nilai	tegangan	akan	semakin	besar	apabila	:</p>
                 <p>1. Gaya	besar</p>
                 <p>2. Luasan	kecil</p>
                 <p>3. Gaya	besar	dan	luasan	kecil.</p>

                 <strong>b. Regangan	(Strain)</strong>
                 <p>Sebuah	 tabung	 yang	 panjang	 semula	 Lo	 ditarik	 oleh	 gaya	 F	 sehingga	
                    panjangnya	 bertambah	 menjadi	 Lo +	 ∆L.	 Pada	 perubahan	 tersebut	 tabung	
                    mengalami	 regangan,	 yaitu besaran	 yang	 menyatakan	 perbandingan	 antara	
                    perubahan	 panjang	 terhadap	 panjang	 semula,	 untuk	 menghitung	 regangan	
                    dapat	dihitung	dengan	rumus	:</p>

                <img
                 src="modul2.3.png"
                 style={{width: "300px", height: "200px"}}
                 />

                 <p>Dengan :</p>
                 <p>∆L	:	pertambahan	panjang	(m)</p>
                 <p>Lo  :	panjang	semula	(m)</p>
                 <p>e	:	regangan	(tanpa	satuan)</p>

                 <p>Menurut	 persamaan	 tersebut	 strain tidak	 bersatuan,	 karena	 merupakan	
                    perbandingan	 antara	 dua	 besaran	 pokok	 yang	 sama,	 strain	 merupakan	
                    ukuran	 pertambahan	 panjang	 benda	 ketika	 diberi	 gaya,	 jika	 nilai	 strain	
                    besar,	 artinya	 benda	 itu	 mudah	 bertambah	 panjangnya,	 misalkan	 karet	
                    memiliki	nilai	strain	lebih	besar	dari	pada	pegas	pada	mobil,	karena	karet	
                    ketika	 diberi	 gaya	 kecil	 saja	 akan	 mengalami	 pertambahan	 panjang	 yang	
                    besar.</p>

                <strong>c. Modulus	Elastisistis atau	Modulus	Young</strong>
                <p>Dua	 besaran	 yang	 telah	 kita	 bahas	 diatas,	 yaitu	 tegangan	 dan	 regangan	
                   sebenarnya	 terjadi	 secara	 bersamaan,	 yaitu	 ketika	 benda	 mendapat	 gaya	
                   dalam	 arah	 sejajar	 dengan	 panjang	 benda	 maka	 gaya	 persatuan	 luasnya	
                   menghasilkan	tegangan,	dengan	tegangan	ini	benda	akan	bertambah	panjang	
                   sehingga	jika	pertambahan	panjangnya	dibandingkan	dengan	panjang	semula	
                   maka	diperoleh	nilai	regangan	.	</p>
                <p>Perbandingan	 antara	 besaran	 tegangan	 dan	 besaran	 regangan	 dinyatakan	
                   sebagai	modulus	elastisitas,	yaitu	angka	yang	menunjukkan	ketahanan	bahan	
                   untuk	 mengalami	 deformasi	 (perubahan),	 makin	 besar	 nilai	 modulus	
                   elastisitas	benda,	makin	sulit	benda	 tersebut	mengalami	perubahan.	Secara	
                   perhitungan,	untuk	menentukan	modulus	elastisitas	atau	kadang	disebut	juga	
                   modulus	Young,	digunakan	persamaan	berikut	:</p>
                   <img
                 src="modul2.4.png"
                 style={{width: "50px", height: "45px"}}
                 />

                 <p>Dengan :</p>
                 <p>σ	= tegangan	(N/m2)</p>
                 <p>e	=	regangan</p>
                 <p>Y	=	modulus	elastisitas	(N/m2	=	Pascal)</p>

                 <p>Atau persamaan lain</p>
                 <img
                 src="modul2.5.png"
                 style={{width: "80px", height: "40px"}}
                 />
                 <p>∆L	:	pertambahan	panjang	(m)</p>
                 <p>Lo :	panjang	semula	(m)</p>
                 <p>F	=	Gaya	(Newton)	dan</p>
                 <p>A	=	Luas	bidang	yang	dikenai	gaya	(m2)</p>

                 <p>Berikut	tabel nilai	modulus	elastisitas	beberapa	bahan	untuk	memberi	
                    gambaran	tentang	kualitas	bahan	dalam	hubungannya	dengan	deformasi	
                    (perubahan	bentuk,	dimensi	maupun	posisi) :</p>
                
                <img
                 src="modul2.6.png"
                 style={{width: "250px", height: "300px"}}
                 />

                 <p>Tabel 1. modulus elastisitas bahan</p>
                 <p>Dari	table	nampak	bahwa	nilai	terkecil	dari modulus	elastisitas	(modulus	
                    Young)	 adalah	 karet,	 yang	 artinya	 karet	 adalah	 bahan	 paling	 mudah	
                    mengalami	perubahan	bentuk diantara	bahan-bahan	yang	dituliskan	pada	
                    table.</p>



            </section>
            </section>
            <section>
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Modulus Elastisitas (E):</strong> Perbandingan antara teganganb (stress) dan regangan (strain).
                    </li>
                    <li>
                        <strong>Hukum Hoke:</strong> Tegangan sebanding dengan regangan, selama batas elastisitas tidak terlampaui.
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
                            <td>Tegangan (Stress)</td>
                            <td>σ = F / A</td>
                            <td>F = gaya, A = luas penampang</td>
                        </tr>
                        <tr>
                            <td>Regangan (Strain)</td>
                            <td>ε = ΔL / L₀</td>
                            <td>ΔL = perubahan panjang, L₀ = panjang awal</td>
                        </tr>
                        <tr>
                            <td>Modulus Elastisitas</td>
                            <td>E = σ / ε</td>
                            <td> = tegangan, ε = regangan</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                   Elastisitas bahan diaplikasikan dalam berbagai bidang seperti teknik mesin, konstruksi, dan desain material, misalnya perancangan jembatan, pegas kendaraan dan kabel baja.
                </p>
            </section>
        </div>
        </div>
    );
};

export default Modul2;