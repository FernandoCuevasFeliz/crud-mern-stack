import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams, useHistory } from 'react-router-dom';

import { IVideo, Params } from './IVideo';
import VideoService from './video.service';
import { toast } from 'react-toastify';

const DetailVideo = () => {
  const history = useHistory();
  const params = useParams<Params>();

  const initialState: IVideo = {
    description: '',
    title: '',
    url: '',
    createdAt: '',
  };

  const [video, setVideo] = useState<IVideo>(initialState);

  const getVideo = async () => {
    const res: IVideo = await VideoService.getVideo(params.id);
    setVideo(res);
  };

  useEffect(() => {
    if (params.id) getVideo();
  }, [params.id]);

  const { title, url, description } = video;

  const editVideo = () => {
    history.push(`/video-edit/${params.id.trim()}`);
  };

  const removeVideo = () => {
    VideoService.deleted(params.id.trim());
    setVideo(initialState);
    toast.success('Video Removed');
    history.push('/');
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <ReactPlayer
              url={url}
              width="100%"
              height="480px"
              controls={true}
            />
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="card-text">{description}</p>
            </div>
            <div className="card-footer ">
              <button
                className="d-inline btn btn-danger mr-3"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Eliminar
              </button>
              <button
                className="d-inline btn btn-primary"
                onClick={async () => editVideo()}
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Remove video
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Really do you want to remove this video?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => removeVideo()}
                >
                  Delete Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailVideo;
