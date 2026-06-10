import { connection } from "../Utils/connection.js";



const defaultOBJReceived = {
    title: "",
    text: "",
    author: "",
    valutation: null,
    product: ""
};





const keyValidator = (obj) => {
    const chiaviDefaultOBJ = Object.keys(defaultOBJReceived);
    const chiaviObj = Object.keys(obj);

    if (chiaviObj.length !== chiaviDefaultOBJ.length) {
        return false
    }
    return chiaviDefaultOBJ.every(chiave => obj.hasOwnProperty(chiave));
}

const valueValidator = (obj) => {
    const { title, text, author, valutation, product } = obj;

    if (typeof title !== 'string' || title.trim() === '') return false;
    if (typeof text !== 'string' || text.trim() === '') return false;
    if (typeof author !== 'string' || author.trim() === '') return false;
    if (typeof product !== 'string' || product.trim() === '') return false;
    if (typeof valutation !== 'number' || valutation < 0 || valutation > 5 || Number.isNaN(valutation)) return false;

    return true;
}

export const validator = (obj) => {
    if (!keyValidator(obj)) return false;
    return valueValidator(obj);
}



/*
CREATE
*/


export async function store(request, response) {


    if (!validator(request.body)) {
        response
            .status(400)
            .json({
                error: "l'ogetto passato non rispetta i parametri richiesti",
                result: null
            })
        return
    }
    try {
        const newReviews = { ...request.body };
        const { product } = newReviews;
        const querySearchProduct =
            `select p.id
        from products p
        where p.name = ?;`;

        const [productId] = await connection.execute(querySearchProduct, [product]);
        if (productId.length === 0) {
            response
                .status(404)
                .json({
                    error: "il prodotto non esiste"
                });
            return
        }
        
        const reviews = {...newReviews, product:productId[0].id};
        const queryInsertReviews = `
        INSERT INTO reviews (valutation, text, id_product, author, title) VALUES
            (?, ?, ?, ?, ?);
        `;
        const {valutation, text, product: id_product, author, title} = reviews;
        const [result] = await connection.execute(queryInsertReviews, [valutation, text, id_product, author, title]);
        if (result.affectedRows > 0){
            response
                .json({
                    error: null,
                    result: "Recensione inserita con successo"
                });
            return
        }else{
            response
                .status(400)
                .json({
                    error: "richiesta errata",
                    result: null
                })
        }
    } catch (error) {
        response
            .status(500)
            .json({
                error: "errore durante l'inserimento al database",
                result: null
            });
    }
}