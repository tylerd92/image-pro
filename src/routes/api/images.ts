import express from 'express';
const images = express.Router();


// need to create a route for resizing image
// create a method in the utilities file to access
// the file in the assets folder and use Sharpe to resize the file
// add typing after code works
//Example request
//http://localhost:3000/api/images/?filename=argentina&width=200&height=200
images.get('/', (req, res) => {
  
  const { fileName, width, height } = req.query;
  // send filename, width, and height to utility function
  // after function is called show the processed image on the screen
  // (also processed image is in the thumb folder)
  res.send(req.query);
});

export default images;