const http = require("http");

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.end("VPS работает 24/7 🚀");
}).listen(PORT);
