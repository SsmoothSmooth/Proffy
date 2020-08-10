const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Maria Lúisa",
        avatar: "data:image/jpeg;base64,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",
        whatsapp: "8947944646",
        bio: "Entusiasta dos melhores serves do wild craft.<br><br>Apaixonada por explodir coisas e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1, 
        cost: "20", 
        // O proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados, após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    // Consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)
    // //Consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys')

    // O horário que a pessoa trabalha, por exemplo é das 8h - 18h
    // O horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // O time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedules)

})