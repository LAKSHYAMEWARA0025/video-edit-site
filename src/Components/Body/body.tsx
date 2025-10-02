import  { useRef, useState } from 'react';

interface LocalVideo {
  src: string;
  type: 'short' | 'long';
}

const videos: LocalVideo[] = [
  { src: '/videos/short1.mp4', type: 'short' },
  { src: '/videos/short2.mp4', type: 'short' },
  { src: '/videos/short3.mp4', type: 'short' },
  { src: '/videos/short4.mp4', type: 'short' },
  { src: '/videos/short5.mp4', type: 'short' },
  { src: '/videos/long1.mp4', type: 'long' },
  { src: '/videos/long2.mp4', type: 'long' },
  { src: '/videos/long3.mp4', type: 'long' },
  { src: '/videos/long4.mp4', type: 'long' },
];

const LocalVideo = ({ src, height = 'h-[300px]' }: { src: string; height?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMuted(video.muted);
    }
  };

  return (
    <div
      onClick={toggleMute}
      className={`relative group rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer ${height}`}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
        {muted ? 'Muted 🔇' : 'Unmuted 🔊'}
      </div>
    </div>
  );
};

const BodySection = () => {
  const shortVideos = videos.filter((v) => v.type === 'short');
  const longVideos = videos.filter((v) => v.type === 'long');

  return (
    <section className="bg-bg text-textMain py-16 px-4 md:px-12">
      <h2 className="text-3xl font-heading font-bold text-center mb-12">
        Our Signature Video Content
      </h2>

      {/* Short Form */}
      <div className="mb-20">
        <h3 className="text-xl font-semibold mb-6 text-center sm:text-left">Short Form Content</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shortVideos.map((video, idx) => (
            <LocalVideo key={idx} src={video.src} height="h-[250px] sm:h-[300px] md:h-[350px]" />
          ))}
        </div>
      </div>

      {/* Long Form with scroll snapping */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-center sm:text-left">Long Form Content</h3>
        <div className="h-[500px] overflow-y-auto snap-y snap-mandatory space-y-8">
          {longVideos.map((video, idx) => (
            <div key={idx} className="snap-start">
              <LocalVideo src={video.src} height="h-[450px] md:h-[500px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BodySection;
