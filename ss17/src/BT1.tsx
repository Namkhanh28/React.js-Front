import React, { useState } from "react";
function ShowName() {
  const [name] = useState("Nguyễn Văn Hoàng");
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Họ và tên: {name}</h2>
    </div>
  );
}

export default ShowName;
