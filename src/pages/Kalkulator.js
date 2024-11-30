import React, { useState } from "react";

const Kalkulator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleButtonClick = (value) => {
        if (value === "=") {
            try {
                setResult(eval(input));
            } catch {
                setResult("Error");
            }
        } else if (value === "C") {
            setInput("");
            setResult("");
        } else if (value === "⌫") {
            setInput((prev) => prev.slice(0, -1));
        } else if (value === "v = s / t") {
            setResult("Masukan s dan t, lalu hitung");
        } else if (value === " F = m * a") {
            setResult("Masukan m dan a, lalu hitung");
        } else {
            setInput((prev) => prev + value);
        }
    };

    return (
        // <div style={{
        //     width:"100vw",
        //     height:"100vh",
        //     display:"flex",
        //     justifyContent:"center",
        //     alignItems:"center",
        //     background:"linear-gradient(135deg, #1e3c72, #2a5298)",
        //     backgroundAttachment:"fixed",
        // }}>

        <div style={{
            width:"300px",
            margin:"50px auto",
            backgroundColor:"#333",
            borderRadius:"8px",
            padding:"10px",
            boxShadow:"0 4px 10px rgba(0, 0, 0, 0.2)",
        }}>

        <div style={{
            backgroundColor:"black",
            color:"white",
            textAlign:"right",
            padding:"20px",
            borderRadius:"5px",
            marginBottom:"10px",
            fontSize:"1.5rem",
        }}>

            <p style={{ margin: 0}}>{input || "0"}</p>
            <p style={{
                margin: 0,
                color:"#00ff00",
                fontSize:"1.2rem",
            }}>{result}</p>

        </div>
        <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(4, 1fr)",
            gap:"10px",
        }}>
            {[ "%", "", "C", "⌫",
            "7", "8", "9", "/", 
            "4", "5", "6", "*", 
            "1", "2", "3", "+", 
            "+", "0", ",", "-",
             "", "", "", "=", 
            ].map((btn) => (
                <button 
                key={btn}
                onClick={() => handleButtonClick(btn)}
                style={{
                    padding:"15px",
                    fontSize:"1.2em",
                    backgroundColor:"#555",
                    color:"white",
                    border:"none",
                    borderRadius:"5px",
                    cursor:"pointer",
                    transition:"all 0.2s ease-in-out",
                }}

                onMouseOver={(e) => (e.target.style.backgroundColor = "#888")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#555")}
                onMouseDown={(e) => (e.target.style.backgroundColor = "#aaa")}
                onMouseUp={(e) => (e.target.style.backgroundColor = "#888")}
                >
                    {btn}
                </button>
            ))}

         {/* </div>    */}
        </div>
        </div>
    )
}

export default Kalkulator;