import sharp from "sharp";

const appRoot = require("app-root-path") + "/";
const assetsPath = appRoot + "assets/"

const resizeImage = async (filename: string, width: number, height: number) => {
    const inputFilePath =  assetsPath + `/full/${filename}`;
    try {
      const filearr = filename.split('.');
      const outputFilename = filearr[0] + '_thumb' + '.png';
      const outputFilePath = assetsPath + `thumb/${outputFilename}`;
      await sharp(inputFilePath)
        .resize(width, height).toFile(outputFilePath);
      console.log('Image processed');
    } catch(error) {
      // throw the error in future iteration?
      console.log(error);
    }
}


export default resizeImage;