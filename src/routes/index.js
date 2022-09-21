import { Router } from 'express';
import { helloRoute } from './hello/index.js';

const routes = Router();

routes.use(helloRoute);

export { routes };
