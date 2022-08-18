import { Sequelize } from 'sequelize'

const db = new Sequelize('app_notes', 'root', process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
})

export default db