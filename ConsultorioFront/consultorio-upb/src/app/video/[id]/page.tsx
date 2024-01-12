'use client'
import NavBar from '@/app/components/Navbar';
import VideoPlayerControls from '@/app/components/VideoPlayerControls';
import { VIDEOS } from '@/app/data/data';
import next from 'next';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'



type Video = {
    id: number;
    name: string;
    videoSrc: string;
  };


const MyVideo =  ({ params }:any) => {

    //const videos = await getVideoById(params.id)
    const videos = VIDEOS.find((v) => v.id === parseInt(params.id));
    if (!videos) {
        return <p>Video no encontrado</p>;
      }

    const [isPaused,setIsPaused]= useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoDuration, setVideoDuration]= useState<number>()
    const [videoProgress,setVideoProgress]= useState<number>(0);

    useEffect(()=>{
            const video =videoRef.current;
            if(video){
                setVideoDuration(video.duration)
            };
        
    },[]);

    useEffect(()=>{
            
            if(isPaused) return;
            const currentTime = videoRef.current?.currentTime;
            if(videoDuration != null && currentTime != null){
                let loadingTimeout= setTimeout(()=>{
                    if(videoProgress==currentTime/videoDuration){
                        setVideoProgress((prev)=>prev+0.000001);
                    } else { 
                        setVideoProgress(currentTime/videoDuration);
                    }
                },10);
                
                return()=>{
                    clearTimeout(loadingTimeout);
                }
            }
        

    },[videoProgress,videoDuration,isPaused]);

    const togglePlayPause=()=>{
        
         const video = videoRef.current;
         if(video){
             setIsPaused(!video.pause);
             video.paused ? video.play():video.pause();
            }   
    }

    return(
        <main className='bg-[#82363A]'>
            <NavBar></NavBar>
            <div className='flex h-auto w-screen bg-[#519D90]'>
                <div className='relative flex-1 flex  justify-center   rounded-xl overflow-auto   '>
                    <div className='flex justify-center  rounded-xl w-96 h-auto'>
                        
                        <div className='absolute top-4 right-4 z-10'>
                            <VideoPlayerControls 
                                progress={videoProgress} 
                                isPaused={isPaused} 
                                onPlayPause={togglePlayPause}
                            
                            />
                        </div>
                         <video className='w-full' ref={videoRef} loop autoPlay >
                            <source type="video/mp4" src={`/${videos.videoSrc}`} />
                        </video> 
                    </div>
                </div>
                <div className='flex-1 flex-col w-[20%] justify-center items-center text-center '>
                    <h2 className=' text-red-600 font-semibold my-8'>{videos.tittle}</h2>
                    <h3 className=' m-12 font-bold'>
                        {videos.description}
                    </h3>
                </div>
            </div>
        </main>
    )
}



export default MyVideo