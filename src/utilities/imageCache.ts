import {promises as fsPromises} from 'fs';

const utilitiesPath = require('app-root-path') + '/src/utilities';

interface Image {
  filename: string;
  filepath: string;
}

let cache: Image[] = [];

const initializeCache = async () => {
  const jsonFromFile = await fsPromises.open(`${utilitiesPath}/cache.json`, 'r');
  let result = await jsonFromFile.readFile("utf8");
  cache = JSON.parse(result.toString());
};

const addImage = (filename: string, filepath: string) => {
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

// create a function to clear the cache from disk
const clearCache = async() => {
  const jsonFromFile = await fsPromises.open(`${utilitiesPath}/cache.json`, 'w');
}

 export default { cache, addImage, getImage, initializeCache };
