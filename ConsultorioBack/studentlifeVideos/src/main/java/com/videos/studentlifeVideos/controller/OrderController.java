package com.videos.studentlifeVideos.controller;


import com.videos.studentlifeVideos.model.VideoRequest;
import com.videos.studentlifeVideos.model.VideoResponse;
import com.videos.studentlifeVideos.service.VideoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/video")
public class OrderController {

    @Autowired
    private VideoService videoService;

    @PostMapping
    public String createVideo(@RequestBody VideoRequest videoRequest) {
        videoService.createVideo(videoRequest);
        return "Video creado exitosamente!";
    }

    @GetMapping("/{id}")
    public VideoResponse getVidioById(@PathVariable long id){
        return videoService.getVideoById(id);
        
    }

    @PutMapping("/{id}")
    public String updateVideo(@PathVariable Long id, @RequestBody VideoResponse videoResponse){
        videoService.updateVideo(id, videoResponse);
        return "Video editado exitosamente";

    }


    @DeleteMapping("/{id}")
    public String deleteVideo(@PathVariable long id){
        videoService.deleteVideoById(id);
        return "Video eliminado exitosamente!";
    }
}
