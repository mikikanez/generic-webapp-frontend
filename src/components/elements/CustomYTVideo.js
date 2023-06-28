import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function CustomYTVideo({ videoID, matches }) {
//   const onPlayerReady: YouTubeProps['onReady'] = (event) => {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }

  const opts = {
    height: matches ? '390' : '250',
    width: matches ? '640' : '340',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoID} opts={opts} onReady={null} />;
}