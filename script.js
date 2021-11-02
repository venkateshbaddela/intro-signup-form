////////////////elements
const btnSubmit = document.querySelector(".btn--green");
const fName = document.querySelector(".form-fname");
const lName = document.querySelector(".form-lname");
const email = document.querySelector(".form-email");
const password = document.querySelector(".form-password");
const logo = document.querySelectorAll(".input-logo");
const txt = document.querySelectorAll(".input-txt");

const logoArr = [...logo];
const txtArr = [...txt];

logoArr.forEach((el) => el.classList.add("hidden"));
txtArr.forEach((el) => el.classList.add("hidden"));

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

////////////////////functions

const elSelect = function (el) {
  [...el.parentElement.children].forEach((element, i) => {
    if (element !== el.className) {
      element.classList.remove("hidden");
    }
  });
};
const elRemove = function (el) {
  [...el.parentElement.children].forEach((element, i) => {
    if (element !== el) {
      element.classList.add("hidden");
    }
  });
};

///////////////event handler

btnSubmit.addEventListener("click", function () {
  if (fName.value === "") {
    elSelect(fName);
  } else elRemove(fName);

  if (lName.value === "") {
    elSelect(lName);
  } else elRemove(lName);

  if (password.value === "") {
    elSelect(password);
  } else elRemove(password);

  if (!email.value.match(validRegex) || email.value === "") {
    elSelect(email);
  } else elRemove(email);
});
