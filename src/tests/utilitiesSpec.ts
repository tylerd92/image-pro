import utilities from '../utilities/utilities';

describe('Test resizeImage function', () => {
  it('should throw an error if file not found', async () => {
    await expectAsync(
      utilities.resizeImage('notfound', 300, 200)
    ).toBeRejectedWith(new Error('Input file is missing'));
  });

  it('should resolve when called', async () => {
    const width = 800;
    const height = 800;
    await expectAsync(
      utilities.resizeImage('fjord', width, height)
    ).toBeResolved();
  });
});
