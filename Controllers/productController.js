import { connection } from '../Utils/connection.js';


export const index = async (request, response) => {
    try{
        const [rows] = await connection.execute('SELECT * FROM products');
        response
            .json({
                errro: null,
                result:rows
            });
    }catch(error){
        response
            .status(500)
            .json({
                error: "errore nella connessione",
                message: null
            });
    }
};

export const show = async (request, response) => {
    const id = request.validatedId;
    try {
        const [rows] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
        if(rows.length === 0){
            return response
                .status(404)
                .json({
                    error: 'Prodotto non trovato',
                    message: null
                });
        }
        response
            .json({
                error: null,
                result: rows[0]
            });
    } catch (error) {
        response
            .status(500)
            .json({
                error: "errore nella connessione",
                message: null
            });
    }
};

