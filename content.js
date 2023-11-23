function highlightGrades() {
  var fileEle = document.getElementsByClassName('grade');
  for(var i = 0; fileEle[i]; ++i) {
    var test = Number(fileEle[i].innerHTML.trim());
    var color = '';
    var opac = 1;
    if(test < 65){
      color = '#e48b85';
    } else if(test >= 65 && test < 80){ 
      color = '#f6e994';
    } else if(test >= 80){
      color = '#90d49c';
    }
    fileEle[i].parentElement.parentElement.parentElement.parentElement.style.background = color;
    fileEle[i].parentElement.parentElement.parentElement.parentElement.style.borderTop = '1px solid #ccc';
  }
}

i = 1;
while (i < 10) {
  setTimeout(highlightGrades, (500 * i));
  i++;
}

setInterval(highlightGrades, 5000);

