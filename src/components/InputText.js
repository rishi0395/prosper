import React, { useState } from "react";

function InputText({ title, onChange, defaultValue = "", optional = false }) {
  const [value, setValue] = useState(defaultValue);

  const onChangeHandler = ({ target }) => {
    setValue(target.value);
    onChange && onChange(target.value);
  };

  return (
    <div style={{ margin: "10px 0", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          marginBottom: "5px",
        }}
      >
        <div style={{ fontWeight: 400 }}>{title}</div>
        {optional && (
          <input
            style={{
              outline: 0,
              marginLeft: "2px",
              border: 0,
              backgroundColor: "#fff",
            }}
            disabled
            value={"{optional}"}
          />
        )}
      </div>
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        style={{
          padding: "17px 14px",
          outline: 0,
          borderColor: "#FBFCFF",
          borderRadius: "4px",
          boxShadow: "none",
          borderWidth: "1px",
          borderStyle: "groove",
          fontSize: "15px",
          color: "#B9BDC7",
        }}
      />
    </div>
  );
}

export default InputText;
