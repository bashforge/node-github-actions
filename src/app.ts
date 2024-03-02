import express, { Request, Response } from 'express';
const app = express();

app.get('/hello', (_req: Request, res: Response) => {
  res.status(200).send('Hello, World!');
});

export default app;
