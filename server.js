import express, { request, response } from 'express'
import notFound from './Middlewears/notFound.js';
import errorsHandler from './Middlewears/errorsHandler.js';
import recensioni from './Routers/recensioni.js';
import categorie from './Routers/categorie.js'
import products from './Routers/products.js';


const SERVER_PORT = process.env.SERVER_PORT;
const SERVER_URL = process.env.SERVER_URL;


const app = express();
app.use(express.json());
app.use('/categories', categorie);
app.use('/reviews', recensioni);
app.use('/products', products);



app.use(errorsHandler);
app.use(notFound);
app.listen(SERVER_PORT, (error) => {
    if (error) {
        console.log(`Errore: ${error}`);
    }
    console.log(`Il server é avviato sulla porta ${SERVER_PORT}`);
});