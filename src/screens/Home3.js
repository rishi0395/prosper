import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";
import {
  setActiveStepState,
  setWorkSpaceType,
} from "../redux/actions/appActions";

function Home() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveStepState(2));
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
        mainTitle={"How are you planning to use Eden?"}
        subTitle={"We'll streamline your step experience accordingly"}
      />
      <div style={{ width: "70%" }}>
        <div style={{ display: "flex" }}>
          <Card
            self
            info="Write better. Think more clearly. Stay organized"
            onClick={() => {
              dispatch(setWorkSpaceType("self"));
            }}
          />
          <Card
            info="Wikis, docs, tasks & projects, all in one place"
            onClick={() => {
              dispatch(setWorkSpaceType("team"));
            }}
          />
        </div>
        <Button
          title={"Create Workspace"}
          onClick={() => {
            navigation("/finish");
          }}
        />
      </div>
    </div>
  );
}

export default Home;
