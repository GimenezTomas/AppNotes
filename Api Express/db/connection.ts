import { Sequelize } from 'sequelize'

const db = new Sequelize('app_notes', 'root', 'TomSoyer5', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
})

export default db