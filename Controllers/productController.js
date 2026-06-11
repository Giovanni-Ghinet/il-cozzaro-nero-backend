import { connection } from '../Utils/connection.js';
import { normalizingData } from '../Utils/function.js';


export const index = async (request, response) => {
    try{
        const queryProductIndex = `
            select p.name, p.description, p.price, p.country, p.image, p.availability, p.created_at,r.id as id_review, r.author, r.title, r.text, r.valutation, c.name as category
            from products p
                join reviews r
                    on r.id_product = p.id
                join product_category pt
                    on pt.id_product = p.id
                join categories c
                    on c.id = pt.id_category
            order by created_at;
        `;
        const [rows] = await connection.execute(queryProductIndex);
        const productList = normalizingData(rows);
        response
            .json({
                error: null,
                result:productList
            });
    }catch(error){
        response
            .status(500)
            .json({
                error: "errore nella connessione",
                result: null
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
                    result: null
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
                result: null
            });
    }
};

