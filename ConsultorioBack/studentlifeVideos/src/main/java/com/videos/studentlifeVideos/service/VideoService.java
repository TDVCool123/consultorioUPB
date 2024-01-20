package com.videos.studentlifeVideos.service;

import com.videos.studentlifeVideos.model.VideoRequest;
import com.videos.studentlifeVideos.model.VideoResponse;

public interface VideoService {

    void createVideo(VideoRequest videoRequest);

    VideoResponse getVideoById(Long id);

    String updateVideo(Long id,VideoResponse videoResponse);

    String deleteVideoById(Long id);
}
