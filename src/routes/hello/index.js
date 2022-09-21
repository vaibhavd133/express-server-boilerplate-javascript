import { Router } from 'express';
import { HelloController } from '../../controllers/index.js';

const helloRoute = Router();

helloRoute.get('/hello', HelloController.hello);

export { helloRoute };
