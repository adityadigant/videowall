import React, { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './VideoPlayer.css';

function VideoPlayer({ videoURL }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Video Wall";
  }, []); 
  

  useEffect(() => {
    if (!videoURL) return;


    playerRef.current = videojs(videoRef.current, {
      controls: true,
      fluid: true,
    });

  
    playerRef.current.src({
      src: videoURL,
      type: 'application/x-mpegURL', 
    });

   
    playerRef.current.on('loadeddata', () => {
      setIsLoading(false);
    });

   
    playerRef.current.on('waiting', () => {
      console.log('BufferingBufferingBuffering');
      setIsLoading(true);
    });

    playerRef.current.on('playing', () => {
      console.log('PlayingPlayingPlaying');
      setIsLoading(false);
    });

    let tabInactiveTimeout;
    let inactivityTimer;

    const handleVisibilityChange = () => {
        
      if (document.hidden) {
       
        tabInactiveTimeout = setTimeout(() => {
          if (playerRef.current.error() === null) {
            playerRef.current.pause();
          }
        }, 3000); 
      } else {
        playerRef.current.play();
  
        clearTimeout(tabInactiveTimeout);

      }
    };

    const handleMousemove = () => {
        
      if (playerRef.current.readyState() >= 2) {
       
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
          if (!playerRef.current.paused()) {
           
            playerRef.current.pause();
          }
        }, 5000); 
      }
    // videoRef.current.muted = true;

      playerRef.current.play();

    };

    console.log(playerRef.current,"playerRef.current");
    videoRef.current.muted = true;
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('mousemove', handleMousemove);

  }, [videoURL]);
  

  return (
    <div data-vjs-player>
      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <video ref={videoRef} className="video-js" />
    </div>
  );
}

export default VideoPlayer;
