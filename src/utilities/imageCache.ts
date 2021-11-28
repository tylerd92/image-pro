interface Image {
  filename: string;
  filepath: string;
}

const cache: Image[] = [];

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

export default { cache, addImage, getImage };
