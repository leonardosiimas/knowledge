const bodyParser = require('body-parser') // interpretar as insformações que chegam
const cors = require('cors') // permitir acessar uma API 

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}