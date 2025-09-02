
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/online";

export default function Rightbar({ profile }) {
  // Handle birthday alert
  const handleBirthdayClick = () => {
    alert("Happy Birthday! 🎉🎂");
  };

  // Handle friend profile click (you can replace this with routing to a user profile page)
  const handleFriendProfileClick = (friendName) => {
    alert(`Viewing profile of ${friendName}`);
  };

  // Handle clicking on the ad (you can replace this with opening a link or showing more details)
  const handleAdClick = () => {
    window.open("https://www.example.com", "_blank");
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer" onClick={handleBirthdayClick}>
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" onClick={handleAdClick} />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span
              className="rightbarInfoKey"
              onClick={() => alert("City is New York")}
            >
              City:
            </span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span
              className="rightbarInfoKey"
              onClick={() => alert("From Madrid")}
            >
              From:
            </span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span
              className="rightbarInfoKey"
              onClick={() => alert("Relationship status: Single")}
            >
              Relationship:
            </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {Users.slice(0, 6).map((friend) => (
            <div className="rightbarFollowing" key={friend.id} onClick={() => handleFriendProfileClick(friend.username)}>
              <img
                src={friend.profilePicture}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">{friend.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
