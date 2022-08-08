import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";

import HorizontalLinearStepper from "./components/HorizontalStepper";

import Home from "./screens/Home";
import Home2 from "./screens/Home2";
import Home3 from "./screens/Home3";
import Home4 from "./screens/Home4";

import { getAppState } from "./redux/selectors";

function App() {
  const { activeStep } = useSelector(getAppState);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "75vh",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <SpaRoundedIcon
          style={{
            width: "50px",
            height: "50px",
            color: "#654DE4",
          }}
        />
        <h1 style={{ marginLeft: "10px" }}>Eden</h1>
      </div>
      <HorizontalLinearStepper
        steps={new Array(4).fill("")}
        activeStep={activeStep}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workspace" element={<Home2 />} />
        <Route path="/planning" element={<Home3 />} />
        <Route path="/finish" element={<Home4 />} />
      </Routes>
    </div>
  );
}

export default App;
