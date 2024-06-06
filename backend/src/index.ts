import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { rateLimiterMiddleware } from './middlewares/rateLimiter';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(rateLimiterMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
