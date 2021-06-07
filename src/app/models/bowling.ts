export class Bowling {

  public rolls: number[] = new Array<number>(21).fill(0);

  constructor() {
  }

  getScore() {
    let score = 0;
    for (let frameIndex = 0; frameIndex < 20; frameIndex += 2) {
      const frameScore = this.rolls[frameIndex] + this.rolls[frameIndex + 1];

      score += frameScore;

      if (this.isStrike(frameIndex)) {
        score += this.getStrikePoints(frameIndex);
      }
      if (this.isSpare(frameIndex)) {
        score += this.rolls[frameIndex + 2];
      }
    }
    return score;
  }

  private getStrikePoints(frameIndex: number) {
    if(frameIndex === 18) {
      return this.rolls[frameIndex + 2];
    }
    if (!this.isStrike(frameIndex + 2)) {
      return this.rolls[frameIndex + 2] + this.rolls[frameIndex + 3];
    } else {
      return this.rolls[frameIndex + 2] + this.rolls[frameIndex + 4];
    }
  }

  private isStrike(frameIndex: number) {
    return this.rolls[frameIndex] === 10;
  }

  private isSpare(frameIndex: number): boolean {
    return (this.rolls[frameIndex] + this.rolls[frameIndex + 1]) === 10 && this.rolls[frameIndex] !== 10;
  }

  score(frameIndex: number, points: number) {
    this.rolls[frameIndex] = points;
  }
}
