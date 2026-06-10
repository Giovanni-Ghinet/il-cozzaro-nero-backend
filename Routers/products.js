import express from 'express';
import idValidator from './Middlewears/idValidator.js';
import {index} from './Controllers/productController.js';
import {show} from './Controllers/productController.js'; 

const app = express();

app.get('/products', index);
app.get('/products/:id', idValidator, show);

export default app;

