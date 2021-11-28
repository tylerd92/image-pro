import utilities from '../utilities/utilities';

describe('Test resizeImage function', () => {
  it('should throw an error if file not found', async () => {
    await expectAsync(
      utilities.resizeImage('notfound', 300, 200)
    ).toBeRejectedWith(new Error('Input file is missing'));
  });
});
