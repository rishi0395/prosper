import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import "./styles.css";
function Card({ self, onClick, info }) {
  const teamName = self ? "For myself" : "With my team";

  return (
    <button
      onClick={onClick}
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ECEFF5",
        padding: "16px",
        paddingRight: "20px",
        maxWidth: "17em",
        fontWeight: 500,
        fontSize: "0.8rem",
        backgroundColor: "#fff",
        boxShadow: "none",
        borderRadius: "10px",
        transition:
          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        margin: "10px",
        outline: 0,
        cursor: "pointer",
      }}
    >
      {self ? (
        <PersonIcon style={{ color: "#654DE4" }} />
      ) : (
        <GroupsIcon style={{ color: "#654DE4" }} />
      )}
      <h3 style={{ marginTop: "15px" }}>{teamName}</h3>
      <text style={{ textAlign: "left", marginTop: "10px", color: "#7B8593" }}>
        {info}
      </text>
    </button>
  );
}

export default Card;
