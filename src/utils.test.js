import * as utils from './utils';

describe('mergeValues', () => {
  it('merges values of a nested object', () => {
    const result = utils.mergeValues({
      a: { x: 3, y: 4 },
      b: { w: 3, x: 5 },
      c: { z: 6, x: 7 },
    });

    expect(result).toEqual({ w: 3, x: 7, y: 4, z: 6 });
  });
});

describe('pickDefined', () => {
  it('picks defined keys from an object', () => {
    const obj = { x: 3, y: 4, z: 5 };
    const result = utils.pickDefined(['x', 'z'], obj);

    expect(result).toEqual({ x: 3, z: 5 });
  });

  it('throws an error when an undefined key is picked', () => {
    const obj = { x: 3 };

    expect(() => utils.pickDefined(['x', 'z'], obj)).toThrow();
  });
});
