import {Bowling} from './bowling';

describe('Bowling', () => {
  it('should create an instance', () => {
    expect(new Bowling()).toBeTruthy();
  });

  it('should return 0 if never scored', () => {
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

  it('should return 26 if strike scored', () => {
    const bowlingGame = new Bowling();

    bowlingGame.score(0, 10);
    bowlingGame.score(1, 0);
    bowlingGame.score(2, 4);
    bowlingGame.score(3, 4);

    expect(bowlingGame.getScore()).toEqual(26);
  });

  it('should return 45 if two strikes in a row scored', () => {
    const bowlingGame = new Bowling();

    bowlingGame.score(0, 10);
    bowlingGame.score(1, 0);
    bowlingGame.score(2, 10);
    bowlingGame.score(3, 0);
    bowlingGame.score(4, 5);
    bowlingGame.score(5, 0);
    bowlingGame.score(6, 0);
    bowlingGame.score(7, 0);

    expect(bowlingGame.getScore()).toEqual(45);
  });

  it('should return 33 when strike at last frame', () => {
    const bowlingGame = new Bowling();

    for (let frame = 0; frame < 18; frame++) {
      bowlingGame.score(frame, 1);
    }

    bowlingGame.score(18, 10);
    bowlingGame.score(20, 5);
    bowlingGame.score(21, 5);

    expect(bowlingGame.getScore()).toEqual(38);
  });

  it('should return 300 for a perfect game', () => {
    const bowlingGame = new Bowling();

    for (let frame = 0; frame < 20; frame += 2) {
      bowlingGame.score(frame, 10);
    }
    bowlingGame.score(20, 10);
    bowlingGame.score(21, 10);

    expect(bowlingGame.getScore()).toEqual(300);
  });
});
