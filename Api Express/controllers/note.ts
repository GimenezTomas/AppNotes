import Note from "../models/Note"
const express = require('express')
import { Request, Response, Application } from 'express';
const { Sequelize, Op } = require("sequelize")

export const getNotes = async( req: Request, res: Response ) => {
    let notes = await Note.findAll({})

    res.json({
        msg: 'getNotes',
        notes
    })
}

export const getNotesByFilter = async( req: Request, res: Response ) => {
    //this method allows you to search notes by priority or edit date, they need a range. Also you can search by status, user and label
    const { type, min, max } = req.params
    let notes: any
    console.log('-----------------------------------------------------------')
    console.log('-----------------------------------------------------------')
    console.log( type, min, max)
    console.log('-----------------------------------------------------------')
    console.log('-----------------------------------------------------------')
    switch( type ){
        case 'time':
            notes = await Note.findAll({
                where: {
                    priority: {
                      [Op.between]: [min, max]
                    }
                }
            })

            break;
        
        case 'priority':
            notes = await Note.findAll({
                where: {
                    priority: {
                      [Op.between]: [min, max]
                    }
                }
            })
            
            break;

        case 'archived':
            notes = await Note.findAll({
                where: {
                    status: {
                      [Op.eq]: false
                    },
                    userid:{
                        [Op.eq]: min
                    }
                }
            })
            
            break
            

        case 'active':
            notes = await Note.findAll({
                where: {
                    status: {
                      [Op.eq]: true
                    },
                    userid:{
                        [Op.eq]: min
                    }
                }
            })
            
            break

        case 'user':
            notes = await Note.findAll({
                where: {
                    userid: {
                        [Op.eq]: min
                    }
                }
            })
            
            break

        case 'label':
            notes = await Note.findAll({
                where: {
                    labelid: {
                        [Op.eq]: max
                    },
                    userid:{
                        [Op.eq]: min
                    }
                }
            })
            
            break
    }
    

    res.json({
        msg: 'getNotesByFilter',
        notes,
        type
    })
}

export const postAddNote = async( req: Request, res: Response ) => {
    const { body } = req
console.log(body)
    try {
        const note = await Note.build({
            title: body.title,
            content: body.content,
            time: body.time,
            status: true,
            priority: 0,
            userid: body.userid,
            labelid: body.labelid
        })

        await note.save()
            
        res.json( note )        
    } catch (error: any) {
        res.status(500).json({
            msg: 'Talk to support',
            error
        })
    }
}

export const putEditNote = async( req: Request, res: Response ) => {
    const { Notesid } = req.params
    const { body } = req

    try {
        const note = await Note.findByPk(Notesid)

        if (!note) {
            return res.status(400).json({msg: 'The note does not exists'})
        }

        await note.update( body )
        //await note.save()

        res.json({note})
    } catch (error: any) {
        res.status(500).json({
            msg: 'Talk to support',
            error
        })
    }
}

export const deleteNote = async( req: Request, res: Response ) => {
    const { Notesid } = req.params

    try {
        const note = await Note.findByPk(Notesid)

        if (!note) {
            return res.status(400).json({msg: 'No existe el user'})
        }

        await note.destroy()
        res.json({note})
        
    } catch (error: any) {
        res.status(500).json({
            msg: 'Hable con el admin'
        })
    }
}

