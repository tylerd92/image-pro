import { Request, Response, Router } from 'express';
import utilities from '../../utilities/utilities';
import imageCache from '../../utilities/imageCache';

const images = Router();

interface ImageRequest {
  filename: string;
  width: number;
  height: number;
}

images.get(
  '/',
  async (
    req: Request<unknown, unknown, unknown, ImageRequest>,
    res: Response
  ) => {
    const filename: string = req.query.filename;
    const height = Number(req.query.height);
    const width = Number(req.query.width);

    try {
      const imageFilename = utilities.thumbFilename(filename, width, height);
      const image = imageCache.getImage(imageFilename);
      if (image === null) {
        await utilities.resizeImage(filename, width, height);
        res.sendFile(utilities.thumbnailPath(filename, width, height));
      } else {
        console.log('using cache');
        res.sendFile(image.filepath);
      }
    } catch (error) {
      res.send('image not found');
    }
  }
);

export default images;
