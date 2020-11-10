import React from 'react';
import { IVideo } from './IVideo';
import { Link } from 'react-router-dom';

interface Props {
  video: IVideo;
}

const VideoItem = ({ video }: Props) => {
  return (
    <div className="col-lg-3 col-md-4 col-12 mb-3 video-item">
      <Link to={`/${video._id}`} className="link" title={video.title}>
        <div className="card">
          <img
            src={
              video.image
                ? video.image
                : 'https://i.pinimg.com/originals/3a/ab/e0/3aabe0e9a520b9ad90407a82f85adb42.jpg'
            }
            alt=""
            className="card-img-top"
          />

          <div className="card-body">
            <p className="card-text text-center text-video">{video.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoItem;
