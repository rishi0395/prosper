import React from "react";

function Header({ mainTitle, subTitle }) {
  return (
    <div
      style={{
        margin: "20px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#161B27" }}>{mainTitle}</h1>
      <text style={{ margin: "10px 0", color: "#7B8593" }}>{subTitle}</text>
    </div>
  );
}

export default Header;
