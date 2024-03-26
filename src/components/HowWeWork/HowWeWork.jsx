import React, { useRef, useState } from 'react'
import './HowWeWork.css'
import { Container } from 'react-bootstrap'
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoPauseCircleOutline } from "react-icons/io5";
const HowWeWork = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoref = useRef(null);

  const handlePlayButtonClick = () => {
    const video = videoref.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className='how-we-work-section bg-blue '>
        <Container>
          <div className='how-we-work-header'>
            <p className='text-white text-center how-we-work-heading'>How We Work</p>
            <p className='text-white text-center how-we-work-overview'>You offer a good product, make advertising, analyze the market but still have no improvement?</p>
          </div>
          <div className='d-flex justify-content-center position-relative'>
            <video ref={videoref} type="video/mp4" className='how-we-work-video' >
            <source src='\About\SampleVideo_1280x720_1mb.mp4'></source>
            
            </video>
            <div className="video-button">
            <button className="play-button" onClick={handlePlayButtonClick}> { isPlaying ? <IoPauseCircleOutline/> : <IoPlayCircleOutline/>}</button>
          </div>
            
          </div>
          
          
        </Container>
    </div>
  )
}

export default HowWeWork