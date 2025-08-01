export function BookScript() {
  let currentPage = 0;

  const leftPage = document.getElementById("leftPage");
  const rightPage = document.getElementById("rightPage");

  const pages = [
    { left: "", right: "Front Cover" },
    { left: "Introduction", right: "Projects" },
    { left: "Experience", right: "Back Cover" },
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
