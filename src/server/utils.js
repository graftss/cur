const spy = (f, label) => (...args) => {
  console.log(label, 'input:', args);
  const output = f(...args);
  console.log(label, 'output:', output);
  return output;
};

const siphon = f => x => { f(x); return x; };

const tabIdChars = new Set('0123456789abcdef');
const validTabId = (str) => {
  if (str.length !== 64) return false;
  for (let i = 0; i < 64; i++) if (!tabIdChars.has(str[i])) return false;
  return true;
};

module.exports = {
  siphon,
  spy,
  validTabId,
};

