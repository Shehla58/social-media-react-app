
import { Link } from "react-router-dom";
import { useState } from "react";
import "./topbar.css";
import { FaBell, FaCommentDots, FaSearch } from "react-icons/fa"; // Font Awesome Icons

// Dummy data for the user's profile photo (you can replace this with dynamic user data)
const user = {
  username: "john_doe", // Example username
  profilePicture: "/assets/person/1.jpeg", // Example profile picture path
};

export default function Topbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]); // To store search results

  // Sample data to simulate search (replace with actual data from an API)
  const allUsers = [
    { username: "john_doe", name: "John Doe" },
    { username: "jane_doe", name: "Jane Doe" },
    { username: "sarah_smith", name: "Sarah Smith" },
  ];
  const allPosts = [
    { id: 1, content: "Check out this cool post!" },
    { id: 2, content: "Love this app!" },
    { id: 3, content: "Amazing new features!" },
  ];

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search and filter users or posts
  const handleSearch = () => {
    const filteredUsers = allUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredPosts = allPosts.filter((post) =>
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults([...filteredUsers, ...filteredPosts]); // Combine both results
  };

  // Handle Enter key press to search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" className="logo">LamaSocial</Link>
      </div>
      <div className="topbarCenter">
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search for friends, posts, or videos"
            className="searchInput"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress} // Trigger search on Enter
          />
          <button className="searchBtn" onClick={handleSearch}>
            <FaSearch /> {/* Search Icon */}
          </button>
        </div>
        {/* Display search results */}
        {searchTerm && (
          <div className="searchResults">
            {searchResults.map((result, index) => (
              <div key={index} className="searchResultItem">
                {result.name ? (
                  <Link to={`/profile/${result.username}`}>{result.name}</Link>
                ) : (
                  <div>{result.content}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to={`/profile/${user.username}`} className="topbarLink">Profile</Link>
          <Link to="/login" className="topbarLink">Logout</Link>
        </div>
        
        {/* Notification and Messenger Icons */}
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FaBell /> {/* Notification Icon */}
            <span className="topbarIconBadge">3</span> {/* Badge for unread notifications */}
          </div>
          <div className="topbarIconItem">
            <FaCommentDots /> {/* Messenger Icon */}
            <span className="topbarIconBadge">5</span> {/* Badge for unread messages */}
          </div>
        </div>

        {/* Profile Link with Image */}
        <Link to={`/profile/${user.username}`} className="topbarProfileLink">
          <img src={user.profilePicture} alt="Profile" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
}
