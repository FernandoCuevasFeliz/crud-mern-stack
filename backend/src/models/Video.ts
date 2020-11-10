import { Schema, model } from 'mongoose';

const VideoStrategy = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: 'This video does not have a description',
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model('video', VideoStrategy);
