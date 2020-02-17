// Calculer le min et le max d'un array :

const array = [1, 3, 10, 2];

// console.log(Math.min(array2), Math.max(array2)); NE FONCTIONNE PAS
console.log(Math.min(1, 3, 10, 2), Math.max(1, 3, 10, 2));

let getMinAndMax = (array = []) => {
  let min;
  let max;
  if (array.length === 0) {
    min = null;
    max = null;
  } else {
    min = array.reduce((min, nb) => (nb < min ? nb : min), array[0]);
    max = array.reduce((max, nb) => (nb > max ? nb : max), array[0]);
  }
  return { min, max };
};
console.log(getMinAndMax(array));

let getMinAndMax2 = array => ({
  min: Math.min(...array),
  max: Math.max(...array)
});
console.log(getMinAndMax2(array));

let getMinAndMax3 = array => {
  let min = array[0];
  let max = array[0];
  array.forEach(nb => {
    min = nb < min ? nb : min;
    max = nb > max ? nb : max;
  });
  return { min, max };
};
console.log(getMinAndMax3(array));

// Retourne le tableau de nombres pairs :

let evenArray = (array = []) => {
  return array.filter(nb => nb % 2 === 0);
};

console.log(evenArray(array));
