import "./rightbar.css";
import React from "react";
import Online from "../online/Online";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <img src="/assets/gift.png" alt="" className="birthdayImg" />
        <span className="birthdayText">
          <b>Rahul Chaudhary</b> and <b>other friends</b>have birthday today
        </span>

        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <Online />
          <Online />
          <Online />
          <Online />
        </ul>
      </>
    );
  };

  const ProfileRighbar = () => {
      return (
         <>
           
           <h4 className="rightbarTitle">
                User information
           </h4>
           <div className="rightbarInfo">
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">
                       City:
                   </span>
                   <span className="rightbarInfoValue">
                      Haridwar
                   </span>
               </div>
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">
                       From:
                   </span>
                   <span className="rightbarInfoValue">
                      Lucknow
                   </span>
               </div>
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">
                     Relationship Status:
                   </span>
                   <span className="rightbarInfoValue">
                      Single
                   </span>
               </div>
           </div>
           <h4 className="rightbarTitle">User Friends</h4>
           <div className="rightbarFollowings">
               <div className="rightbarFollowing">
                   <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
               </div>
               <div className="rightbarFollowing">
                   <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
               </div>
               <div className="rightbarFollowing">
                   <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
               </div>
               <div className="rightbarFollowing">
                   <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
               </div>
           </div>
         </>
      )

      
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
         <ProfileRighbar className="profileRightbar" />
      </div>
    </div>
  );
}

export default Rightbar;
