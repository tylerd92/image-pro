interface ImageCache {
  filename?: string,
  filepath?: string
}

let cache: ImageCache = {};

const addImage = (filename: string, filepath: string) => {
  cache.filename = filepath;
}

export default { cache, addImage };