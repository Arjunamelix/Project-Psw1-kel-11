import React, {useEffect, useState} from "react";
import {Nav, Container, Button } from "react-bootstrap";
import { useNavigate, useLocation} from "react-router-dom";
import Navbar from "../components/Navbar";

const Profil = () => {
const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
    const introtext = document.querySelector(".intro-text");
    if (introtext) {
    introtext.style.opacity ="0";
    setTimeout(() => {
        introtext.style.transition ="opacity 1.5s ease-in-out";
        introtext.style.opacity ="1";
    }, 100);
}
}, []);

useEffect(() => {
    document.body.style.background = "linear-gradient(135deg, #f7f4e9, #e6ffe6)";

    return() => {
        document.body.style.background= "";
    };
},[]);

const activeStyle = {
    backgroundColor:"#343a40",
    color:"white",
};

const defaultStyle = {
    color:"#000",
};

const Teksselengkapnya = () => {
    const[isExpanded, setIsExpanded] = useState(false);


    const text = "";
    const moretext = `
        Nama Sekolah: SMAN 1 Stabat <br /> 
        <br/>
        Alamat: Jl. KH. Zainul Arifin No. 62, Kec. Stabat, Kab. Langkat, Sumatera Utara <br />
        <br/>
        Tahun Berdiri: 1957 <br />
        <br/>
       Visi: <br/>
       <br/>
        Menjadi sekolah unggul dalam prestasi, berkarakter, dan berwawasan lingkungan. <br/>
        <br/>
        Misi: <br/>
        <br/>
        Menyelenggarakan pendidikan berkualitas untuk menghasilkan lulusan berprestasi.
            Menumbuhkan sikap disiplin, jujur, dan bertanggung jawab pada siswa.
            Membudayakan cinta lingkungan melalui berbagai kegiatan eco-school.
            Meningkatkan kompetensi guru dan tenaga kependidikan.
            Membangun sinergi yang baik dengan orang tua dan masyarakat. <br/>
            <br/>
            Prestasi: <br/>
            <br/>
            SMAN 1 Stabat telah melahirkan banyak alumni berprestasi baik di tingkat nasional maupun internasional 
            dalam bidang akademik dan non-akademik. Salah satu prestasi unggulan adalah juara olimpiade sains 
            tingkat provinsi dan juara lomba debat bahasa Inggris tingkat nasional. <br/>`; 

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return(
        <div>
            <Navbar />
            <p
            style={{
                fontFamily:"'Roboto', sans-serif",
                    fontSize:"1.3rem",
            }}>
            SMAN 1 Stabat adalah salah satu sekolah menengah atas yang berlokasi di Kabupaten Langkat.</p>
                {isExpanded && (
                <p dangerouslySetInnerHTML={{__html:moretext}} 
                style={{
                    backgroundColor:"transparent" , 
                    padding:"20px",
                    borderRadius:"8px",
                    boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",
                    fontFamily:"'Roboto', sans-serif",
                    fontSize:"1.3rem",
                    lineHeight:"1.6",
                    color:"#333",
                }}
                /> )}
                <Button variant="link" onClick={toggleText}>
                    {isExpanded ? "Sembunyikan" : "Selengkapnya"}
                </Button>
        </div>
    );
};

    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            // alignItems:'center',
            textAlign:'center',
            padding:'20px',
        }}
        > 
        <Teksselengkapnya/>
        </div>
    )
}

export default Profil;