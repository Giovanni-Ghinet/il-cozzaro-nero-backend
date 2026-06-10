import express, { request, response } from 'express'
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';
import recensioni from './Routers/recensioni.js';

const SERVER_PORT = process.env.SERVER_PORT;
const SERVER_URL =process.env.SERVER_URL;


const app = express();
app.use(express.json());

app.use('/reviews', recensioni);





app.use(errorHandler);
app.use(notFound);
app.listen(SERVER_PORT, (error) =>{
    if(error){
        console.log(`Errore: ${error}`);
    }
    console.log(`Il server é avviato sulla porta ${SERVER_PORT}`);
});