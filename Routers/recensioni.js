import express, { request, response } from 'express'
import paramsRouter from '../middlewares/paramsRouter.js';
import objCheck from '../middlewares/objCheck.js';



const recensioni = express.Router();




recensioni.get('/', index);
recensioni.get('/:id', show);
recensioni.post('/', store);
recensioni.put('/:id', update);
recensioni.patch('/:id',  modify);
recensioni.delete('/:id', destroy);



export default recensioni