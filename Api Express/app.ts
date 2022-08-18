import 'dotenv/config'
import Server from './models/Server'

//dotenv.config()

const server = new Server()

server.listen()