module.exports = app => {
    const express = require('express')
    const pessoas = require('./pessoasRoutes')
    const niveis = require('./niveisRoute')
    const turmas = require('./turmasRoute')

    app.use(express.json(), pessoas, niveis, turmas)
    
}