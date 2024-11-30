import React from "react";
import Navbar from "../components/Header";
import { useNavigate } from "react-router-dom";

const Modul6 = () => {
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
            <style >
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
                <h1>TEORI KINETIK GAS</h1>
            </header>
            <section>
                <h2>Pendahuluan</h2>
                <p>
                    Teori kinetik gas menjelaskan sifat gas berdasarkan gerakan pertikel-partikelnya.
                    Gas dianggap terdiri dari partikel kecil yang bergerak secara acak dan terus-menerus.
                </p>
            </section>
            <section>
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Energi Kinetik:</strong> Energi partikel gas yang bergerak, berbanding lurus dengan suhu mutlaknya.
                    </li>
                    <li>
                        <strong>Tekanan Gas:</strong> Diakibatkan oleh tumbukan partikel gas dengan dinding wadah.
                    </li>
                    <li>
                        <strong>Hukum Gas Ideal:</strong> Menjelaskan hubungan antara tekanan, volume, suhu, dan jumlah mol gas.
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
                            <td>Hukum Gas Ideal</td>
                            <td>PV = nRT</td>
                            <td>P = tekanan, V = volume, n = jumlah mol, R = konstanta gas, T = suhu mutlak</td>
                        </tr>
                        <tr>
                            <td>Energi Kinetik Rata-rata</td>
                            <td>E_k = ½mv² = ³/₂ kT </td>
                            <td>m = massa partikel, v = kecepatan partikel, k = konstanta Boltzmann, T = suhu mutlak</td>
                        </tr>
                        <tr>
                            <td>Kecepatan Efektifi</td>
                            <td>v_rms = √(3RT/M)</td>
                            <td>R = konstanta gas, T = suhu mutlak, M = massa molar gas</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Contoh Aplikasi</h2>
                <p>
                   Teori kinetik gas digunakan untuk memahami perilaku gas dalam mesin pembakaran internak, pendingin udara, balon udara, dan studi termodinamika.
                </p>
            </section>
        </div>
        </div>
    );
};

export default Modul6;