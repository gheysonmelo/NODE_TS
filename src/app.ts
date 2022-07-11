import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser'
import routes from './api/routes/index'

import sequelize from './database/sequelize';
import AppError from './utils/AppError';

const app: Express = express();
const port: number = 3383;

app.use(bodyParser.json());

app.use('/api/v1', routes);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World Express + TypeScript")
});

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(err.getHttpCode()).send(err.getError());
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});

sequelize.authenticate().then(() => {
    console.log('Conectado ao postgres com sucesso');
}).catch((error: Error) => {
    console.log('Não foi possível conectar ao postgres: ' + error);
});