import { Router } from 'express';
const router: Router = Router();
import videosRoutes from './videos.routes';

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.use('/videos', videosRoutes);

export default router;
