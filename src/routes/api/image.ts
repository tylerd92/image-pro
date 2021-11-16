import express from 'express';
const images = express.Router();

images.get('/', (req, res) => {
  res.send('image route');
});

export default images;