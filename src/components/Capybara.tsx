import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function Capybara() {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showHomeButton, setShowHomeButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setShowHomeButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        if (containerRef.current && !playerRef.current) {
          playerRef.current = new window.YT.Player(containerRef.current, {
            videoId: "4IahvCIqeOc",
            playerVars: {
              autoplay: 1,
              mute: 1,
              start: 11,
              loop: 1,
              playlist: "4IahvCIqeOc",
              controls: 0,
              modestbranding: 1,
              rel: 0,
            },
            events: {
              onReady: (event: any) => {
                event.target.playVideo();
                setTimeout(() => {
                  event.target.unMute();
                  setIsMuted(false);
                }, 500);
              },
            },
          });
        }
      };
    } else if (
      window.YT &&
      window.YT.Player &&
      containerRef.current &&
      !playerRef.current
    ) {
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: "4IahvCIqeOc",
        playerVars: {
          autoplay: 1,
          mute: 1,
          start: 11,
          loop: 1,
          playlist: "4IahvCIqeOc",
          controls: 0,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            setTimeout(() => {
              event.target.unMute();
              setIsMuted(false);
            }, 500);
          },
        },
      });
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
      }
    };
  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      try {
        if (isMuted) {
          playerRef.current.unMute();
          setIsMuted(false);
        } else {
          playerRef.current.mute();
          setIsMuted(true);
        }
      } catch (e) {
        console.error("Error toggling mute:", e);
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <ParticleBackground />

      <button
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm border-2 border-lime-400/50 text-lime-400 hover:text-lime-300 hover:border-lime-400 transition-all duration-300 flex items-center justify-center"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      <div className="fixed inset-0 pointer-events-none opacity-0 z-0">
        <div ref={containerRef} className="w-full h-full" />
      </div>

      <div className="relative flex items-center justify-center min-h-screen pt-32">
        <img
          src="/assets/capybara-picture.png"
          alt="Capybara"
          className="max-w-[200%] max-h-[200%] object-contain opacity-80 scale-[2] translate-y-11"
        />
      </div>

      <button
        onClick={() => {
          if (showHomeButton) {
            navigate("/");
          }
        }}
        disabled={!showHomeButton}
        className={`fixed top-[30%] left-1/2 transform translate-x-[calc(-50%+10px)] -translate-y-1/2 z-50 w-56 h-56 rounded-full transition-all duration-500 flex items-center justify-center ${
          showHomeButton
            ? "opacity-100 pointer-events-auto cursor-pointer"
            : "opacity-0 pointer-events-none cursor-not-allowed"
        }`}
        aria-label="Retour au menu"
      ></button>
    </div>
  );
}
