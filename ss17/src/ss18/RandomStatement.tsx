import React, { useState } from "react";

function RandomQuote() {
  
  const quotes = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Ăn quả nhớ kẻ trồng cây.",
    "Cần cù bù thông minh.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
  ];
  const [quote, setQuote] = useState("Nhấn nút để lấy câu nói!");
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🧠 Câu nói truyền cảm hứng hôm nay:</h2>
      <p style={{ fontStyle: "italic", fontSize: "18px" }}>{quote}</p>
      <button
        onClick={getRandomQuote}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Lấy câu nói mới
      </button>
    </div>
  );
}

export default RandomQuote;
