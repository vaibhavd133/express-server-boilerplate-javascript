import { config } from 'dotenv';
import { app } from './app.js';
import { logger } from '../log/index.js';
import { routes } from './routes/index.js';
import { configuration } from '../config/index.js';

app.use(routes);

config();

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(configuration.port, () => {
  logger.info(`Server is running on port ${configuration.port}`);
});
