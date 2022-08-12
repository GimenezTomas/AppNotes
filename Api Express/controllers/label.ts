import Label from "../models/Label"
const express = require('express')
import { Request, Response, Application } from 'express';
const { Sequelize, Op } = require("sequelize")

export const getLabels =async(req : Request, res :Response) =>{
    let labels = await Label.findAll({})

    res.json({
        msg:"getLabels",
        labels
    })
}

