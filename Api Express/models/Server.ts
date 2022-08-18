const express = require('express') 
const cors = require('cors')

import db           from '../db/connection'
import notesRoutes  from '../routes/note'
import usersRoutes  from '../routes/user'
import labelsRoutes from '../routes/label'
import authRoutes   from '../routes/auth'

class Server{

    private app: any
    private port: string
    private paths = {
        notes:  '/api/notes',
        users:  '/api/users',
        labels: '/api/labels',
        auth:   '/api/auth'
    }

    constructor(){
        this.app = express()
        this.port = process.env.PORT || '8000'

        this.dbConnection()

        this.middlewares()
        this.routes()
    }

    async dbConnection(){
        try {
            await db.authenticate()
            console.log('Database online')
        } catch (error: any) {
            throw new Error ( error )
        }
    }

    middlewares() {
        this.app.use( cors() )

        this.app.use( express.json() )
    }

    routes() {
        this.app.use( this.paths.notes, notesRoutes)
        this.app.use( this.paths.users, usersRoutes)
        this.app.use( this.paths.labels, labelsRoutes)
        this.app.use( this.paths.auth, authRoutes)
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Server running at ' + this.port )
        })
    }
}

export default Server