const Hapi = require('hapi');
const handleMsg = require('./util');

const server = new Hapi.Server();
server.connection({ port: 3000 });

// curl http://localhost:3000/api/ping
server.route({
  method: 'GET',
  path: '/api/ping',
  handler: (request, reply) => reply(`Version: 1`),
  config: {
    description: 'To verify whether service is running or not',
    notes: 'This will just like normal ping command and return version information if successful',
    tags: ['api'],
  },
});

// curl -X POST -d '{"k":"v"}' http://localhost:3000/api/post
server.route({
  method: 'POST',
  path: '/api/post',
  handler: function (request, h) {
      //handleMsg(request.payload).then((val) => console.log(val)).catch((err) => {console.log('error %s', err);})
      const payload = request.payload;
      console.log(payload);
      return `welcome ${payload.k}!`;
    }
});

server.start();

console.log('Server running on %s', server.info.uri);
