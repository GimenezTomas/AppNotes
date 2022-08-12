import { DataTypes } from 'sequelize'
import db from '../db/connection'

const User = db.define('Users', {
    Userid: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
    
})

export default User