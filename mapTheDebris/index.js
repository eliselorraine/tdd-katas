const orbitalPeriod = (arr) => {
  console.log(getOrbitalPeriod({ name: "iss", avgAlt: 413.6 }));
  const mapped = arr.map((object) => {
    return getOrbitalPeriod(object);
  });
  console.log(mapped);
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
