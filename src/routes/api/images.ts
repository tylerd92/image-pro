import { Request, Response, Router } from 'express';
import utilities from '../../utilities/utilities';
import imageCache from '../../utilities/imageCache';

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
  
  try {
    let image = imageCache.getImage(filename);
    if(image === null) {
      await utilities.resizeImage(filename, width, height);
      res.sendFile(utilities.thumbnailPath(filename));
    } else {
      res.sendFile(image.filepath);
    }
  } catch (error) {
    res.send('image not found');
  }
  
});

export default images;
