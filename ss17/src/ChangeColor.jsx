import React, { useState } from "react";

export default function ChangeColor() {
  const [color, setColor] = useState("black");
  const handleChangeColor = () => {
    setColor("red");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: color }}>Tiêu đề văn bản</h2>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  );
}
