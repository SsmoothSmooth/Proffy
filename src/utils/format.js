const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

/* Rotas da aplicação para o servidor */

// Funcionalidades

function getSubject(subjectNymber) {
    const position = +subjectNymber - 1
    return subjects[position]
}

function convertHoursToMinutos(time){
    const [hour, minutes] = time.split(":")
    return Number(( hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutos
}