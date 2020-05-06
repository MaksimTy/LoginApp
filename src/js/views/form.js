/**
 * Function show error. Add input error.
 * @param {HTMLInputElement} elem
 * @
 */
export function showInputError(elem) {
  const parent = elem.parentElement;
  const msg = elem.dataset.invalidMessage || "Invalid input.";
  const template = inputErrorTemplate(msg);
  elem.classList.add("is-invalid");
  parent.insertAdjacentHTML("beforeend", template);
}

/**
 * Function input error template
 * @param {String} msg
 * @returns {String}
 */

function inputErrorTemplate(msg) {
  return `
  <div class="invalid-feedback">
    ${msg}
  </div>
  `;
}

/**
 * Function remove input error.
 * @param {HTMLInputElement} elem
 *
 */
export function removeInputError(elem) {
  const parent = elem.parentElement;
  const err = parent.querySelector(".invalid-feedback");
  if (!err) {
    return;
  }
  elem.classList.remove("is-invalid");
  parent.removeChild(err);
}
