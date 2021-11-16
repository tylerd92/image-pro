import express from 'express';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('main route');
});

export default routes;