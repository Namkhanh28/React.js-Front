import React, { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        placeholder="Nhập nội dung"
        value={title}
        onChange={handleChange}
        style={{ padding: "5px", fontSize: "16px" }}
      />
      <h2>{title}</h2>
    </div>
  );
}
