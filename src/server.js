//dados --------------------------------------------------------------------------
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "9684846464",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "25,00",
        weekday: [0],
        time_from: [745],
        time_to: [1244]
    },
    {
        name: "Shaw James",
        avatar: "data:image/jpeg;base64,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",
        whatsapp: "9684846464",
        bio: "Cantor, compositor e músico norte-americano.",
        subject: "Artes",
        cost: "80,00",
        weekday: [4],
        time_from: [745],
        time_to: [1244]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

// funcionalidades ------------------------------------------------------------------------
function getSubject (subjectNumber){
    const position = +subjectNumber - 1

    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query

    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    //add data a lista de proffys
    if(isNotEmpty){

        data.subject = getSubject(data.subject)

        proffys.push(data)
        //redireciona para a pag study
        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
    //return res.sendFile(__dirname + "/views/give-classes.html")
}


//servidor -------------------------------------------------------------------------------------
const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})
//inicio e configuração do servidor
//configuração de arquivos estaticos (css, script, imagens)
server.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)

.listen(5500)
