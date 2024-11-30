import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login =() => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState('');
    const [message, setMessage] = useState ('');
    const [isError, setIsError] = useState ('');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    
    const handleLogin = (event) => {
        event.preventDefault();
        const storedemail = localStorage.getItem("email");
        const storedpassword = localStorage.getItem("password");

        setUsername('');
        setEmail('');
        setPassword('');
       
        if (email === storedemail && password === storedpassword) {
            setMessage("Eaa berhasil login");
            setIsError(false);
            navigate ('/MenuHome');
        } else {
            setMessage("Salah pasti password mu");
            setIsError(true);
        }
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
            }}>Sign In Here</h3>

            <form onSubmit={handleLogin} style={{
                display:"grid",
                gap:"15px"
            }}>

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
                <p>Don't Have An Account?
                    <button
                        className="btn btn-link"
                        onClick={() => navigate('/daftar')}>
                            Sign Up Here
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

export default Login;