import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Header from "../components/Header";
import InputText from "../components/InputText";

import {
  setActiveStepState,
  setWorkSpaceName,
  setWorkSpaceUrl,
} from "../redux/actions/appActions";

import { getAppState } from "../redux/selectors";

function Home2() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { workSpaceName, workSpaceUrl } = useSelector(getAppState);

  useEffect(() => {
    dispatch(setActiveStepState(1));
  }, []);

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
          defaultValue={workSpaceName}
          title={"Workspace Name"}
          onChange={(value) => {
            dispatch(setWorkSpaceName(value));
          }}
        />

        <InputText
          defaultValue={workSpaceUrl}
          title={"Workspace URL"}
          optional
          onChange={(value) => {
            dispatch(setWorkSpaceUrl(value));
          }}
        />

        <Button
          title={"Create Workspace"}
          onClick={() => {
            navigation("/planning");
          }}
        />
      </div>
    </div>
  );
}

export default Home2;
