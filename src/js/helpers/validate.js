const regExpDic = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^[0-9a-zA-Z]{4,}$/,
};

/**
 * Function validate. Check Input on RegExp provided in
 * regExpDic by input data-required type
 * @param {HTMLInputElement} elem
 * @returns {Boolean} - true if input valid or 
 * if data-required attr is missing
 */
export function validate(elem) {
  const regExpName = elem.dataset.required;
  if (!regExpDic[regExpName]) {
    return true;
  } 
  return regExpDic[regExpName].test(elem.value);
}
