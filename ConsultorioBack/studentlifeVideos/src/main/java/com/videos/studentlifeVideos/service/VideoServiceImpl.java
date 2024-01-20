package com.videos.studentlifeVideos.service;

import org.springframework.stereotype.Service;
import com.videos.studentlifeVideos.entity.Video;
import com.videos.studentlifeVideos.model.VideoRequest;
import com.videos.studentlifeVideos.model.VideoResponse;
import com.videos.studentlifeVideos.repository.VideoRepository;

import lombok.extern.log4j.Log4j2;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;


@Service
@Log4j2
public class VideoServiceImpl implements VideoService{

    @Autowired
    private VideoRepository videoRepository;


    @Override
    public void createVideo(VideoRequest videoRequest) {
        log.info("VIDEO SERVICE - Creating video");

        Video video = Video.builder()
                .id(videoRequest.getVideoId())
                .name(videoRequest.getName())
                .description(videoRequest.getDescription())
                .build();
        videoRepository.save(video);
        log.info("VIDEO SERVICE - Video created successfully!");

    }


    @Override
    public String deleteVideoById(Long id) {
        log.info("VIDEO SERVICE - Deleting video");

        videoRepository.deleteById(id);
        return "Video eliminates successfully";
    }


    @Override
    public VideoResponse getVideoById(Long id) {
        log.info("VIDEO SERVICE - Getting video");

        Video foundVideo = this.videoRepository.findById(id).get();

        VideoResponse videoResponse = new VideoResponse();
        BeanUtils.copyProperties(foundVideo, videoResponse);
        
        log.info("VIDEO SERVICE - GET video successfully!");

        return videoResponse;
    }


    @Override
    public String updateVideo(Long id, VideoResponse videoResponse) {
        Video updateVideo = videoRepository.findById(id).get();
        updateVideo.setName(videoResponse.getName());
        updateVideo.setDescription(videoResponse.getDescription());
        videoRepository.save(updateVideo);

        return "Video data updated";
    }

    
}
