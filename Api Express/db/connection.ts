import { Sequelize } from 'sequelize'

const db = new Sequelize('NotesDB', 'root', 'apinotes', {
    host: 'localhost',
    dialect: 'mssql',
    //logging: false
})

export default db