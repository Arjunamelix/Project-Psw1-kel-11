import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Facilities = () => {
    const [selectedFacility, setSelectedFacility] = useState(null);
    const [hoveredFacility, setHoveredFacility] = useState(null);

    const facilities = [
        {name:"Library" , description:
            `Perpustakaan sekolah adalah tempat seru buat siswa yang hobi membaca atau penasaran dengan hal-hal baru.
            Selain koleksi buku pelajaran, perpustakaan punya banyak buku menarik lainnya seperti novel, buku komik, dan majalah yang bisa dinikmati di waktu luang. 
            Tempat ini juga dilengkapi komputer dan akses internet untuk membantu siswa mencari informasi atau mengerjakan tugas. Dengan suasana nyaman dan tenang,
             perpustakaan jadi tempat asyik buat belajar, diskusi, atau sekadar bersantai sambil membaca. Kadang, ada juga acara seru seperti diskusi buku atau 
             workshop kreatif yang bikin kegiatan membaca jadi lebih seru dan interaktif`, 
             image:"gbrperpus.png"},
        {name:"Science Lab" , description:`
            Science lab sekolah adalah tempat keren buat eksplorasi ilmu pengetahuan! Di sini, siswa bisa mencoba eksperimen, 
            mulai dari yang sederhana sampai yang lebih kompleks, menggunakan peralatan seperti mikroskop, tabung reaksi, dan 
            bahan-bahan kimia yang menarik. Suasana lab yang penuh alat-alat unik bikin siswa lebih dekat dengan dunia sains 
            secara langsung, daripada sekadar membaca teori di buku. Science lab juga jadi tempat untuk belajar dengan cara yang seru,
             terutama saat melakukan praktik yang membuat teori di kelas jadi lebih hidup. Dengan panduan guru, siswa bisa menguji teori, 
             bereksperimen, dan menemukan hal-hal baru yang bikin sains terasa seru dan menantang!`, 
             image:"gbrlab.png"},
        {name:"Computer Lab" , description:`Computer lab sekolah adalah tempat di mana siswa bisa mengeksplorasi dunia digital dengan berbagai macam kegiatan. 
            Di sini, kamu bisa belajar komputer, mengerjakan tugas, atau bahkan mencoba program dan aplikasi baru yang seru. Setiap meja di lab dilengkapi dengan
             komputer canggih yang terhubung ke internet, jadi kamu bisa mencari informasi atau berlatih keterampilan digital. Selain itu, lab komputer juga jadi 
             tempat asyik untuk belajar coding, desain grafis, atau bahkan game programming. Dengan suasana yang nyaman dan guru yang siap membantu, lab komputer 
             membuat belajar teknologi jadi lebih menyenangkan dan bermanfaat untuk masa depan!`, 
            image:"computerlab.png"},
        {name:"Sports Ground" , description:`
            Sports ground sekolah adalah tempat di mana seru-seruan dan olahraga bertemu! Di lapangan ini, siswa bisa berlari, bermain sepak bola, basket, atau 
            olahraga lainnya yang bikin tubuh tetap aktif dan sehat. Dengan area yang luas dan fasilitas lengkap, seperti lapangan sepak bola, basket, dan lintasan 
            lari, sports ground jadi tempat yang sempurna untuk berlatih, berkompetisi, atau sekadar bersenang-senang bersama teman-teman. Suasana yang ramai dan 
            penuh semangat membuat lapangan ini selalu jadi favorit saat ada pertandingan antar kelas atau kegiatan olahraga sekolah. Di sini, belajar tentang kerja
             sama tim dan semangat juang jadi bagian dari pengalaman yang tak terlupakan!`, 
            image:"ground.png"},
        {name:"Auditorium" , description:`
            Auditorium sekolah adalah tempat seru untuk berbagai acara keren, mulai dari pertunjukan seni, seminar, hingga upacara sekolah. Ruangannya luas dengan 
            panggung yang bisa dipakai untuk pentas atau presentasi, jadi cocok banget untuk berbagai kegiatan yang melibatkan banyak orang. Dengan kursi yang nyaman
             dan tata suara yang oke, auditorium jadi tempat yang pas untuk menikmati pertunjukan atau acara spesial. Selain itu, auditorium juga sering jadi lokasi 
             untuk acara seperti lomba, pelatihan, dan bahkan pesta kelulusan. Suasana di dalamnya selalu penuh energi, bikin setiap acara jadi lebih seru dan berkesan!`,
            image:"audi.png"}
    ];

    const handleFacilityClick = (facility) => {
        setSelectedFacility(facility);
    };

    const handleMouseEnter = (facility) => {
        setHoveredFacility(facility);
    };
    
    return (
        <div style={{
            background:"#f4f4f9",
            minHeight:"100vh",
            background:"linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"
        }}>
             <Navbar />
            <h2>Fasilitas Sekolah Nih</h2>
            <ul style={{
                display:"flex",
                flexWrap:"wrap",
                gap:"20px",
                justifyContent:"space-evenly",
                padding: "20px 0",
                fontFamily:"'Roboto', sans-serif",
                fontSize:"1.3rem",
                backgroundColor:"transparent" , 
                borderRadius:"8px",
                boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",
                lineHeight:"1.6",
                color:"#333",
                }}>

                {facilities.map((facility, index) => (
                    <li 
                    key={index}
                    onClick={() => handleFacilityClick(facility)}
                    onMouseEnter={() => handleMouseEnter(facility)}
                    onMouseLeave={()=>setHoveredFacility(null)}
                    style={{
                        padding:"15px",
                        margin:"10px 0",
                        cursor:"pointer",
                        backgroundColor:
                        selectedFacility === facility ? "#ffb74d" :
                        hoveredFacility === facility ? "#e1f5fe" : "#ffffff",
                        border:"1px solid #ccc",
                        borderRadius:"10px",
                        boxShadow: hoveredFacility === facility 
                        ?  "0 4px 10px rgba(0, 0, 0, 0.2)" 
                         : "0 2px 5px rgba(0, 0, 0, 0.1)",
                        transition:"background-color 0.3s, box-shadow 0.3s,  transform 0.3s",
                        transform: hoveredFacility === facility ? "scale(1.05)" : "scale(1)",
                        color:"#333"
                    }}
                    >
                        {facility.name}
                        </li>
                ))}
            </ul>

            {selectedFacility && (
                <div style={{
                    marginTop:"20px",
                    padding:"20px",
                    border:"1px solid #ddd",
                    borderRadius:"10px",
                    boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",
                    maxWidth:"700px",
                    margin:"20px auto",
                    textAlign:"center",
                    
                }}>
                    <h3>{selectedFacility.name}</h3>
                    <p>{selectedFacility.description}</p>
                    <img src={selectedFacility.image} alt={selectedFacility.name}
                    style={{
                        width:"100%",
                        height:"auto",
                        borderRadius:"8px",
                        marginTop:"15px",
                        
                    }} />
                </div>
            )}
        </div>
    );
};

export default Facilities;