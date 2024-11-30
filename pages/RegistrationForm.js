import React from "react";
import { useState } from "react";
import { useNavigate , } from "react-router-dom";

const RegistrationForm =() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [schoolname, setSchoolname] = useState('');
    const [message, setMessage] = useState('');
    const [schooladdress, setSchooladdress] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [district, setDistrict] = useState('');
    const [province, setProvince] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSchoolnameChange = (event) => {
        setSchoolname(event.target.value);
    };

    const handleSchooladdressChange = (event) => {
        setSchooladdress(event.target.value);
    };

    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
    };

    const handleProvinceChange = (event) => {
        setProvince(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };


    const handleTogglePasswordVisibility = () => setShowPassword (!showPassword);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(`Mauliate, ${username}! Kamu telah mendaftar di web ini.`);

        localStorage.setItem("username" , username);
        localStorage.setItem("password", password);
        alert("registrasi berhasil silahkan login");
        navigate('/Loginform');
    

        setUsername('');
        setPassword('');
        setSchoolname('');
        setSchooladdress('');
        setDistrict('');
        setProvince('');
        setDate('');
    };

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
                
            <h2 className="text-center">Registration Form</h2>
            <form onSubmit={handleSubmit} className="mt-4"
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
                <div className="mb-3">
                <label htmlFor="schoolname" className="form-label">School Name:</label>
                <input
                type="text"
                id="schoolname"
                className="form-control"
                value={schoolname}
                onChange={handleSchoolnameChange}
                required
                />
                </div>

                <div className="mb-3">
                <label htmlFor="schooladdress" className="form-label">School Address:</label>
                <input
                type="text"
                id="schooladdress"
                className="form-control"
                value={schooladdress}
                onChange={handleSchooladdressChange}
                required
                />
                </div>
                <div className="mb-3">
                <label htmlFor="district" className="form-label">District:</label>
                <input
                type="text"
                id="district"
                className="form-control"
                value={district}
                onChange={handleDistrictChange}
                required
                />
                </div>
                <div className="mb-3">
                <label htmlFor="province" className="form-label">Province:</label>
                <input
                type="text"
                id="province"
                className="form-control"
                value={province}
                onChange={handleProvinceChange}
                required
                />
                </div>
                <div className="mb-3">
                <label htmlFor="date" className="form-label">Date Of Birth:</label>
                <input
                type="date"
                id="date"
                className="form-control"
                value={date}
                onChange={handleDateChange}
                required
                />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            {message && <div className="alert alert-success mt-3"><p>{message}</p></div>}
        </div>
        </div>
    );
};

export default RegistrationForm;