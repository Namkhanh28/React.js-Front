import React, { useState } from 'react';

function InputLength() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Kiểm tra độ dài:</h1>
      <input
        type="text"
        placeholder="Nhập vào đây"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
      {inputValue.length > 5 && (
        <p
          style={{
            marginTop: "10px",
            color: "red",
            background: "#ffe6e6",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid red"
          }}
        >
          Chuỗi nhập vào dài hơn 5 ký tự!
        </p>
      )}
    </div>
  );
}

export default InputLength;
