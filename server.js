/*const http = require('http')

const hostname = '127.0.0.1'
const port = 8080

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello Neeraj World!\n')
  })
  
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`)
})*/


const http = require('http')

const port = 8080

const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/html')
	res.end('<h1> Hello <h1>')
})

server.listen(port, () => {console.log(`server running at ${port}`)})
