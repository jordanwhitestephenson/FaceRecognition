const http = require('http')
const server = http.createServer(() => {
  response.setHeader('Content-Type', 'text/html');
  response.end('<H1>HELLOOO</H1>')
})

server.listen(3000)
