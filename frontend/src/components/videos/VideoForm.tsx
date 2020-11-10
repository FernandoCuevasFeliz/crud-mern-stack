import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { IVideo, Params } from './IVideo';
import VideoService from './video.service';

type inputChancge = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
  const history = useHistory();
  const params = useParams<Params>();

  const initialState: IVideo = {
    title: '',
    url: '',
    description: '',
    image: '',
    createdAt: '',
  };

  const [video, setVideo] = useState<IVideo>(initialState);

  let titlePage: string = !params.id ? 'Create Video' : 'Edit Video';

  const getVideo = async () => {
    const res: IVideo = await VideoService.getVideo(params.id);
    setVideo(res);
  };

  useEffect(() => {
    if (params.id) getVideo();
  }, [params.id]);

  const onchangeInput = (e: inputChancge) => {
    return setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const saveVideo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (video.title === '' || video.url === '') {
      toast.error('There are fields required');
    } else {
      if (!params.id) {
        await VideoService.create(video);
        toast.success('New Video Added');
      } else {
        await VideoService.update(params.id, video);
        toast.info('Video Updated');
      }
      setVideo(initialState);
      history.push('/');
    }
  };

  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card p-2">
            <form onSubmit={saveVideo}>
              <h1 className="text-center">{titlePage}</h1>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Title"
                  autoFocus
                  onChange={onchangeInput}
                  value={video.title}
                />
              </div>
              <div className="form-group">
                <input
                  type="url"
                  name="url"
                  className="form-control"
                  placeholder="Url"
                  onChange={onchangeInput}
                  value={video.url}
                />
              </div>
              <div className="form-group">
                <input
                  type="url"
                  name="image"
                  className="form-control"
                  placeholder="Url Image"
                  onChange={onchangeInput}
                  value={video.image}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Description"
                  className="form-control"
                  onChange={onchangeInput}
                  value={video.description}
                ></textarea>
              </div>
              <button className="btn btn-success btn-block">
                {!params.id ? 'Save' : 'Update'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
