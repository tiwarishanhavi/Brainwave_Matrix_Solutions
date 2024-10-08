class car{
  brand;
  model;

  constructor(carDetails){
    this.brand= carDetails.brand;
    this.model=carDetails.model;
  }
}

const car1 = new car({
  brand:'Toyota',
  model:'Corolla'
});

const car2= new car({
  brand:'Porche',
  model:'911 GT3RS'
});

console.log(car1);
console.log(car2);