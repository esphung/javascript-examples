function Car({ make, model, year }) {
  return {
    make: make,
    model: model,
    year: year,
  };
}

const car = new Car({
  // out of order and missing params
  model: 'Caprice',
  make: 'Chevy',
});

console.log(JSON.stringify(car, null, 2))




