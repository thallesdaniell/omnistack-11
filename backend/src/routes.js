const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStak 11',
        aluno: 'Thalles'
    });
});

module.exports = routes;