const countCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${countCategories.length}`);
countCategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`),
    console.log(`Elements: ${item.getElementsByTagName("li").length}`);
});
