import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('testdb', 'test', 'helloworld', {
  host: 'localhost',
  dialect: 'postgres'
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (err) {
  console.log('Unable to connect to the database:', err);
}

export { sequelize };
