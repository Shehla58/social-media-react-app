
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  PeopleAlt,
  OndemandVideo,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/closeFriend";
import { useState } from "react";

// Dummy Data
const dummyChats = [
  { id: 1, name: "Alice", lastMessage: "Hey, what's up?" },
  { id: 2, name: "Bob", lastMessage: "Let's meet later!" },
  { id: 3, name: "Charlie", lastMessage: "Good morning!" },
];

const dummyVideos = [
  { id: 1, title: "React Tutorial", thumbnail: "https://via.placeholder.com/150" },
  { id: 2, title: "JavaScript Crash Course", thumbnail: "https://via.placeholder.com/150" },
  { id: 3, title: "CSS Flexbox Basics", thumbnail: "https://via.placeholder.com/150" },
];

const dummyGroups = [
  { id: 1, name: "React Developers" },
  { id: 2, name: "Web Design Enthusiasts" },
  { id: 3, name: "Frontend Community" },
];

const dummyBookmarks = [
  { id: 1, title: "How to learn JavaScript" },
  { id: 2, title: "CSS Grid Layout" },
  { id: 3, title: "React State Management" },
];

const dummyQuestions = [
  { id: 1, question: "What is React?" },
  { id: 2, question: "How do I use hooks?" },
  { id: 3, question: "What is the virtual DOM?" },
];

const dummyJobs = [
  { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote" },
  { id: 2, title: "Backend Developer", company: "Dev Solutions", location: "New York" },
  { id: 3, title: "UI/UX Designer", company: "Design Studio", location: "San Francisco" },
];

const dummyEvents = [
  { id: 1, title: "React Meetup", date: "2024-12-10", location: "Online" },
  { id: 2, title: "JavaScript Conference", date: "2024-11-30", location: "NYC" },
  { id: 3, title: "Frontend Workshop", date: "2024-12-05", location: "San Francisco" },
];

const dummyCourses = [
  { id: 1, title: "Mastering React" },
  { id: 2, title: "JavaScript for Beginners" },
  { id: 3, title: "CSS and HTML Fundamentals" },
];

export default function Sidebar() {
  const [showMore, setShowMore] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  // Handle sidebar item clicks
  const handleFeedClick = () => setActiveSection("Feed");
  const handleChatClick = () => setActiveSection("Chats");
  const handleVideoClick = () => setActiveSection("Videos");
  const handleGroupClick = () => setActiveSection("Groups");
  const handleBookmarkClick = () => setActiveSection("Bookmarks");
  const handleQuestionClick = () => setActiveSection("Questions");
  const handleJobsClick = () => setActiveSection("Jobs");
  const handleEventClick = () => setActiveSection("Events");
  const handleCourseClick = () => setActiveSection("Courses");

  // Toggle Show More functionality
  const toggleShowMore = () => setShowMore(!showMore);

  // Render active section content
  const renderContent = () => {
    switch (activeSection) {
      case "Feed":
        return <div>Here is your feed content with posts and updates!</div>;
      case "Chats":
        return (
          <div>
            <h3>Chats</h3>
            {dummyChats.map((chat) => (
              <div key={chat.id} onClick={() => setSelectedChat(chat)}>
                <p>{chat.name}: {chat.lastMessage}</p>
              </div>
            ))}
            {selectedChat && (
              <div>
                <h4>Selected Chat: {selectedChat.name}</h4>
                <p>{selectedChat.lastMessage}</p>
              </div>
            )}
          </div>
        );
      case "Videos":
        return (
          <div>
            <h3>Videos</h3>
            {dummyVideos.map((video) => (
              <div key={video.id} onClick={() => setSelectedVideo(video)}>
                <img src={video.thumbnail} alt={video.title} />
                <p>{video.title}</p>
              </div>
            ))}
            {selectedVideo && (
              <div>
                <h4>Selected Video: {selectedVideo.title}</h4>
                <p>Watch the video!</p>
              </div>
            )}
          </div>
        );
      case "Groups":
        return (
          <div>
            <h3>Groups</h3>
            {dummyGroups.map((group) => (
              <div key={group.id} onClick={() => setSelectedGroup(group)}>
                <p>{group.name}</p>
              </div>
            ))}
            {selectedGroup && (
              <div>
                <h4>Selected Group: {selectedGroup.name}</h4>
                <p>Join this group to start discussions!</p>
              </div>
            )}
          </div>
        );
      case "Bookmarks":
        return (
          <div>
            <h3>Bookmarks</h3>
            {dummyBookmarks.map((bookmark) => (
              <div key={bookmark.id}>
                <p>{bookmark.title}</p>
              </div>
            ))}
          </div>
        );
      case "Questions":
        return (
          <div>
            <h3>Questions</h3>
            {dummyQuestions.map((question) => (
              <div key={question.id}>
                <p>{question.question}</p>
              </div>
            ))}
          </div>
        );
      case "Jobs":
        return (
          <div>
            <h3>Jobs</h3>
            {dummyJobs.map((job) => (
              <div key={job.id}>
                <p>{job.title} at {job.company} - {job.location}</p>
              </div>
            ))}
          </div>
        );
      case "Events":
        return (
          <div>
            <h3>Events</h3>
            {dummyEvents.map((event) => (
              <div key={event.id}>
                <p>{event.title} on {event.date} at {event.location}</p>
              </div>
            ))}
          </div>
        );
      case "Courses":
        return (
          <div>
            <h3>Courses</h3>
            {dummyCourses.map((course) => (
              <div key={course.id}>
                <p>{course.title}</p>
              </div>
            ))}
          </div>
        );
      default:
        return <div>Select a section to view content!</div>;
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem" onClick={handleFeedClick}>
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem" onClick={handleChatClick}>
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem" onClick={handleVideoClick}>
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem" onClick={handleGroupClick}>
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem" onClick={handleBookmarkClick}>
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem" onClick={handleQuestionClick}>
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem" onClick={handleJobsClick}>
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem" onClick={handleEventClick}>
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem" onClick={handleCourseClick}>
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>

          {showMore && (
            <>
              <li className="sidebarListItem" onClick={handleGroupClick}>
                <PeopleAlt className="sidebarIcon" />
                <span className="sidebarListItemText">Friends</span>
              </li>
              <li className="sidebarListItem" onClick={handleVideoClick}>
                <OndemandVideo className="sidebarIcon" />
                <span className="sidebarListItemText">Watch</span>
              </li>
            </>
          )}
        </ul>

        <button className="sidebarButton" onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>

        <div className="sidebarContent">{renderContent()}</div>

        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
