import React from 'react'

import PlayButton from '../../../public/play.svg'
import PauseButton from '../../../public/pause.svg'
import logo from '../images/upb2.png'
import play from '../../../src/app/images/play.png'
import pause from '../../../src/app/images/pause.png'

import Image from 'next/image';


 interface VideoPlayerControlsProps{
  progress: number;
  isPaused: boolean;
  onPlayPause: ( )=> void;
  size?:number |undefined;
  width?:number |undefined;

 }

 const VideoPlayerControls:React.FC<VideoPlayerControlsProps> = (
  {
    progress,
    isPaused,
    onPlayPause,
    size =48,
    width=3
  }) => {
    const center = size/2;
    const radius = center-width;
    const dashArray = 2 * Math.PI * radius;
    const dashOffset = dashArray*(1-progress);
    return (


    <div className='relative flex justify-center items-center'>
       <svg width={size} height={size} style={{transform: "rotate(-90deg)"}}>
        <circle 
          cx={center} 
          cy={center} 
          r={radius} 
          fill='transparent' 
          stroke='#aaaaaa' 
          strokeWidth={width}
        />
         <circle 
          cx={center} 
          cy={center} 
          r={radius} 
          fill='transparent' 
          stroke='#ffffff' 
          
          strokeWidth={width} 
          strokeDasharray={dashArray} 
          strokeDashoffset={dashOffset}
          strokeLinecap='round'
        /> 
      </svg>
      <div className='absolute'>
        <button 
          className='group cursor-pointer flex justify-center items-center'
          onClick={onPlayPause}
        >
          <div className='fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out'>
            {isPaused?
              <Image src={play} // Aquí se espera un string, pero myImage es de tipo StaticImageData
                     alt="Descripción de la imagen"
                     width={5}
                     height={5}
               />:<Image src={pause} // Aquí se espera un string, pero myImage es de tipo StaticImageData
                    alt="Descripción de la imagen"
                    width={5}
                    height={5}
              /> 
            }
          </div>
        </button>

      </div>
        
    </div>
  )
}

export default VideoPlayerControls;
