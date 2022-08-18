const { Sequelize, Op } = require("sequelize")
import { bcryptjs } from 'bcryptjs'

import User from '../models/User';

export const login = async(req, res) => {
    const { email, password } = req.body

    try{
        const user = await User.findOne({
            where: {
                username: {
                    [Op.eq]: email 
                }
            }
        })

        if( !user ){
            return res.status(400).json({
                msg: 'Invalid email'
            })    
        }

        const validPassword = bcryptjs.compareSync( password, user.toJSON().password )

        if (!validPassword) {
            return res.status(400).json({
                msg: 'Invalid password'
            })
        } else{
            return res.status(200).json({
                user
            })   
        }

    }catch( error ){
        console.log(error)

        return res.status(500).json({
            msg: 'Talk to support'
        })
    }
}