import React, { useEffect } from "react";

function Welcome() 
  useEffect(() => {
    console.log("Component đã được render lần đầu!");
  }, []);

  return (
    <div style={{ 
      textAlign: "center", 
      marginTop: "50px", 
      fontSize: "22px", 
      fontWeight: "bold",
      border: "1px solid black",
      padding: "10px",
      display: "inline-block"
    }}>
      Chào mừng bạn đến với ứng dụng của chúng tôi!
    </div>
  );


export default Welcome;
