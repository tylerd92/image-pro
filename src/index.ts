import express from 'express';
import routes from './routes/api';
import images from './routes/api/image';

const app = express();
const port = 3000;

app.use('/api', routes);

app.use('/api/images', images);

app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});
