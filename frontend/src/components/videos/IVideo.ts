export interface IVideo {
  description: string;
  title: string;
  url: string;
  image?: string;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Params {
  id: string;
}
