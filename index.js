// 1 http request or create server
// const http = require("http");
// const dataControl = (req, res) => {
//   res.write("Hello hi everyone sdffa sssssssss");
//   res.end();
// };
// http.createServer(dataControl).listen(4500);

//  2 colors one type of package
// const colors = require("colors");
// console.log("package".red);

// 3 Create server using nodemon / API's test on postman
const http = require("http");
const data = require("./data");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "applicationjson" });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(5000);
