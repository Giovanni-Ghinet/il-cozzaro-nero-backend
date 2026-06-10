import express, { request, response } from 'express'
import idValidator from '../Middlewears/idValidator.js';
import { store } from '../Controllers/controllerMaurizio.js';

import { index, show } from '../Controllers/IndexShowReviews.js';

import destroy from '../Controllers/recensioniControllers.js';





// recensioni.get('/', index);
// recensioni.get('/:id', idValidator, show);
recensioni.post('/', store);
// recensioni.put('/:id', idValidator, update);
// recensioni.patch('/:id', idValidator, modify);
// recensioni.delete('/:id', idValidator, destroy);


const recensioni = express.Router();




export default recensioni