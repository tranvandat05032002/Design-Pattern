class Observer {
  private pickName: string;
  constructor(name: string) {
    this.pickName = name;
  }
  public updateLocation(location: number) {
    this.getLocation(location);
  }
  public getLocation(location: number) {
    console.log(`${this.pickName} -----> location -----> ${location}`);
  }
}
class Subject {
  private ObserverList: Observer[];
  constructor() {
    this.ObserverList = [];
  }
  public addObserver(observer: Observer) {
    this.ObserverList.push(observer);
  }
  public notify(location: number) {
    this.ObserverList.forEach((observer) => observer.updateLocation(location));
  }
}
const subject = new Subject();
// your pick
const Krixi = new Observer("Krixi");
const Toro = new Observer("Toro");
const Lavie = new Observer("Lavie");
const Ari = new Observer("Ari");
const Lindis = new Observer("Lindis");
const Alister = new Observer("Alister");
const Slimz = new Observer("Slimz");
// lựa chọn tướng nào vào trong team
subject.addObserver(Krixi);
subject.addObserver(Toro);
subject.addObserver(Lavie);
subject.addObserver(Ari);
subject.addObserver(Lindis);
// push location vào trong team với các đối tượng đã được chọn
subject.notify(133);
