import express from 'express'
import apiAgenda from './routes/agenda'
import helmet from 'helmet'
import morgan from 'morgan'
import notFoundHandler from './utils/middlewares/notFoundHandler'

const app = express()
app.use(express.json())

app.use('/', apiAgenda)

// catch 404 and forward to error handler
app.use(notFoundHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
