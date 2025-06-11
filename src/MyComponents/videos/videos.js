import React, { useEffect, useState } from "react";
import axios from "axios";
import "./youtubeVideos.css";

const API_KEY = "AIzaSyBnmVaEMnDPDK3YQ3CTOVVu7RCk5yxpxmQ"; // Replace with your API key
const CHANNEL_ID = "UCUosLUyARFkKOj9YVhPZKwg"; // Replace with your YouTube channel ID
const MAX_RESULTS = 10; // Number of videos to fetch

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching YouTube videos", error);
      }
    };

    fetchVideos();
  }, []);

  if (!videos.length) {
    return <p>Loading videos...</p>;
  }

  return (
    <section className="youtube-videos mb-4">
      <div className="container">
        <div className="latest-video">
          <h1 className="pq-section-title">Latest Video</h1>
          <iframe
            className="fullsize-video"
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
            title={videos[0].snippet.title}
            frameBorder="0"
            allowFullScreen></iframe>
        </div>

        <div className="video-grid">
          {videos.slice(1).map((video) => (
            <div key={video.id.videoId} className="video-item">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allowFullScreen></iframe>
              <p>{video.snippet.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
