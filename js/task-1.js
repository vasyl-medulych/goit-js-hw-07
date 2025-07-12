"use strict";
const ulElem = document.querySelector("#categories");
const allLiItem = [...ulElem.querySelectorAll("li.item")];
console.log(`Numbers of categories: ${allLiItem.length}`);
function calcEl(elements) {
  elements.forEach((element) => {
    const h2Text = element.querySelector("h2").textContent;
    console.log(`Category: ${h2Text}`);
    const allLiElem = [...element.querySelectorAll("li")];
    console.log(`Elements: ${allLiElem.length}`);
  });
}

calcEl(allLiItem);
