//dados --------------------------------------------------------------------------
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

function converterHoursToMinutes(time){
    const [hour, minute] = time.split(":")
    
    return Number((hour * 60) + minute)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    converterHoursToMinutes
}