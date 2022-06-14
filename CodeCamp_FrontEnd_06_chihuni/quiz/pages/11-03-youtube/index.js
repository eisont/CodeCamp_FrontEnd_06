import ReactPlayer from 'react-player';

// Render a YouTube video player

export default function LibraryYoutubePage() {
  return <ReactPlayer url='https://www.youtube.com/watch?v=hK4zoUIUgXE' width={800} height={600} muted='true' playing={true} />;
}
