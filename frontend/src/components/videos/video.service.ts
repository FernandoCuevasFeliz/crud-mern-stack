import axios, { AxiosResponse } from 'axios';
import { IVideo } from './IVideo';

class VideoService {
  private static url: string = 'http://localhost:5000/api' || '';
  private static route: string;

  public static async getVideos(): Promise<IVideo[]> {
    this.route = `${this.url}/videos`;
    const res: AxiosResponse = await axios.get(this.route);
    const videos: IVideo[] = res.data.data;
    return videos;
  }
  public static async getVideo(id: string): Promise<IVideo> {
    this.route = `${this.url}/videos/${id}`;
    const res: AxiosResponse = await axios.get(this.route);
    return res.data.data;
  }
  public static async create(video: IVideo): Promise<void> {
    this.route = `${this.url}/videos`;
    await axios.post(this.route, video);
  }

  public static async update(id: string, video: IVideo) {
    this.route = `${this.url}/videos/${id.trim()}`;
    await axios.put(this.route, video);
  }

  public static async deleted(id: string) {
    this.route = `${this.url}/videos/${id.trim()}`;
    await axios.delete(this.route);
  }
}

export default VideoService;
