document.addEventListener("DOMContentLoaded", () => {
    const columns = document.querySelectorAll(".col-auto");
  
    columns.forEach(col => {
      const back = col.querySelector(".back");
      const carte = col.querySelector(".carte");
  
      col.addEventListener("click", () => {
        back.classList.toggle("d-none");
        carte.classList.toggle("d-none");
        carte.classList.toggle("flip");
      });
    });
  });