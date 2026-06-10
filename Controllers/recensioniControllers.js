import { connection } from "../Utils/connection.js";





/*
INDEX
*/
async function index(request, response) {
    try {
        const sql = "SELECT * FROM reviews";

        const [results] = await connection.query(sql);

        response.status(200).json({
            error: null,
            result: results
        });
    } catch (error) {
        console.error(error);

        response.status(500).json({
            error: "Errore interno del server",
            result: null
        });
    }
}

/*
SHOW
*/
async function show(request, response) {
    try {
        const id = request.validatedId;

        const sql = "SELECT * FROM reviews WHERE id = ?";

        const [results] = await connection.query(sql, [id]);

        if (results.length === 0) {
            return response.status(404).json({
                error: "Recensione non trovata",
                result: null
            });
        }

        response.status(200).json({
            error: null,
            result: results[0]
        });
    } catch (error) {
        console.error(error);

        response.status(500).json({
            error: "Errore interno del server",
            result: null
        });
    }
}


/*
CREATE
*/
async function store(request, response) {

    
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


/*
DESTROY
*/
function destroy(req, res) {
    const id = req.params.id;

    const sql = "DELETE FROM recensioni WHERE id = ?";

    connection.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json({
                error: "Errore del server"
            });
        }

        res.json({
            message: "Recensione eliminata"
        });
    });
}



export {destroy,index,show,store};