package com.videos.studentlifeVideos.model;

import lombok.Data;

@Data
public class VideoRequest {
    private Long videoId;
    private String name;
    private String description;
}
