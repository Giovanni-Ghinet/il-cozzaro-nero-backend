import { connection } from "../Utils/connection.js";

// Funzione controller per la rotta GET /reviews
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

// Funzione controller per la rotta GET /reviews/:id
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


export { index, show };