import User from "../models/User"
const express = require('express')
import { Request, Response, Application } from 'express';
const { Sequelize, Op } = require("sequelize")

export const postAddUser = async( req: Request, res: Response ) => {
    const { body } = req
console.log(body)
    try {
        const user = await User.build({
            username: body.username,
            password: body.password,
        })

        await user.save()
            
        res.json( user )        
    } catch (error: any) {
        res.status(500).json({
            msg: 'Talk to support',
            error
        })
    }
}

export const postUsersByFilter = async( req: Request, res: Response ) => {
    const { username, password } = req.body
    let user:any

    user = await User.findOne({
        where: {
            username: {
                [Op.eq]: username 
            },
            password: {
                [Op.eq]: password
            }
        }
    })
    
    if (!user) {      
        res.json({
            msg: 'Invalid username or password',
            user
        })
    }else{
        res.json({
            msg: 'getUsersByFilter',
            user
        })
    }
}
    
       



    
    

    
