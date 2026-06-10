import express, { request, response } from 'express'
import idValidator from '../Middlewears/idValidator.js';
import { index, show } from '../Controllers/categorieControllers.js';

const categorie = express.Router();

categorie.get('/', index);
categorie.get('/:id', idValidator, show);


export default categorie;