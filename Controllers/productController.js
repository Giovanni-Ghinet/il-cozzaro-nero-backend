import { Connection } from '../Utils/connection.js';

const mysql = require('mysql2/promise');

export const index = async (request, response) => {
    try{
        const [rows] = await connection.execute('SELECT * FROM products');
        response.json(rows);
    }catch(error){
        response.status(500).json({message: error.message});
    }
};

export const show = async (request, response) => {
    const id = request.validatedId;
    try {
        const [rows] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
        if(rows.length === 0){
            return response.status(404).json({message: 'Prodotto non trovato'});
        }
        response.json(rows[0]);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
};

