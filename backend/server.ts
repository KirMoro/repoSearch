import express from 'express';
import cors from 'cors';

import githubRoutes from './githubRoutes';
const app = express();

app.use(
    cors({
        origin: ['http://localhost:5173'],
        methods: 'GET,POST',
    }),
);

app.use(express.json());

app.use('/', githubRoutes);

app.listen(4000, () => console.log('Server run on port 4000'));
