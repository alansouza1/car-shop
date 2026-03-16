import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import carRouter from './routes/car';
import errorHandler from './middlewares/error';
import swaggerSpec from './swagger';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(carRouter);
app.use(errorHandler);

export default app;
