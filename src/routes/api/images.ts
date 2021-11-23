import { Request, Response, Router } from 'express';
import utilities from '../../utilities/utilities';

const images = Router();

interface ImageRequest {
  filename: string,
  width: number,
  height: number
}

//Example request
//http://localhost:3000/api/images/?filename=argentina&width=200&height=200

images.get('/', async (req: Request<{}, {}, {}, ImageRequest>, res: Response) => {
  const filename: string = req.query.filename;
  const height: number = Number(req.query.height);
  const width: number = Number(req.query.width);
  console.log(typeof width);
  
  // if file was already created don't call the file
  // create a cache of files
  await utilities.resizeImage(filename, width, height);
  res.sendFile(utilities.thumbnailPath(filename));
});

export default images;
