import app from './server.js'

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Server on port ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
