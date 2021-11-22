import sharp from 'sharp';

const appRoot = require('app-root-path') + '/';
const assetsPath = appRoot + 'assets/';

const resizeImage = async (filename: string, width: number, height: number) => {
  const inputFilePath = assetsPath + `/full/${filename}.jpg`;

  const outputFilename = filename + '_thumb' + '.png';
  const outputFilePath = assetsPath + `thumb/${outputFilename}`;

  await sharp(inputFilePath)
    .resize(width, height)
    .toFile(outputFilePath)
    .then((result) => console.log('Image processed'))
    .catch((error) => {
      throw new Error('Input file is missing');
    });
};

export default resizeImage;
