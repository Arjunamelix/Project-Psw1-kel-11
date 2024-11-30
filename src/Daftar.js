import React from "react";
import { useState } from "react";
import { useNavigate , } from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";

const Daftar =() => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    
    const handleTogglePasswordVisibility = () => setShowPassword (!showPassword);

    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem("email" , email);
        localStorage.setItem("password", password);
        alert("registrasi berhasil silahkan login");
        navigate('/Login');
    
        setEmail('');
        setUsername('');
        setPassword('');
    };

    return (
        <div
        style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            minHeight:"100vh",
            backgroundColor:"#F0F4F8",
            padding:"20px",
        }}>
        <div style={{
                display:"flex",
                flexDirection:"row",
                backgroundColor:"#fff",
                borderRadius:"10px",
                boxShadow:"0 8px 20px rgba(0, 0, 0, 0.1)",
                maxWidth:"800px",
                width:"100%",
                overflow:"hidden",
                border:"1px solid #ddd",
            }} >

            <div style={{
                width:"50%",
                overflow:"hidden",
                position:"relative",
            }}>
                <video style={{
                    width:"100%",
                    height:"100%",
                    objectFit:"cover",
                }}
                src="bgvideo.mp4"
                autoPlay
                loop
                muted
                />
            </div>

            <div style={{
                padding:"40px",
                width:"50%",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
            }}>
            
            <h3 style={{
                color:"#003366",
                fontWeight:"600",
                marginBottom:"20px",
                fontSize:"24px",
                textAlign:"center"
            }}>Sign Up Here</h3>

            <form onSubmit={handleSubmit} style={{
                display:"grid",
                gap:"15px"
            }}>

                    <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required 
                    style={{
                        padding:"12px",
                        fontSize:"16px",
                        borderRadius:"5px",
                        border:"1px solid #ddd",
                        boxShadow:"inset 0 1px 2px rgba(0, 0, 0, 0.1)",
                        transition:"all 0.3s"
                    }}
                />

                    <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    style={{
                        padding:"12px",
                        fontSize:"16px",
                        borderRadius:"5px",
                        border:"1px solid #ddd",
                        boxShadow:"inset 0 1px 2px rgba(0, 0, 0, 0.1)",
                        transition:"all 0.3s"
                    }}
                />
                
                
                <div style={{
                    position:"relative"
                }}>
                    <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        padding:"12px",
                        fontSize:"16px",
                        borderRadius:"5px",
                        border:"1px solid #ddd",
                        width:"100%",
                        boxShadow:"inset 0 1px 2px rgba(0, 0, 0, 0.1)",
                        transition:"all 0.3s"
                    }}
                    />
                </div>

                <button type="submit"
                    style={{
                        marginTop:"20px",
                        justifyContent:"center",
                        padding:"12px",
                        fontSize:"18px",
                        borderRadius:"5px",
                        border:"none",
                        width:"100%",
                        backgroundColor:"#4A90E2",
                        color:"#ffffff",
                        cursor:"pointer",
                        transition:"background-color 0.3s ease"
                    }}

                    onMouseEnter={(e) => 
                        (e.target.style.transform="scale(1.05)")
                    }
                    onMouseLeave={(e) => 
                    (e.target.style.transform="scale(1)")
                    }

                >Sign Up</button>           
                
            <div className="mt-3 text-center">
                <p>Have An Account?
                    <button
                        className="btn btn-link"
                        onClick={() => navigate('/login')}>
                            Sign In Here
                    </button>
                </p>
            </div>
            </form>
            {message && <div style={{
                fontSize:"18px",
                padding:"10px",
                borderRadius:"5px",
                border:"none",
                backgroundColor:"#DFF0D8",
                color:"#3C763D",
                cursor:"pointer",
                transition:"all 0.3 ease",
                boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",
                
            }}>
                {message}

    

        </div>}
        </div>
        </div>
        </div>
    );
};

export default Daftar;