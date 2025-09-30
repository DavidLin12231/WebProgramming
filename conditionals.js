let x = 70;
let y = 100;
z = x + y;

numberElement = document.getElementById('number');
numberElement.innerHTML = z

if (z > 160){
  numberElement.style.color = 'red'
} else {
  numberElement.style.color = 'green'
}
