const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

  let index = 0;

  document.body.addEventListener('e', onKeyDownHandler);  /*{
    console.log(e.which)
    onKeyDownHandler(e)
  })*/

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    console.log(e.which)
    if (key === code[index]) {
      index++;
      console.log(e.which)
      if (index === code.length) {
          console.log('test hurray')
          window.alert("Hurray!");
          index = 0;
        }
    } else {
      index = 0;
    }
  }


}
