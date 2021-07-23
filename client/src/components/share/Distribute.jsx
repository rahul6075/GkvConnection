import React from "react";
import "./share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Share,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
function Distribute() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="assets/person/1.jpeg" alt="" className="shareProfileImg" />
          <input
            type="text"
            className="shareInput"
            placeholder="What's in your mind?"
          />
        </div>
      </div>
      <hr className="shareHr" />
      <div className="shareBottom">
        <div className="shareOptions">
          <div className="shareOption">
            <PermMedia htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOption">
            <Label htmlColor="blue" className="shareIcon" />
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOption">
            <Room htmlColor="green" className="shareIcon" />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
            <span className="shareOptionText">Feelings</span>
          </div>

          <button className="shareButton">
            <Share htmlColor="blue" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Distribute;
