import React, { useState, useCallback } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#000000");
  const handleChangeColor = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Chọn màu</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>Màu người dùng chọn: </label>
        <input type="color" value={color} onChange={handleChangeColor} />
      </div>

      <div>
        <p>Màu hiển thị:</p>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: color,
            border: "1px solid #ccc"
          }}
        />
      </div>
    </div>
  );
}

export default ColorPicker;
