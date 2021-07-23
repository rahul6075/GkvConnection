import "./sidebar.css";
import React from "react";
import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  QuestionAnswer,
  RssFeed,
  School,
  Videocam,
  WorkOutline,
} from "@material-ui/icons";
import Closefriend from "../closefriends/Closefriend";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            Feed
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            Chats
          </li>
          <li className="sidebarListItem">
            <Videocam className="sidebarIcon" />
            Videos
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            Groups
          </li>

          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            Bookmarks
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            Questions
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            Jobs
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            Events
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            Courses
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
            <Closefriend/>
            <Closefriend/>
            <Closefriend/>
            <Closefriend/>
            
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
