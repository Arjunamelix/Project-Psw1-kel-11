import React, {useEffect, useState} from "react";
import {Nav, Container, Button, Form} from "react-bootstrap";
import { useNavigate, useLocation} from "react-router-dom";
import Navbar from "../components/Navbar";

const Contact = () => {
const navigate = useNavigate();
const location = useLocation();

const [name, setName] = useState("");
const [email, setEmail] = useState ("");
const [message, setMessage] = useState ("");
const [error, setError] = useState ("");
const [successMessage, setSuccessMessage] = useState ("");

const handleSubmit = (e) => {
    e.preventDefault();

if (!name || !email || !message){
    setError("semuanya harus diisi!!");
    return;
}
    setError("");

    setSuccessMessage("Curhatan kamu sudah diterima yaa");
    setTimeout(() => {
        setSuccessMessage("");
    }, 7000);

    console.log({name, email, message});

    setName("");
    setEmail("");
    setMessage("");
}

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

    return (
        <div>
            <Navbar/>
            <div className="text-center mb-4">
                <h2>Form Contact</h2>
                <p style={{
                    fontSize:"1rem",
                    marginBottom:"20px"
                }}>
                    Kalo ada beban pikiran bilang aja sini
                </p>

                {error && (
                    <div style={{
                    color:'red',
                    fontWeight:'bold',
                    marginBottom:'10px'
                }}>
                    {error}
                    </div>

            )}

            {successMessage && (
                <div style={{
                    color:"green",
                    fontWeight:"bold",
                    marginBottom:"20px"
                   }} 
                   >
                    {successMessage}
                    </div>
            )}

                <Form style={{
                    maxWidth:"600px",
                    margin:"0 auto"
                }}
                onSubmit={handleSubmit}
                >
                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Label>Namamu:</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ketik namamu"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Emailmu:</Form.Label>
                        <Form.Control type="email" 
                        placeholder="Ketik emailmu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="FormMessage" className="mb-3">
                        <Form.Label>Curhatanmu:</Form.Label>
                        <Form.Control 
                        as="textarea"
                        rows={4} 
                        placeholder="Silahkan curhat"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                         />
                    </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>
                </Form>
            </div> 
        </div>
    );
};

export default Contact;