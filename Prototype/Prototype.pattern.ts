/* 
clone các đối tượng và có cùng 1 cấu trúc, như tái sử dụng component hoặc cấu trúc, tránh code lại 
cac component hay cấu trúc đã có trong hệ thống, tóm lại Prototype-Pattern đùng dể clone hoặc tránh tạo lại
các đói tượng 
*/
class FifaOnlinePlayer {
  name: string;
  team: string;
  position: string;
  goals: number;
  constructor(name: string, team: string, position: string, goals: number) {
    this.name = name;
    this.team = team;
    this.position = position;
    this.goals = goals;
  }
  public score() {
    return this.goals++;
  }
  public clone() {
    return new FifaOnlinePlayer(
      this.name,
      this.team,
      this.position,
      this.goals
    );
  }
}
const PrototypePattern = new FifaOnlinePlayer("CR7", "BDN", "FW", 0);
const cr7 = PrototypePattern.clone();
const messi = PrototypePattern.clone();
cr7.score();
messi.name = "Messi";
messi.team = "PSG";
messi.score();
messi.score();
messi.score();

console.log(cr7, messi);
