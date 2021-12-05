import imageCache from '../utilities/imageCache';

describe('imageCache test', () => {
  it('initialize cache', () => {
    imageCache.initializeCache();
    expect(imageCache.getCacheSize()).toBeGreaterThanOrEqual(0);
  });

  it('get image from cache', () => {
    expect(imageCache.getImage('fjord_200x200.png')).toBeDefined();
  });
});
