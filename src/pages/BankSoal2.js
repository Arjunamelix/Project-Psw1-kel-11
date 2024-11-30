import React, { useState } from "react";

const BankSoal = () => {
    const [soalIndex, setSoalIndex] = useState(0);
    const [jawaban, setJawaban] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);

    const soal = [
        {
            pertanyaan: "Sebuah benda bermassa 2 kg bergerak dengan kecepatan 3 m/s. Berapakah energi kinetiknya?",
            pilihan: ["6 J", "9 J", "12 J", "18 J"],
            jawabanBenar: "9 J",
        },
        {
            pertanyaan: "Sebuah balok ditarik dengan gaya 10 N sehingga berpindah sejauh 5 meter. Berapa usaha yang dilakukan?",
            pilihan: ["20 J", "25 J", "50 J", "100 J"],
            jawabanBenar: "50 J",
        },
        {
            pertanyaan: "Hukum Newton 1 sering disebut sebagai hukum apa?",
            pilihan: ["Hukum Kelembaman", "Hukum Aksi-Reaksi", "Hukum Gravitasi", "Hukum Kecepatan"],
            jawabanBenar: "Hukum Kelembaman",
        },
    ];

    const handleJawaban = (pilihan) => {
        setJawaban(pilihan);
        setIsCorrect(pilihan === soal[soalIndex].jawabanBenar);
    };

    const handleNext = () => {
        setJawaban("");
        setIsCorrect(null);
        if (soalIndex < soal.length - 1) {
            setSoalIndex(soalIndex + 1);
        } else {
            alert("Anda telah menyelesaikan semua soal!");
        }
    };

    return (
        <div>
            <h2>Bank Soal Fisika Kelas 11</h2>
            <div>
                <p><strong>Soal {soalIndex + 1}:</strong> {soal[soalIndex].pertanyaan}</p>
                <ul>
                    {soal[soalIndex].pilihan.map((pilihan, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleJawaban(pilihan)}
                                style={{
                                    backgroundColor: jawaban === pilihan ? "#d3d3d3" : "white",
                                }}
                            >
                                {pilihan}
                            </button>
                        </li>
                    ))}
                </ul>
                {isCorrect !== null && (
                    <p style={{ color: isCorrect ? "green" : "red" }}>
                        {isCorrect ? "Jawaban Benar!" : "Jawaban Salah!"}
                    </p>
                )}
                <button onClick={handleNext} disabled={jawaban === ""}>
                    Soal Berikutnya
                </button>
            </div>
        </div>
    );
};

export default BankSoal;
