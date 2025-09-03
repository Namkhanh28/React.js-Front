import React, { useState } from "react";
import "./App.css"; 

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Tên: ${name}, Email: ${email}`);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Thông tin người dùng</h2>
      <input
        type="text"
        placeholder="Nhập tên"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Nhập email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">Gửi</button>
    </form>
  );
}

export default UserForm;
