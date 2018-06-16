// Tracking the scalpel

async function locateScalpel(nest) {
  let place = nest.name;
  let prevPlace = null;

  while (prevPlace != place) {
    console.log(`place = ${place}, prevPlace = ${prevPlace}`);
    prevPlace = place;
    place = await anyStorage(nest, place, "scalpel");
  }
  return place;
}

function locateScalpel2(nest) {
  // Your code here.
  let prevPlace = null;
  
  function findScalpel(promise) {
    return promise.then(place => {
      console.log(`place = ${place}, prevPlace = ${prevPlace}`);
      if (prevPlace == place) {
        return Promise.resolve(place);
      } else {
        prevPlace = place;
        let newSearch = anyStorage(nest, place, "scalpel");
        return findScalpel(newSearch);
      }
    });
  }

  return findScalpel(anyStorage(nest, nest.name, "scalpel"));
}

// locateScalpel(bigOak).then(console.log);
// → Butcher Shop
locateScalpel2(bigOak).then(console.log);
