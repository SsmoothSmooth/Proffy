// Servidor
const express = require('express')
const server = express()

const { pageLandig, pageStudy, pageGiveClasses, saveClasses } = require('./pages')


//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Início e configuração do servidor
server
// Receber os dados do req.body
.use(express.urlencoded({ extended: true}))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
/* Rotas da aplicação */
.get("/", pageLandig)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start no servidor
.listen(5500)