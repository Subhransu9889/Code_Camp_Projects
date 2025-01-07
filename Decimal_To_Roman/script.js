const inputnumber = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");


const convertToRoman = (num) => {
    const ref = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
    ];
    const res = [];
  
    ref.forEach(function (arr) {
      while (num >= arr[1]) {
        res.push(arr[0]);
        num -= arr[1];
      }
    });
  
    return res.join('');
  };
  const alertingprint = (para1) => {
    output.classList.remove("hidden");
    output.innerText = para1;
    output.style.color = "red";
  }
const print = (para) => {
    output.classList.remove("hidden");
    output.innerText = para;
}
const handleconverter = () => {
  const number = inputnumber.value;
  if(!number){
    alertingprint("Please enter a valid number");
  }else if(number < 0){
    alertingprint("Please enter a number greater than or equal to 1");
  }else if(number >= 4000){
    alertingprint("Please enter a number less than or equal to 3999");
  }
  else{
    const actual = convertToRoman(number);
    print(actual);
  }
}
btn.addEventListener("click", handleconverter);