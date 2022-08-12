import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Note = db.define('Notes', {
    Notesid: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
    time: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    priority: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    userid: {
        type: DataTypes.INTEGER,
    },
    labelid: {
        type: DataTypes.INTEGER,
    }
})

export default Note