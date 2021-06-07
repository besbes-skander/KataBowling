import {Bowling} from './bowling';

describe('Bowling', () => {
  it('should create an instance', () => {
    expect(new Bowling()).toBeTruthy();
  });

  /*it('should return 0 if never scored', () => {
    const bowlingGame = new Bowling();
    expect(bowlingGame.getScore()).toEqual(0);
  });

  it('should return 20 if scored 1 pts in each frame', () => {
    const bowlingGame = new Bowling();

    for (let frame = 0; frame < 20; frame++) {
      bowlingGame.score(frame, 1);
    }

    expect(bowlingGame.getScore()).toEqual(20);
  });

  it('should return 18 if spare scored', () => {
    const bowlingGame = new Bowling();

    bowlingGame.score(0, 5);
    bowlingGame.score(1, 5);
    bowlingGame.score(2, 4);
    bowlingGame.score(3, 0);

    expect(bowlingGame.getScore()).toEqual(18);
  });
*/
  it('should return 26 if strike scored', () => {
    const bowlingGame = new Bowling();

    bowlingGame.score(0, 10);
    bowlingGame.score(1, 0);
    bowlingGame.score(2, 4);
    bowlingGame.score(3, 4);

    expect(bowlingGame.getScore()).toEqual(26);
  });
});
