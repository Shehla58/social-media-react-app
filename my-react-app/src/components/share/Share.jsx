

import React, { useState } from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import "./share.css";

export default function Share() {
  const [file, setFile] = useState(null); // State to manage the selected file
  const [location, setLocation] = useState(""); // State for location input
  const [emoji, setEmoji] = useState(""); // State for selected emoji
  const [tag, setTag] = useState(""); // State for tagging people
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // State to show emoji picker
  const [text, setText] = useState(""); // State for "What's on your mind?" text input

  // Handle file selection for photo/video
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile)); // Create URL for the selected file (for preview)
    }
  };

  // Handle location input
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Handle emoji selection
  const handleEmojiClick = (emoji) => {
    setEmoji(emoji);
    setShowEmojiPicker(false); // Close emoji picker after selection
  };

  // Handle tag input
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  // Handle "What's on your mind?" text input
  const handleTextChange = (e) => {
    setText(e.target.value); // Update text state as the user types
  };

  // Open Google Maps for location selection
  const openGoogleMaps = () => {
    // Open Google Maps in a new tab for location selection
    window.open("https://www.google.com/maps", "_blank");
  };

  // Share functionality
  const handleShare = () => {
    const content = {
      text: `${text} ${emoji ? emoji + " " : ""}${tag ? `Tagged: ${tag} ` : ""}${location ? `Location: ${location} ` : ""}`,
      url: window.location.href,
      files: file,
    };

    if (navigator.share) {
      // For mobile devices supporting the native share API
      navigator.share({
        title: "Check this out!",
        text: content.text,
        url: content.url,
        files: file ? [file] : [], // Only include file if it exists
      }).catch(console.error);
    } else {
      // For non-mobile or unsupported devices
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(content.text)}`;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(content.text)}&url=${encodeURIComponent(content.url)}`;
      
      // Open in a new tab or window for WhatsApp and Twitter sharing
      window.open(whatsappUrl, "_blank");
      window.open(twitterUrl, "_blank");
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="shareInput"
            value={text} // Bind input value to the text state
            onChange={handleTextChange} // Handle text input change
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            {/* Photo/Video Option */}
            <div className="shareOption">
              <PermMedia
                htmlColor="tomato"
                className="shareIcon"
                onClick={() => document.getElementById("fileInput").click()} // Trigger file input click
              />
              <span className="shareOptionText">Photo or Video</span>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                accept="image/*, video/*"
                onChange={handleFileChange} // Handle file selection
              />
            </div>
            {/* Tag Option */}
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
              <input
                type="text"
                placeholder="Tag people"
                className="shareInput"
                value={tag}
                onChange={handleTagChange} // Handle tag input
              />
            </div>
            {/* Location Option */}
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" onClick={openGoogleMaps} />
              <span className="shareOptionText">Location</span>
              <input
                type="text"
                placeholder="Add location"
                className="shareInput"
                value={location}
                onChange={handleLocationChange} // Handle location input
              />
            </div>
            {/* Emoji Option */}
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
              <span className="shareOptionText">Feelings</span>
              {showEmojiPicker && (
                <div className="emojiPicker">
                  <span role="img" onClick={() => handleEmojiClick("😊")}>😊</span>
                  <span role="img" onClick={() => handleEmojiClick("😍")}>😍</span>
                  <span role="img" onClick={() => handleEmojiClick("😎")}>😎</span>
                  <span role="img" onClick={() => handleEmojiClick("😂")}>😂</span>
                  {/* Add more emojis as needed */}
                </div>
              )}
            </div>
          </div>
          <button className="shareButton" onClick={handleShare}>Share</button>
        </div>
      </div>

      {/* Display selected file (preview) */}
      {file && (
        <div className="filePreview">
          <h4>Selected File:</h4>
          <img src={file} alt="Selected" className="previewImage" />
        </div>
      )}

      {/* Display selected emoji */}
      {emoji && (
        <div className="emojiPreview">
          <h4>Selected Emoji: {emoji}</h4>
        </div>
      )}

      {/* Display location */}
      {location && (
        <div className="locationPreview">
          <h4>Location: {location}</h4>
        </div>
      )}

      {/* Display tag */}
      {tag && (
        <div className="tagPreview">
          <h4>Tagged: {tag}</h4>
        </div>
      )}
    </div>
  );
}
