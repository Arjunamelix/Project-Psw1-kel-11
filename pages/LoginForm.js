import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm =() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState('');
    const [message, setMessage] = useState ('');
    const [isError, setIsError] = useState ('');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const storedusername = localStorage.getItem("username");
        const storedpassword = localStorage.getItem("password");

        setUsername('');
        setPassword('');
       
        if (username === storedusername && password === storedpassword) {
            setMessage("Eaa berhasil login");
            setIsError(false);
            navigate ('/Homepage');
        } else {
            setMessage("Salah pasti password mu");
            setIsError(true);
        }
    };

    const handleGoToRegister = () => {
        navigate('/register');
    }

    return (
    <div
        style={{
            backgroundImage:`url('background.jpg')`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            minHeight:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            padding:"20px",
        }}
            >
        <div className="container mt-5"
         style={{
            backgroundColor:"rgba(0, 51, 102, 0.9)",
            padding:"30px",
            borderRadius:"8px",
            boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth:"500px",
            width:"100%",
            borderColor:"#ccc",
        }} >
            <h2 className="text-center">Silahkan Login</h2>
            <form onSubmit={handleLogin} className="mt-4"
             style={{
                backgroundColor:"#003366",
                color:"white",
                padding:"20px",
                borderRadius:"8px"
            }}
            >
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <div className="input-group">
                    <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    />          
                    </div>
                    </div>
                <button 
                type="submit" 
                className="btn btn-primary"
                >Login 
            </button>
            </form>
            {message && (
                <div className={`alert mt-3 ${isError ? 'alert-danger' : 'alert-success'}`}>
                <p>{message}</p>
            </div>
            )}

            <div className="mt-3 text-center">
                <button
                onClick={handleGoToRegister}
                className="btn btn-link"
                style={{
                    backgroundColor:"#28a745",
                    color:"#fff",
                    border:"none",
                    padding:"10px 20px",
                    borderRadius:"5px",
                    textDecoration:"none",
                    fontSize:"16px"
                }}>
                    gapunya akun? daftar dulu
                </button>
            </div>

        </div>
    </div>
    );
};

export default LoginForm;