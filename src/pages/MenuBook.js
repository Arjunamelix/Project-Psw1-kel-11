import React from "react";
import { useNavigate } from "react-router-dom";

const books = [
  { id: 1, title: "Fluida Statis", description: "Materi tentang fluida tidak bergerak." },
  { id: 2, title: "Fluida Dinamis", description: "Materi tentang fluida bergerak." },
  { id: 3, title: "Hukum Newton", description: "Materi tentang hukum gerak Newton." },
  { id: 4, title: "Energi dan Usaha", description: "Materi tentang energi dalam fisika." },
  { id: 5, title: "Gelombang", description: "Materi tentang fenomena gelombang." },
];

const MenuBook = ({ searchQuery }) => {
  const navigate = useNavigate();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const menubookStyle = {
    display: "grid",
    gap: "30px",
    justifyContent: "center",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    padding: "20px",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    animation: "fadeIn 1s ease-in-out",
  };

  const cardStyle = {
    cursor: "pointer",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const handleCardClick = (bookId) => {
    navigate(`/modul${bookId}`);
  };

  return (
    <div style={menubookStyle}>
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <div key={book.id} style={cardStyle} onClick={() => handleCardClick(book.id)}>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
          </div>
        ))
      ) : (
        <p>Tidak ada materi ditemukan.</p>
      )}
    </div>
  );
};

export default MenuBook;
