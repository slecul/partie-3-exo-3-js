function changeColor(object, ev){
  var text = document.getElementById('text');
  if(ev == 'green'){
    text.setAttribute('class', 'green');
  }else if (ev == 'red') {
    text.setAttribute('class', 'red');
  }else if (ev == 'blue') {
    text.setAttribute('class', 'blue');
  }
}
