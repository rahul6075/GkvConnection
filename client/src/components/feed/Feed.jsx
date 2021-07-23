import "./feed.css";
import React from 'react'
import { Share } from "@material-ui/icons";
import Sharer from "../share/Distribute";
import Post from "../post/Post";
function Feed() {
    return (
        <div className="feed">
          <div className="feedWrapper">
             <Sharer/> 
            <Post/>
            <Post/>
            <Post/>
          </div>
        </div>
    )
}

export default Feed
