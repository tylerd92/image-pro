import sharp from 'sharp';
import imageCache from './imageCache';

const appRoot = require('app-root-path') + '/';
const assetsPath = appRoot + 'assets';

const getThumbFilePath = (): string => {
  return `${assetsPath}/thumb`;
};

const thumbFilename = (
  filename: string,
  width: number,
  height: number
): string => {
  return `${filename}_${width}x${height}.png`;
};

const thumbnailFilePath = (
  filename: string,
  width: number,
  height: number
): string => {
  const outputFilename = thumbFilename(filename, width, height);
  return assetsPath + `/thumb/${outputFilename}`;
};

const resizeImage = async (filename: string, width: number, height: number) => {
  const inputFilePath = assetsPath + `/full/${filename}.jpg`;

  const outputFilename = thumbFilename(filename, width, height);
  const outputFilePath = thumbnailFilePath(filename, width, height);

  await sharp(inputFilePath)
    .resize(width, height)
    .toFile(outputFilePath)
    .then((result) => {
      console.log('Image processed');
      imageCache.addImage(outputFilename, outputFilePath);
    })
    .catch((error) => {
      throw new Error('Input file is missing');
    });
};

export default {
  resizeImage,
  thumbnailFilePath,
  thumbFilename,
  getThumbFilePath
};
