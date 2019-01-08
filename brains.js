var get = function(url){
  var getter = new XMLHttpRequest();
  getter.open('GET', url, true);
  alert(console.log(getter.responseText));
  getter.send();
}


function loaddata() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://www.reddit.com/r/todayilearned/top.json?count=10', false);
  // http://www.mocky.io/v2/5c13d2c93400006900b8e7de
  xhr.send();

  if (xhr.status != 200) {
    alert('Помилка ' + xhr.status + ': ' + xhr.statusText);
  } else {
    alert(xhr.responseText);
  }
}

function start(){
  // get ('http://www.mocky.io/v2/5c13d2c93400006900b8e7de');  
  // loaddata();
}
