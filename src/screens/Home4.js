import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { getAppState } from "../redux/selectors";
import Header from "../components/Header";
import ButtonComponent from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setActiveStepState } from "../redux/actions/appActions";

function Home4() {
  const dispatch = useDispatch();

  const { displayName } = useSelector(getAppState);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CheckCircleRoundedIcon
          style={{
            width: "50px",
            height: "50px",
            color: "#654DE4",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        />

        <Header
          mainTitle={`Congratulations, ${displayName}!`}
          subTitle={"You have completed onboarding, you can start using Eden!"}
        />
      </div>
      <ButtonComponent
        title={"Launch Eden"}
        onClick={() => {
          dispatch(setActiveStepState(4));
        }}
      />
    </div>
  );
}

export default Home4;
