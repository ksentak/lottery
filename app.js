// Initial variables
let lottoArr = [];
let powerball;

// Generates lotto numbers
const lottoGen = () => {
  for (let i = 0; lottoArr.length < 5; i++) {
    let x;
    x = Math.floor(Math.random() * 69) + 1;

    // Checks to see if value is already in array
    if (lottoArr.indexOf(x) == -1) {
      lottoArr.push(x);
    } else {
      i--;
    }
  }
  // Generates random powerball number
  powerball = Math.floor(Math.random() * 26) + 1;

  // Displays lotto values
  document.querySelector('#ball-1').innerHTML = lottoArr[0].toString();
  document.querySelector('#ball-2').innerHTML = lottoArr[1].toString();
  document.querySelector('#ball-3').innerHTML = lottoArr[2].toString();
  document.querySelector('#ball-4').innerHTML = lottoArr[3].toString();
  document.querySelector('#ball-5').innerHTML = lottoArr[4].toString();
  document.querySelector('#power-ball').innerHTML = powerball.toString();
};

// Removes values from lotto balls
const clearLotto = () => {
  lottoArr = [];
  document.querySelector('#ball-1').innerHTML = '';
  document.querySelector('#ball-2').innerHTML = '';
  document.querySelector('#ball-3').innerHTML = '';
  document.querySelector('#ball-4').innerHTML = '';
  document.querySelector('#ball-5').innerHTML = '';
  document.querySelector('#power-ball').innerHTML = '';
};

// Onclick that displays lotto nums
const displayLotto = async () => {
  await clearLotto();
  lottoGen();
};

// Calls displayLotto on click
document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault();
  displayLotto();
});
