import express from 'express';
const images = express.Router();

images.get('/', (req, res) => {
  res.send('image route');
});

// need to create a route for resizing image
// create a method in the utilities file to access
// the file in the assets folder and use Sharpe to resize the file
// add typing after code works

export default images;