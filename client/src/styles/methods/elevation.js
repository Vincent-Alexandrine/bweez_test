const shadows = {
  umbra: {
    vOffset: x => 2 * (x % 3) + 1 / 3 * x,
    blur: x => 1.5 * (x / 3) + 2 * (x % 5) + Math.trunc(x !== 0 ? Math.log2(x) : 0),
    spread: x => -1 * Math.ceil(3 * (x / 10)),
    color: 'rgba(0, 0, 0, 0.1)',
  },
  penumbra: {
    vOffset: x => x,
    blur: x => x + Math.trunc(x / 2.5) + Math.trunc(x / 4.5),
    spread: x => Math.trunc((x - (x / 14)) / 7),
    color: 'rgba(0, 0, 0, 0.07)',
  },
  ambient: {
    vOffset: x => Math.ceil(x / (2 * Math.E) + 3 * x / (5 * Math.E)),
    blur: x => Math.sqrt((x ** 2) + 5 + 2 * x) * Math.atan((3 * (x ** 2) / (2 + x))),
    spread: x => Math.trunc((Math.sqrt(x ** 3)) / ((x + 5) / 2)),
    color: 'rgba(0, 0, 0, 0.06)',
  },
};

/**
* returns a string of 3 box-shadow value in function of an integer (reverse ingeenering of Material ftw 💃 (but not 100% accurate though))
* @param  {integer}  level
* @return {string}
*/
export function getElevation(level) {
  const values = Object.values(shadows);
  return values.reduce((acc, { vOffset, blur, spread, color }) => {
    const buff = `0 ${vOffset(level)}px ${blur(level)}px ${spread(level)}px ${color}`;
    if (acc.length)
      acc += `, ${buff}`;
    else
      acc = buff;
    return acc;
  }, '');
}
