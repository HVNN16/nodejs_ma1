// const http = require('node:http'); 
import http from "node:http"; // Thay vì dùng đoạn mã trên thì ta dùng đoạn này 

const server = http.createServer((request, response) => {
    response.write('Hello World!');
    response.end();
  })
  .listen(8080);// Lắng Nghe Server 
  //Run  " node index.js" => build lên cổng 8080 => hiện hello world