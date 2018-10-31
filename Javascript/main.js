function justOne(check) {
    const checkboxes = document.getElementsByName('check') //get an array of all the elements with the name attribute "check"
    checkboxes.forEach((el) => el !== check ? el.checked = false : null);
  }