import React from "react";
import LeftSideBar from "../../components/LeftSidebar/LeftSideBar";
import QuestionDetails from './QuestionDetails'
import RightSideBar from "../../components/RightSideBar/RightSiteBar";

const Displayquestion = () => {
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <QuestionDetails />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Displayquestion;
