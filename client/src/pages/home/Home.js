import "./home.css";
import React from "react";
import { Person } from "@material-ui/icons";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Fragment } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
const Home = () => {
  return (
    <Fragment>
      <Topbar />
      <div className="homeContainer">
      <Sidebar />
      <Feed/>
      <Rightbar/>
      </div>
     
    </Fragment>
  );
};

export default Home;
