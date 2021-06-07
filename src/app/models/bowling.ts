export class Bowling {

  public rolls: number[] = new Array<number>(21).fill(0);

  constructor() {
  }

  getScore() {
    let score = 0;
    for (let roll = 0; roll < 21; roll++) {
      score += this.rolls[roll];
    }
    return score;
  }

  score(frame: number, points: number) {
    this.rolls[frame] = points;
  }
}
