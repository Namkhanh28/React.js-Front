import React, { useReducer } from "react";
function inputReducer(state: string, action: { type: string; payload?: string }) {
  switch (action.type) {
    case "SET_INPUT":
      return action.payload || "";
    default:
      return state;
  }
}
function InputText() {
  const [text, dispatch] = useReducer(inputReducer, "");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_INPUT", payload: event.target.value });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{text || "Nhập dữ liệu..."}</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập chuỗi..."
        style={{ padding: "8px", width: "300px", fontSize: "16px" }}
      />
    </div>
  );
}

export default InputText;
