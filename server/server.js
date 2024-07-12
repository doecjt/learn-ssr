import express from 'express'
import { render } from './utils'

const server = express()

server.use(express.static('./dist'))

server.get('*', (req, res) => {
  res.send(render(req))
})

const port = 3000
server.listen(port, () => {
  console.log(`server is listening at port ${port}`)
})
