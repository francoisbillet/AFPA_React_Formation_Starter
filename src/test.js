// import { arrayRandom, numbersHigherThan50 } from "./index";
import randomFloat from "random-float";

const arrayRandom = () => {
  const array = new Array(5).fill(null);
  const randomArray = array.map(() => randomFloat(0, 100));
  return randomArray;
};

const numbersHigherThan50 = () => arrayRandom().filter(nb => nb > 50);

// console.log(arrayRandom());
// console.log(numbersHigherThan50());

export { arrayRandom, numbersHigherThan50 };

const ecrire = () => console.log("cc");

// export défaut :

// export default ecrire;

// export nommé :

export { ecrire };
