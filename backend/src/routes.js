const express = require('express');
const crypto = require('crypto');
const connection = require('./databse/connection');

const routes = express.Router();

routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
});

routes.post('/ongs', async (request, response) => {

    const { name, email, whastapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    console.log(id);

    await connection('ongs').insert({
        id,
        name,
        email,
        whastapp,
        city,
        uf
    });

    return response.json({ id });
});

module.exports = routes;