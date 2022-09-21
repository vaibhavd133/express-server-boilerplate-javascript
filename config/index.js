import config from 'config';
import { config as configure } from 'dotenv';

configure();

const configuration = {
  port: config.get('server.port')
};

export { configuration };
