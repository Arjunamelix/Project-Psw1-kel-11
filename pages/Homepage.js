import React from "react";
import Navbar from "../components/Navbar";

const Homepage = () => {
    return (
    <div className="container my-5"
        style={{
            backgroundColor:"#f4f4f9",
            minHeight:"100vh"
        }}
    >
        <Navbar />
        <header className="text-center mb-4">
        <h1 className="display-4"
        style={{
            color:"#4CAF50"
        }}
        >Welcome to SMAN 1 STABAT</h1>
        <p className="lead"
        style={{
            fontWeight:"bold",
            color:"#333"
        }}
        >Sekolah yang akan membuat anda sukses nantinya dimasa depan</p>
        </header>

    <section className="mb-5">
        <h2 className="text-center mb-3"
        style={{
            color:"#4CAF50"
        }}
        >Sekilas tentang SMAN Stabat</h2>
        <p className="text-justify" 
        style={{
            color:"#555"
        }}
        >
        SMAN 1 Stabat merupakan sekolah menengah atas yang berkomitmen dalam menciptakan lingkungan belajar 
        yang mendukung perkembangan akademik dan non-akademik siswa. Dengan tenaga pendidik yang profesional 
        dan fasilitas yang modern, SMA Stabat terus berinovasi untuk menjadi sekolah unggulan di tingkat nasional. 
        Kami bertekad untuk membangun generasi penerus bangsa yang cerdas, kreatif, dan memiliki karakter unggul.
        </p>
    </section>

    <section>
        <h2 className="text-center mb-4"
        style={{
            color:"#4CAF50"
        }}
        >Beberapa cerita di sini</h2>
        <div className="row">
            <div className="col-md-4 mb-4">
            <div className="card shadow-sm"
            style={{
                transition:"transform 0.3s",
                borderRadius:"10px"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)"
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0px 2px 6px rgba(0, 0, 0, 0.1)"
            }}
            >
                <img
                src="/smansa-min.png"
                alt="gambar1"
                className="card-img-top"
                style={{
                    width:"100%", 
                    height:"250px", 
                    objectFit:"cover", 
                    borderRadius:"10px"}}
                />
                <div className="card-body">
                    <h5 className="card-title"
                    style={{
                        color:"#333"
                    }}
                    >Proses Antri Masuk Para Siswa</h5>
                    <p className="card-text"
                    style={{
                        color:"#555"
                    }}
                    >
                    Para Siswa diwajibkan untuk antri masuk dengan rapi
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card shadow-sm"
            style={{
                transition:"transform 0.3s",
                borderRadius:"10px"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)"
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0px 2px 6px rgba(0, 0, 0, 0.1)"
            }}
            >
                <img
                src="/smansa2-min.png"
                alt="gambar2"
                className="card-img-top"
                style={{width:"100%" , height:"250px", objectFit:"cover", borderRadius:"10px"}}
                />
                <div className="card-body">
                    <h5 className="card-title"
                     style={{
                        color:"#333"
                    }}
                    >View Smansa Stabat Dari Seberang</h5>
                    <p className="card-text"
                    style={{
                        color:"#555"
                    }}
                    >
                    View Smansa Stabat ketika dilihat dari seberang jalan
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card shadow-sm"
            style={{
                transition:"transform 0.3s",
                borderRadius:"10px"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)"
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0px 2px 6px rgba(0, 0, 0, 0.1)"
            }}
            >
                <img
                src="/smansa3-min.png"
                alt="gambar3"
                className="card-img-top"
                style={{width:"100%" , height:"250px", objectFit:"cover", borderRadius:"10px"}}
                />
                <div className="card-body">
                    <h5 className="card-title"
                    style={{
                        color:"#333"
                    }}
                    >View Smansa Stabat Dari Depan</h5>
                    <p className="card-text"
                    style={{
                        color:"#555"
                    }}
                    >
                    View Smansa Stabat ketika dilihat dari depan gerbang
                    </p>
                </div>
            </div>
            </div>
        </div>
    </section>
    </div>
    );
};

export default Homepage;