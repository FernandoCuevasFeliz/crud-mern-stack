import React, { useState, useEffect } from 'react';
import { IVideo } from './IVideo';
import VideoService from './video.service';
import VideoItem from './VideoItem';
import './videos.css';

const VideosList = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  const loadVideos = async () => {
    const res: any = await VideoService.getVideos();
    setVideos(res);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="font-weight-light text-center  mt-4 mb-0">
        Video Gallery
      </h1>
      <hr className="mt-2 mb-5" />

      <div className="row text-center text-lg-left">
        {videos.map((video: IVideo) => (
          <VideoItem video={video} key={video._id} />
        ))}
      </div>
    </div>
  );
};

export default VideosList;
