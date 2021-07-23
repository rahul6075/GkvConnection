import { MoreVert, QuestionAnswer } from "@material-ui/icons";
import React from "react";
import "./post.css";
function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Rahul Chaudhary</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey its my first post.</span>
          <img src="/assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postlikeCounter">32 people</span>
          </div>
          <div className="postBottomRight">
            <span className="poscommentText">9 comments </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
