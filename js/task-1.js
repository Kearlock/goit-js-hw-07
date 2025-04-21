const categories = document.querySelector("#categories");
const catItems = document.querySelectorAll(".item");

console.log("Number of categories:", catItems.length);

catItems.forEach((item) => {
  const catCount = {
    catName: item.querySelector("h2").textContent,
    elems: item.querySelectorAll("ul li").length,
  };

  console.log(`Category: ${catCount.catName}`);
  console.log(`Elements: ${catCount.elems}`);
});
