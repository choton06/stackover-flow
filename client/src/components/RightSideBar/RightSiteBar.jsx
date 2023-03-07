import React from "react";
import "./RightSiteBar.css";
import Widget from "./Widget";
import WidgetTages from "./WidgetTages";

const RightSiteBar = () => {
  return (
    <aside className="right-sidebar">
      <Widget />
      <WidgetTages />
    </aside>
  );
};

export default RightSiteBar;
