function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("div.target");
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div");
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll(".ranked-list");

  for (let i = 0; i < rankedLists.length; i++) {
    const children = rankedLists[i].children;

    for (let i = 0; i < children.length; i++) {
      children[i].innerHTML = parseInt(children[i].innerHTML) + n;
    }
  }
}
