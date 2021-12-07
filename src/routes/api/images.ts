import { Request, Response, Router } from 'express';
import utilities from '../../utilities/utilities';
import imageCache from '../../utilities/imageCache';

const images = Router();

interface ImageRequest {
  filename: string;
  width: number;
  height: number;
}

imageCache.initializeCache();

images.get(
  '/',
  async (
    req: Request<unknown, unknown, unknown, ImageRequest>,
    res: Response
  ) => {
    let filename: string = req.query.filename;
    const height = Number(req.query.height);
    const width = Number(req.query.width);
    if (width === 0) {
      res.status(500).send('Please enter a width that is greater than zero');
    } else if (height === 0) {
      res.status(500).send('Please enter a height that is greater than zero');
    } else if (isNaN(width)) {
      res
        .status(500)
        .send(
          'The width you entered is not a number. Please enter a number greater than zero.'
        );
    } else if (isNaN(height)) {
      res
        .status(500)
        .send(
          'The height you entered is not a number. Please enter a number greater than zero.'
        );
    } else {
      try {
        filename = filename.toLowerCase();
        const imageFilename = utilities.thumbFilename(filename, width, height);
        const image = imageCache.getImage(imageFilename);
        if (image == null) {
          await utilities.resizeImage(filename, width, height);
          res.sendFile(utilities.thumbnailFilePath(filename, width, height));
        } else {
          res.status(200).sendFile(image);
        }
      } catch (error) {
        res.status(500).send('image not found');
      }
    }
  }
);

export default images;
