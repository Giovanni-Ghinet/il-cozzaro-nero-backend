import express, { request, response } from 'express'
import idValidator from '../Middlewears/idValidator.js';
import { store } from '../Controllers/controllerMaurizio.js';




const recensioni = express.Router();




// recensioni.get('/', index);
// recensioni.get('/:id', idValidator, show);
recensioni.post('/', store);
// recensioni.put('/:id', idValidator, update);
// recensioni.patch('/:id', idValidator, modify);
// recensioni.delete('/:id', idValidator, destroy);



export default recensioni