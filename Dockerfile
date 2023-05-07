# Use a imagem Node.js como base
FROM node:latest

# Define o diretório de trabalho como /app
WORKDIR /app

# Copia os arquivos index.html e app.js para o contêiner
COPY index.html app.js ./

# Expõe a porta 80 do contêiner
EXPOSE 80

# Inicia o servidor web usando o Node.js
CMD ["node", "-e", "const http = require('http'); const fs = require('fs'); http.createServer((req, res) => {if (req.url === '/') {fs.readFile('./index.html', (err, data) => {res.writeHead(200, {'Content-Type': 'text/html'});res.end(data);});} else if (req.url === '/app.js') {fs.readFile('./app.js', (err, data) => {res.writeHead(200, {'Content-Type': 'application/javascript'});res.end(data);});} else {res.writeHead(404);res.end();}}).listen(80);"]

