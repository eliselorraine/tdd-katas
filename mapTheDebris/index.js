const orbitalPeriod = (arr) => {
  const mapped = arr.map((object) => {
    return getOrbitalPeriod(object);
  });
  return mapped;
};

const getOrbitalPeriod = (obj) => {
  const earthRadius = 6367.4447;
  const earthGM = 398600.4418;
  const r = earthRadius + obj.avgAlt;
  const T = 2 * Math.PI * Math.sqrt(Math.pow(r, 3) / earthGM);
  const ans = {
    name: obj.name,
    orbitalPeriod: Math.round(T),
  };
  return ans;
};

module.exports = orbitalPeriod;
