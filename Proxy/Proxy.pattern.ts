class Leader {
  receiveRequest(offer: number) {
    console.log(`accept offer ---> ${offer}`);
  }
}
class SecretaryProxyPattern {
  private leader: Leader;
  constructor() {
    this.leader = new Leader();
  }
  public receiveRequest(offer: number) {
    // send to Leader
    this.leader.receiveRequest(offer);
  }
}
class Developer {
  private offer: number;
  constructor(offer: number) {
    this.offer = offer;
  }
  public applyFor(target: any) {
    target.receiveRequest(this.offer);
  }
}
const Marry = new Developer(3000);
const secretary = new SecretaryProxyPattern();
// send request to Secretary
Marry.applyFor(secretary);
