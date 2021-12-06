import imageCache from '../utilities/imageCache';

describe('imageCache test', () => {
  it('initialize cache', () => {
    imageCache.initializeCache();
    expect(imageCache.getCacheSize()).toBeGreaterThanOrEqual(0);
  });
  describe('test adding and retrieving from cache', () => {
    beforeEach(() => {
      imageCache.getImageCache().clear();
      imageCache.addImage('test1.png', '/assets/thumb/test1.png');
      imageCache.addImage('test2.png', '/assets/thumb/test2.png');
    });
    it('add image to cache', () => {
      imageCache.addImage('test3.png', '/assets/thumb/test3.png');
    });
    it('get image from cache', () => {
      expect(imageCache.getImage('test1.png')).toBeDefined();
    });
    it('get cache size', () => {
      expect(imageCache.getCacheSize()).toBe(2);
    });
  });
});
