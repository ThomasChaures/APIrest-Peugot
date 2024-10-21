import express from 'express'
import autosRutas from './routes/peugot.routes.js'
import apiAutosRutas from './api/routes/peugot-api.routes.js'
import cors from 'cors' 

const app = express()
app.use( express.static("img"))
app.use( express.urlencoded({ extended: true }) )
app.use(express.json())
app.use(cors())

app.use(autosRutas)
app.use('/api',apiAutosRutas)

app.listen(3333, () => console.log('Server Funcando'))