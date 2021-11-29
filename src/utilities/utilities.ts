import sharp from 'sharp';
import imageCache from './imageCache';

const appRoot = require('app-root-path') + '/';
const assetsPath = appRoot + 'assets/';

const resizeImage = async (filename: string, width: number, height: number) => {
  const inputFilePath = assetsPath + `/full/${filename}.jpg`;

  const outputFilename = filename + '_thumb' + '.png';
  const outputFilePath = assetsPath + `thumb/${outputFilename}`;

  await sharp(inputFilePath)
    .resize(width, height)
    .toFile(outputFilePath)
    .then((result) => {
      console.log('Image processed');
      imageCache.addImage(filename, outputFilePath);
    })
    .catch((error) => {
      throw new Error('Input file is missing');
    });
};

const thumbnailPath = (filename: string) => {
  const outputFilename = filename + '_thumb' + '.png';
  return assetsPath + `thumb/${outputFilename}`;
};

export default { resizeImage, thumbnailPath };
