import React, { useState, useEffect } from "react";
import "../../assets/css/bootstrap.min.css";

// Helper function to extract video ID from YouTube short link
const extractVideoId = (url) => {
  const match = url.match(/youtu\.be\/([^?&]+)/);
  return match ? match[1] : null;
};

const videoLinks = [
  {
    title: "How To Open a Blocked Ear? | कान बंद होने पर क्या करें।Dr. Major Rajesh Bhardwaj", // This will be replaced
    url: "https://youtu.be/iSUSgGciqdo?si=ZXnQD4FKht9GNjzB",
  },
  {
    title: "Sore Throat (Pharyngitis) |गले में खराश क्या है?i",
    url: "https://youtu.be/qiWiYfqeDjg?si=CpMKJublsOqhTgUt",
  },
  {
    title: "What is Adenoid Surgery? | एडेनोइड सर्जरी क्या होता है? | Dr. Major Rajesh Bhardwaj",
    url: "https://youtu.be/zLFLHB3uQvc?si=6SgxF4u3he-PiVug",
  },
  {
    title: "Post Operative Care After Ear Surgery | सर्जरी के बाद कान की देखभाल | Dr. Major Rajesh Bhardwaj",
    url: "https://youtu.be/QglAC18gCM4?si=Gvg4kfk-EDQJBS2-",
  },
  {
    title: "Sudden hearing loss | Sudden Sensorineural Hearing Loss | Hearing loss clinic in delhi",
    url: "https://youtu.be/vDMICYormos?si=tysRqqJ-07KmS8EU",
  },
  {
    title: "Snoring & Sleep Apnea | Understanding Snoring: Causes & Remedies with ENT Specialists | ENT podcast",
    url: "https://youtu.be/-s1q5oVjHtI?si=Z-KO17mVk6zNIhhM",
  },
  {
    title: "Turbinate Hypertrophy Treatment | Blocked Nose All the Time | Constant Nasal Blockage | Ent Surgery",
    url: "https://youtu.be/eahCsmzYJv4?si=W8-oDI2BXJg-e-oR",
  },
  {
    title: "Tinnitus & Hearing Loss | PRP Therapy for Hearing Loss & Tinnitus | Latest Treatment In ENT",
    url: "https://youtu.be/dIewgh1QIZ4?si=Ku006iJL_7mgK6k_",
  },
];

const YouTubeSection = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        // First create basic video objects with IDs
        const initialVideos = videoLinks.map((video) => {
          const videoId = extractVideoId(video.url);
          return {
            ...video,
            id: videoId,
            embedUrl: `https://www.youtube.com/embed/${videoId}`,
            thumbnail: `https://img.youtube.com/vi/${videoId}/0.jpg`,
          };
        });

        // Fetch actual titles from YouTube API
        const videoIds = initialVideos.map(v => v.id).join(',');
        const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // Replace with your actual API key
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoIds}&key=${API_KEY}&part=snippet`
        );
        const data = await response.json();

        // Update videos with actual titles
        const updatedVideos = initialVideos.map(video => {
          const youtubeInfo = data.items.find(item => item.id === video.id);
          return {
            ...video,
            title: youtubeInfo?.snippet?.title || video.title
          };
        });

        setVideos(updatedVideos);
        setSelectedVideoId(updatedVideos[0].id);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching YouTube data:", error);
        // Fallback to original videos if API fails
        const fallbackVideos = videoLinks.map((video) => {
          const videoId = extractVideoId(video.url);
          return {
            ...video,
            id: videoId,
            embedUrl: `https://www.youtube.com/embed/${videoId}`,
            thumbnail: `https://img.youtube.com/vi/${videoId}/0.jpg`,
          };
        });
        setVideos(fallbackVideos);
        setSelectedVideoId(fallbackVideos[0].id);
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading videos...</div>;
  }

  const selectedVideo = videos.find((v) => v.id === selectedVideoId);

  return (
    <section className="followyt">
      <div className="container py-4">
        <div className="pq-section pq-style-1 text-center">
          <h2 className="text-center mb-3 pq-section-title">
            Follow Us On YouTube
          </h2>
        </div>

        <div className="row">
          <div className="col-md-7 mb-3 mb-md-0">
            <div className="card shadow-lg">
              <iframe
                width="100%"
                height="400px"
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-3">
                <h5 className="text-success mb-0">{selectedVideo.title}</h5>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div
              className="list-group overflow-auto card"
              style={{ maxHeight: "466px" }}
            >
              {videos.map((video, index) => (
                <button
                  key={index}
                  className={`list-group-item list-group-item-action d-flex align-items-center ${
                    selectedVideoId === video.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedVideoId(video.id)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="img-thumbnail me-2"
                    style={{ width: "80px", height: "65px" }}
                  />
                  <span>{video.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;