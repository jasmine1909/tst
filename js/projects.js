//projects filter
const projectsFilter = document.querySelectorAll(".filter-item");
const projectsItem = document.querySelectorAll(".projects-item");

projectsFilter.forEach((btn) => {
  btn.addEventListener("click", () => {
    showFilteredContent(btn);
  });
});

function showFilteredContent(btn) {
  projectsItem.forEach((item) => {
    if (item.classList.contains(btn.id)) {
      resetActiveBtn();
      btn.classList.add("active-btn");
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
function resetActiveBtn() {
  projectsFilter.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}
/*
projectsFilter.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    filterContainer
      .querySelector(".active")
      .classList.remove("active", "box-shadow");
    event.target.classList.add("active", "box-shadow");
    const filterTarget = event.target.getAttribute("data-target");

    console.log("projectsItem");
    projectsItem.forEach((item) => {
      if (item.classList.contains(filterTarget) || filterTarget === "all") {
        item.classList.add("show");
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
        item.classList.remove("show");
      }
    });
  }
});
*/
