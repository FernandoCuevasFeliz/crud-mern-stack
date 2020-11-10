import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Video from '../models/Video';

class VideoCtrl {
  public static async getVideo(req: Request, res: Response) {
    const id = req.params.id;
    const video = await Video.findById(id);

    if (!video) {
      return res.status(404).json({
        status: 404,
        error: 'Video not found',
      });
    }

    return res.status(200).json({
      status: 200,
      data: video,
    });
  }

  public static async getVideos(req: Request, res: Response) {
    const videos = await Video.find();

    return res.status(200).json({
      status: 200,
      data: videos,
    });
  }

  public static async create(req: Request, res: Response) {
    // error verify
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({
        status: 400,
        error: error.array(),
      });
    }

    // saved data
    const { title, url, description, image } = req.body;

    const video = {
      title,
      url,
      description,
      image,
    };

    const newVideo = new Video(video);
    await newVideo.save();

    return res.status(200).json({
      status: 200,
      data: newVideo,
    });
  }

  public static async update(req: Request, res: Response) {
    // error verify
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({
        status: 400,
        error: error.array(),
      });
    }

    const id = req.params.id;
    const { title, url, description } = req.body;

    const verifyVideo = await Video.findById(id);

    if (!verifyVideo) {
      return res.status(404).json({
        status: 404,
        error: 'Video not found',
      });
    }

    const video = { title, url, description };

    const updateVideo = await Video.findByIdAndUpdate(id, video, { new: true });

    return res.status(200).json({
      status: 200,
      data: updateVideo,
    });
  }

  public static async deleteVideo(req: Request, res: Response) {
    const id = req.params.id;
    await Video.findByIdAndDelete(id);
  }
}

export default VideoCtrl;
