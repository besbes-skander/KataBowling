export class Bowling {

  public rolls: number[] = new Array<number>(21).fill(0);

  constructor() {
  }

  getScore() {
    let score = 0;
    for (let frame = 0; frame < 20; frame += 2) {
      const frameScore = this.rolls[frame] + this.rolls[frame + 1];

      score += frameScore;

      if (this.isStrike(frame)) {
        score += this.rolls[frame + 2] + this.rolls[frame + 3];
      }
      if (this.isSpare(frame)) {
        score += this.rolls[frame + 2];
      }

    }
    return score;
  }

  private isStrike(frame: number) {
    return this.rolls[frame] === 10;
  }

  private isSpare(frame: number): boolean {
    return (this.rolls[frame] + this.rolls[frame + 1]) === 10 && this.rolls[frame] !== 10;
  }

  score(frame: number, points: number) {
    this.rolls[frame] = points;
  }
}
