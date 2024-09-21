import express from 'express'
import autosRutas from './routes/peugot.routes.js'
import apiAutosRutas from './api/routes/peugot-api.routes.js'


const app = express()
app.use( express.static("img"))
app.use( express.urlencoded({ extended: true }) )
app.use(express.json())
app.use(autosRutas)
app.use('/api',apiAutosRutas)

app.listen(2024, () => console.log('Server Funcando'))