const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("VPS работает 24/7 🚀");
});

server.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
