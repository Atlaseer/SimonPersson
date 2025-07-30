export function BookScript() {
  let currentPage = 0;

  const leftPage = document.getElementById("leftPage");
  const rightPage = document.getElementById("rightPage");

  const pages = [
    { left: "", right: "Front Cover" },
    { left: "Page 1", right: "Page 2" },
    { left: "Page 3", right: "Back Cover" },
  ];

  function updatePages() {
    leftPage.textContent = pages[currentPage].left;
    rightPage.textContent = pages[currentPage].right;
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
