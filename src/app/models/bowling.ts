export class Bowling {

  public rolls: number[] = new Array<number>(21).fill(0);

  constructor() {
  }

  getScore() {
    let score = 0;
    for (let frame = 0; frame < 20; frame += 2) {
      const frameScore = this.rolls[frame] + this.rolls[frame + 1];
      score += frameScore;

      if (frameScore === 10 && this.rolls[frame] !== 10 && this.rolls[frame + 1] !== 10) {
        score += this.rolls[frame + 2]
      }
    }
    return score;
  }

  score(frame: number, points: number) {
    this.rolls[frame] = points;
  }
}
