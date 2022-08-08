import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import InputText from "../components/InputText";
import {
  setActiveStepState,
  setDisplayName,
  setFullName,
} from "../redux/actions/appActions";
import { getAppState } from "../redux/selectors";

function Home() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { fullName, displayName } = useSelector(getAppState);

  useEffect(() => {
    dispatch(setActiveStepState(0));
  }, [dispatch]);

  return (
    <div
      style={{
        paddingTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header
        mainTitle={"Welcome! First things first..."}
        subTitle={"You can always change them later"}
      />
      <div style={{ width: "80%" }}>
        <InputText
          defaultValue={fullName}
          title={"Full Name"}
          onChange={(value) => {
            dispatch(setFullName(value));
          }}
        />

        <InputText
          defaultValue={displayName}
          title={"Display Name"}
          onChange={(value) => {
            dispatch(setDisplayName(value));
          }}
        />

        <Button
          title={"Create Workspace"}
          onClick={() => {
            navigation("/workspace");
          }}
        />
      </div>
    </div>
  );
}

export default Home;
