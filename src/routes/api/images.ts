import { Request, Response, Router } from 'express';
import resizeImage from '../../utilities/utilities';

const images = Router();

interface ImageRequest {
  fileName: string,
  width: number,
  height: number
}

//Example request
//http://localhost:3000/api/images/?filename=argentina&width=200&height=200

images.get('/', (req: Request<{}, {}, {}, ImageRequest>, res: Response) => {
  const { fileName, width, height } = req.query;
  // send filename, width, and height to utility function
  // after function is called show the processed image on the screen
  // (also processed image is in the thumb folder)
  resizeImage(fileName, width, height);
  res.send(req.query);
});

export default images;
