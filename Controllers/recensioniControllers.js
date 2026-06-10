const connection = require("../Utils/connection");

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

export default destroy;