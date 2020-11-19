// Initial empty arrays
let lottoArr = [];
let powerball;

// Function that generates lotto numbers
const lottoGen = () => {
  for (let i = 0; lottoArr.length < 5; i++) {
    let x;
    x = Math.floor(Math.random() * 69) + 1;

    if (lottoArr.indexOf(x) == -1) {
      lottoArr.push(x);
    } else {
      i--;
    }
  }

  powerball = Math.floor(Math.random() * 26) + 1;

  console.log(lottoArr);
  console.log(powerball);
};

lottoGen();
