const connection = require('../databse/connection');
module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('ongs')
            .where('id', ong_id)
            .select('*');

        return response.json(incidents);

    }
}