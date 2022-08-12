import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Label = db.define('Labels', {
    Labelid: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    }
})

export default Label