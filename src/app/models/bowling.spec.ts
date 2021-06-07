import { Bowling } from './bowling';

describe('Bowling', () => {
  it('should create an instance', () => {
    expect(new Bowling()).toBeTruthy();
  });

  it('should return 0 if never scored', () => {
    const bowlingGame = new Bowling();
    expect(bowlingGame.getScore()).toEqual(0);
  });
});
