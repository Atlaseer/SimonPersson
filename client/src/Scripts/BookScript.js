export function BookScript() {
  let currentPage = 0;

  const leftPage = document.getElementById("leftPage");
  const rightPage = document.getElementById("rightPage");

  const pages = [
    { left: "", right: "Hello! I'm Simon" },
    { left: "I've worked on these projects", right: "Which has taught me" },
    { left: "Fin" },
  ];

  function updatePages() {
    leftPage.textContent = pages[currentPage].left;
    rightPage.textContent = pages[currentPage].right;

    if(currentPage === 0) {
      leftPage.style.visibility = "hidden";
    } else {
      leftPage.style.visibility = "visible";
    }

    if(currentPage === pages.length - 1) {
      rightPage.style.visibility = "hidden";
    } else {
      rightPage.style.visibility = "visible";
    }

  }

  if (leftPage && rightPage) {
    leftPage.addEventListener("click", () => {
      if (currentPage > 0) {
        currentPage--;
        updatePages();
      }
    });

    rightPage.addEventListener("click", () => {
      if (currentPage < pages.length - 1) {
        currentPage++;
        updatePages();
      }
    });

    updatePages();
  }
}
