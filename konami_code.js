const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

  let index = 0;

  document.body.addEventListener('keydown', codeAlertTest);

  function codeAlertTest(keydown) {
    const key = parseInt(keydown.detail || keydown.which);
    console.log(keydown.which)
    if (key === code[index]) {
      index++;
      console.log(keydown.which)
      if (index === code.length) {
          console.log('test hurray')
          alert("Nice!");
          index = 0;
        }
    } else {
      index = 0;
    }
  }


}
