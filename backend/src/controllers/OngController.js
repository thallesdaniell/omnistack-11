const crypto = require('crypto');
const connection = require('../databse/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {

        const { name, email, whastapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whastapp,
            city,
            uf
        });

        return response.json({ id });
    }
}