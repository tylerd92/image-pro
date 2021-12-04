import { promises as fsPromises } from 'fs';
import utilities from './utilities';

interface Image {
  filename: string;
  filepath: string;
}

// change cache data structure to a dictionary like object
const cache: Image[] = [];

const initializeCache = async () => {
  const folderPath = utilities.getThumbFilePath();
  const thumbDir = await fsPromises.opendir(folderPath);

  for await (const dirent of thumbDir) {
    cache.push({
      filename: dirent.name,
      filepath: `${folderPath}/${dirent.name}`
    });
  }
};

const addImage = async (filename: string, filepath: string) => {
  cache.push({ filename, filepath });
};

const getImage = (filename: string) => {
  for (let i = 0; i < cache.length; i++) {
    if (cache[i].filename == filename) {
      return { filename: cache[i].filename, filepath: cache[i].filepath };
    }
  }
  return null;
};

export default { cache, addImage, getImage, initializeCache };
