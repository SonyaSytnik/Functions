'use strict'

const cities = ['Kiev', 'Zhytomyr', 'Odessa', 'Kharkiv', 'Lviv'];
const func = s => s.length;

function func1() {
  const cities = ['Kiev', 'Zhytomyr'];
  const func = s => s.toUpperCase();

  console.dir({ cities });
  console.dir(cities.map(func));

  {
    const func = s => s.toLowerCase();

    console.dir({ cities });
    console.dir(cities.map(func));
  }

  {
    const cities = ['Odessa', 'Kharkiv', 'Lviv'];

    console.dir({ cities });
    console.dir(cities.map(func));
  }
}

func1();

console.dir({ cities });
console.dir(cities.map(func));
