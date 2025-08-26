import React, { useState } from "react";

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleToggle}>
        {isVisible ? "Ẩn" : "Hiện"}
      </button>
      {isVisible && <h2>Tiêu đề văn bản</h2>}
    </div>
  );
}
