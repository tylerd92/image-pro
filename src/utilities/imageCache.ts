import { promises as fsPromises } from 'fs';
import utilities from './utilities';

const cache = new Map<string, string>();

const initializeCache = async () => {
  const folderPath = utilities.getThumbFilePath();
  const thumbDir = await fsPromises.opendir(folderPath);

  for await (const dirent of thumbDir) {
    cache.set(dirent.name, `${folderPath}/${dirent.name}`);
  }
};

const addImage = async (filename: string, filepath: string) => {
  cache.set(filename, filepath);
};

const getImage = (filename: string) => {
  return cache.get(filename);
};

const getCacheSize = () => {
  return cache.size;
};

export default { addImage, getImage, initializeCache, getCacheSize };
