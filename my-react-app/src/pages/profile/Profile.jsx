
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { username } = useParams(); // Access the 'username' parameter from the URL

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              {/* Ensure these paths are correct */}
              <img
                className="profileCoverImg"
                src="/assets/post/3.jpeg"  // Correct path for cover image
                alt="Cover"
              />
              <img
                className="profileUserImg"
                src="/assets/person/7.jpeg"  // Correct path for profile image
                alt="User"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{username}</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
