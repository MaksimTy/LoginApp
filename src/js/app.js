import "../css/style.css";
import "./plugins/bootstrap";

import UI from "./config/ui.config";
import REGISTER from "./config/register.config";
import { validate } from "./helpers/validate";
import { getResponseObject } from "./views/register.form";
import { showInputError, removeInputError } from "./views/form";
import { login, getLoginErrorMessage } from "./services/auth.service";
import { register, getRegisterErrorMessage } from "./services/register.service";
import { notify } from "./views/notifications";
import { getCountriesDb } from "./storage/countries.db";
import { getCitiesDb } from "./storage/cities.db";
import { getAutocomplete } from "./plugins/bootstrap/bootstrap";
import { getDatePicker } from "./plugins/bootstrap/bootstrap";


const { form, inputEmail, inputPassword } = UI;
const l_inputs = [inputEmail, inputPassword];

const { r_form, email, password, country, city } = REGISTER;
const r_inputs = [email, password];

// events
document.addEventListener("DOMContentLoaded", (e) => {
  getDatePicker();
  getCountriesDb().then((countries) => {
    getAutocomplete(country.id, countries);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  onSubmitLoginForm();
});

r_form.addEventListener("submit", (e) => {
  e.preventDefault();
  onSubmitRegistrationForm();
});

l_inputs.forEach((elem) =>
  elem.addEventListener("focus", () => removeInputError(elem))
);

r_inputs.forEach((elem) =>
  elem.addEventListener("focus", () => removeInputError(elem))
);

city.addEventListener("focus", (e) => {
  let index = country.dataset.index;
  getCitiesDb(index).then((cities) => {
    getAutocomplete(city.id, cities);
  });
});

// handlers

async function onSubmitLoginForm() {
  const isValidForm = l_inputs.every((elem) => {
    const isValidInput = validate(elem);
    if (!isValidInput) {
      showInputError(elem);
    }
    return isValidInput;
  });

  if (!isValidForm) {
    return;
  }
  try {
    await login(inputEmail.value, inputPassword.value);

    notify({ msg: "Login success", className: "alert-success" });

    form.reset();
    return;
  } catch (error) {
    const msg = getLoginErrorMessage(error);
    const className = "alert-warning";
    const timeout = 3000;
    notify({ msg, className, timeout });
  }
}

async function onSubmitRegistrationForm() {

  const isValidForm = r_inputs.every((elem) => {
    const isValidInput = validate(elem);
    if (!isValidInput) {
      showInputError(elem);
    }
    return isValidInput;
  });
  if (!isValidForm) {
    return;
  }
  console.log(REGISTER.date_of_birth.value);
  try {
    const object = getResponseObject(r_form);
   
    await register(object).then((res) => {
      const msg = res.message;
      const className = "alert-warning";
      const timeout = 3000;
      notify({ msg, className, timeout });
    });
  } catch (error) {
    const msg = getRegisterErrorMessage(error);
    const className = "alert-warning";
    const timeout = 3000;
    notify({ msg, className, timeout });
  }
}


