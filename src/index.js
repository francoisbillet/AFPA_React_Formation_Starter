import { ecrire } from "./test";
import { arrayRandom, numbersHigherThan50 } from "./test";
// import numbersHigherThan50 from "./test.js";

// console.log(randomFloat(8));

// const arrayRandom = () => [1, 2, 3, 4, 5].map(element => randomFloat(0, 100));

console.log(arrayRandom());

// ecrire();

console.log(numbersHigherThan50());

let products = Array.from(document.getElementsByClassName("product"));
// ou
let products2 = [...products];

// const getProductsTitles = products => {
//   let array = [];
//   for (let i = 0; i < products.length; i++) {
//     array.push(products[i].getElementsByTagName("h3")[0].textContent);
//   }
//   return array;
// };

// console.log(getProductsTitles(products));

const getProductsTitles2 = products => {
  const productsTransformed = products.map(product => {
    const titleElement = product.querySelector("h3");
    const title = titleElement ? titleElement.textContent : "";
    return title;
  });
  return productsTransformed;
};

// console.log(getProductsTitles2(products));

// const getProductsTitles3 = products =>
//   products.map(product => product.querySelector("h3").textContent);

// console.log(getProductsTitles3(products));

const getProductsInfo = products => {
  const productsTransformed = products.map(product => {
    let titleElement = product.querySelector("h3");
    let descriptionElement = product.querySelector("p");
    let title = titleElement ? titleElement.textContent : "";
    let description = descriptionElement ? descriptionElement.innerText : "";
    return {
      title,
      description
    };
  });
  return productsTransformed;
};

// console.log(getProductsInfo(products));

let searchElt = document
  .getElementById("search")
  .addEventListener("input", e => {
    let value = e.target.value;
    let productsFiltered = getProductsInfo(products).filter(product => {
      let valueIsIncludedInTitle = product.title
        .toUpperCase()
        .includes(value.toUpperCase());
      let valueIsIncludedInDescription = product.description
        .toUpperCase()
        .includes(value.toUpperCase());
      return valueIsIncludedInTitle || valueIsIncludedInDescription;
    });

    console.log(productsFiltered);
  });
