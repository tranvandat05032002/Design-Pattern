class RoundRobin {
  private servers: string[] = [];
  private static instance: RoundRobin;
  private index: number = 0;
  constructor() {
    if (RoundRobin.instance) {
      return RoundRobin.instance;
    }
    RoundRobin.instance = this;
    this.servers = [];
    this.index = 0;
  }
  public addServer(server: string) {
    this.servers.push(server);
  }
  public getNextServer() {
    if (!this.servers.length) {
      throw new Error("Server is empty");
    }
    const sever = this.servers[this.index];
    this.index = (this.index + 1) % this.servers.length;

    return sever;
  }
}

const LoadBalancer = new RoundRobin();
const LoadBalancer2 = new RoundRobin();
console.log(LoadBalancer === LoadBalancer2);

LoadBalancer.addServer("server 01");
LoadBalancer.addServer("server 02");
LoadBalancer.addServer("server 03");
LoadBalancer.addServer("server 04");
LoadBalancer.addServer("server 05");

console.log(LoadBalancer.getNextServer()); // 01
console.log(LoadBalancer.getNextServer()); // 02
console.log(LoadBalancer.getNextServer()); // 03
console.log(LoadBalancer.getNextServer()); // 04
console.log(LoadBalancer.getNextServer()); // 05
console.log(LoadBalancer.getNextServer()); // 01
console.log(LoadBalancer.getNextServer()); // 02
console.log(LoadBalancer.getNextServer()); // 03
console.log(LoadBalancer.getNextServer()); // o4
console.log(LoadBalancer.getNextServer()); // 05
console.log(LoadBalancer.getNextServer()); // 01
console.log(LoadBalancer.getNextServer()); // 02
