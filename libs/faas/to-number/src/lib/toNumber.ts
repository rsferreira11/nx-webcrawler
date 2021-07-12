const cacheMap = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
};

export function toNumber(input: string | number, separator?: string): number {
  if (typeof input === 'number') {
    return input;
  }

  const separatorIndex = separator == null ? -1 : input.indexOf(separator);

  const output = Number(
    input
      .split('')
      .filter((_, index) => {
        return cacheMap[_] != null || index === separatorIndex;
      })
      .join('')
  );

  return Number.isNaN(output) ? 0 : output;
}
