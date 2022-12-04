const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let regContent = "";
let imgContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  regContent = registration;
});

fs.readFile("netflixsignup.jpg", (err, netflixsignup) => {
  if (err) {
    throw err;
  }
  imgContent = netflixsignup;
});


http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(regContent);
        response.end();
        break;
      case "/netflixsignup":
        response.write(imgContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(5000);