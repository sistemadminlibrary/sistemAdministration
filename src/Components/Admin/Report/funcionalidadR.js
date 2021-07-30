const viewPrincipal = () => {
  document.querySelector(".container-loan-table").style.display = "block";
  document.querySelector(".report-book").style.display = "none";
  document.querySelector(".report-loan").style.display = "none";
  document.querySelector(".report-return").style.display = "none";
  document.querySelector(".report-reservation").style.display = "none";

  document.querySelector("#rep-libro").classList.add("quitB");
  document.querySelector("#rep-libro").classList.remove("asignedClas");
  document.querySelector("#repor-loan").classList.remove("asignedClas");
  document.querySelector("#repor-loan").classList.add("quitB");

  document.querySelector("#rep-principal").classList.add("firsChil");
  document.querySelector("#rep-principal").classList.remove("topBorder");

  document.querySelector("#repor-return").classList.remove("asignedClas");
  document.querySelector("#repor-return").classList.add("quitB");

  document.querySelector("#repor-reservation").classList.add("quitB");
  document.querySelector("#repor-reservation").classList.remove("asignedClas");
};

const changeView = () => {
  document.querySelector(".report-book").style.display = "block";
  document.querySelector(".container-loan-table").style.display = "none";
  document.querySelector(".report-loan").style.display = "none";
  document.querySelector(".report-return").style.display = "none";
  document.querySelector(".report-reservation").style.display = "none";

  ///asignar clases
  document.querySelector("#rep-libro").classList.remove("quitB");
  document.querySelector("#rep-libro").classList.add("asignedClas");

  document.querySelector("#rep-principal").classList.remove("firsChil");

  document.querySelector("#rep-principal").classList.add("topBorder");

  document.querySelector("#repor-loan").classList.remove("asignedClas");
  document.querySelector("#repor-loan").classList.add("quitB");

  document.querySelector("#repor-return").classList.remove("asignedClas");
  document.querySelector("#repor-return").classList.add("quitB");

  document.querySelector("#repor-reservation").classList.add("quitB");
  document.querySelector("#repor-reservation").classList.remove("asignedClas");
};

const viewLoan = () => {
  document.querySelector(".report-loan").style.display = "block";
  document.querySelector(".container-loan-table").style.display = "none";
  document.querySelector(".report-book").style.display = "none";
  document.querySelector(".report-return").style.display = "none";
  document.querySelector(".report-reservation").style.display = "none";

  document.querySelector("#rep-libro").classList.add("quitB");
  document.querySelector("#rep-libro").classList.remove("asignedClas");

  document.querySelector("#repor-loan").classList.remove("quitB");
  document.querySelector("#repor-loan").classList.add("asignedClas");

  document.querySelector("#rep-principal").classList.remove("firsChil");

  document.querySelector("#rep-principal").classList.add("topBorder");

  document.querySelector("#repor-return").classList.remove("asignedClas");
  document.querySelector("#repor-return").classList.add("quitB");

  document.querySelector("#repor-reservation").classList.add("quitB");
  document.querySelector("#repor-reservation").classList.remove("asignedClas");
};
const viewReturn = () => {
  document.querySelector(".report-return").style.display = "block";
  document.querySelector(".container-loan-table").style.display = "none";
  document.querySelector(".report-book").style.display = "none";
  document.querySelector(".report-loan").style.display = "none";
  document.querySelector(".report-reservation").style.display = "none";

  document.querySelector("#repor-return").classList.remove("quitB");
  document.querySelector("#repor-return").classList.add("asignedClas");

  document.querySelector("#repor-loan").classList.remove("asignedClas");
  document.querySelector("#repor-loan").classList.add("quitB");

  document.querySelector("#rep-principal").classList.remove("firsChil");

  document.querySelector("#rep-principal").classList.add("topBorder");

  document.querySelector("#rep-libro").classList.add("quitB");
  document.querySelector("#rep-libro").classList.remove("asignedClas");

  document.querySelector("#repor-reservation").classList.add("quitB");
  document.querySelector("#repor-reservation").classList.remove("asignedClas");
};
const viewReservation = () => {
  document.querySelector(".report-reservation").style.display = "block";
  document.querySelector(".report-book").style.display = "none";
  document.querySelector(".report-loan").style.display = "none";
  document.querySelector(".container-loan-table").style.display = "none";
  document.querySelector(".report-return").style.display = "none";

  document.querySelector("#repor-reservation").classList.remove("quitB");
  document.querySelector("#repor-reservation").classList.add("asignedClas");

  document.querySelector("#repor-return").classList.add("quitB");
  document.querySelector("#repor-return").classList.remove("asignedClas");

  document.querySelector("#repor-loan").classList.remove("asignedClas");
  document.querySelector("#repor-loan").classList.add("quitB");

  document.querySelector("#rep-principal").classList.remove("firsChil");

  document.querySelector("#rep-principal").classList.add("topBorder");

  document.querySelector("#rep-libro").classList.add("quitB");
  document.querySelector("#rep-libro").classList.remove("asignedClas");
};

export { viewPrincipal, changeView, viewLoan, viewReturn, viewReservation };
