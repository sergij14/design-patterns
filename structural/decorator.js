// The Decorator pattern lets you attach new behaviors to objects by placing them
// inside wrapper that contain the behaviors.

class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:80`;
  }
}

function aws(server) {
  server.isAWS = true;
  server.awsInfo = function () {
    return server.url;
  };

  return server;
}

const s1 = aws(new Server("12.45.23.456", 8080));

console.log(s1.isAWS);
