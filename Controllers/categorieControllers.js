import { connection } from "../Utils/connection.js";


async function index(request, response) {
    try {
        const [row] = await connection.query(
            `SELECT*
            FROM categories;`
        );
        response.json({
            error: null,
            response: row
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            error: 'errore di sistema',
            response: null
        })
    }

};


async function show(request, response) {
    const id = request.validatedId
    try {
        const query = `SELECT *
        FROM categories
        WHERE categories.id=?;`
        const [row] = await connection.execute(query, [id]);
        const cat = row[0]

        response.json({
            error: null,
            response: cat
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            error: 'errore di sistema',
            response: null
        })
    }

};

export {
    index,
    show
};