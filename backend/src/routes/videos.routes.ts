import { Router } from 'express';
const router: Router = Router();

import VideoCtrl from '../controllers/video.controllers';
import {
  createVideoValidator,
  updateVideoValidator,
} from '../validators/video.validator';

router
  .route('/')
  .get(VideoCtrl.getVideos)
  .post(createVideoValidator, VideoCtrl.create);

router
  .route('/:id')
  .get(VideoCtrl.getVideo)
  .put(updateVideoValidator, VideoCtrl.update)
  .delete(VideoCtrl.deleteVideo);

export default router;
