import React from "react";

function ButtonComponent({ onClick, title }) {
  return (
    <div style={{ display: "flex" }}>
      <button
        onClick={onClick}
        style={{
          width: "100%",
          padding: "12px 14px",
          fontWeight: 500,
          fontSize: "0.875rem",
          letterSpacing: "0.03em",
          lineHeight: "1.75",
          backgroundColor: "#654DE4",
          boxShadow: "none",
          alignItems: "center",
          borderRadius: "4px",
          border: 0,
          transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          margin: 0,
          color: "#fff",
          outline: 0,
          cursor: "pointer",
        }}
      >
        {title}
      </button>
    </div>
  );
}

export default ButtonComponent;
