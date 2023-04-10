import React from "react";
import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits-list";

const HomeComponent = () => {
  return (
      <>
        <h4 style={{"color": "white"}}>Home Page</h4>
        <WhatsHappening/>
        <TuitsList/>
      </>
  )
}

export default HomeComponent;