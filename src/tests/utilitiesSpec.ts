import resizeImage from '../utilities/utilities';

describe('Test resizeImage function', () => {
  it('should throw an error if file not found', async () => {
    await expectAsync(resizeImage('notfound', 300, 300)).toBeRejectedWith(
      new Error('Input file is missing')
    );
  });
});
