import { toNumber } from './toNumber';

describe('toNumber', () => {
  it('should return number if input is number', () => {
    expect(toNumber(555)).toEqual(555);
  });

  it('should return number if input is string', () => {
    expect(toNumber('555')).toEqual(555);
  });

  it('should return clean number if input is string', () => {
    expect(toNumber('    \n \t 555  askjdhe 5456')).toEqual(5555456);
  });

  it('should not remove separator and return clean number if input is string with separator', () => {
    expect(toNumber('    \n \t 555  askjdhe 5456.50', '.')).toEqual(5555456.5);
  });
});
