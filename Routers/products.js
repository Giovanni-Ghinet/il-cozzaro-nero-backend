import express from 'express';
import productController from './Controllers/productController.js';

const app = express();

app.get('/products', productController.index);
app.get('/products/:id', productController.show);

export default app;

