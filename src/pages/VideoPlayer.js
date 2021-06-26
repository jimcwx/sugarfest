import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import ThreeGearsIcon from '../assets/icons/ThreeGears'
import classes from './VideoPlayer.module.css'

const videoUrls = [
  {
    quality: '1080p',
    url: 'https://sugarfest.b-cdn.net/stream_1080.m3u8'
  },
  {
    quality: '720p',
    url: 'https://sugarfest.b-cdn.net/stream_720.m3u8'
  },
  {
    quality:'480p',
    url: 'https://sugarfest.b-cdn.net/stream_480.m3u8'
  },
]

export default function VideoPlayer() {
  const [videoQuality, setVideoQuality] = useState(0);

  const switchQuality = () => {
    if (videoQuality === 2) {
      setVideoQuality(0)
    } else {
      setVideoQuality(videoQuality + 1)
    }
  }

  return (
    <div className={classes.video}>
      <ThreeGearsIcon toggleQuality={switchQuality}/>
      <p className={classes.qualityText}>{videoUrls[videoQuality].quality}</p>
      <ReactPlayer 
        url={videoUrls[videoQuality].url}
        height='440px'
        width='790px'
        controls={true}
        volume={0.5}
      />
      
    </div>
  )
}
