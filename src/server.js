import http from 'node:http'

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === 'GET' && url === '/users') {
    return response.end('Listagem de usuários')
  }

  if (method === 'POST' && url === '/users') {
    return response.end('Criação de usuário')
  }

  return response.end('Hello World')
})

server.listen(3333, () => console.log('Server is running on port 3333'))

