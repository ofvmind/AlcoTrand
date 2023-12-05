let getRandomIntInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = [1, 0, 0, 0, 0, ];
let b = 0;
() => {
  if (b + 1 < 5) {
    a[b] = 0;
    a[b + 1] = 1;
    b++;
  }
}

console.log(a)
console.log(b)

const obj = {}

const res = 111;
obj[res] = 112;
console.log(obj);

//var qs = "querySelector";
//document[ qs ]('p')["style"]["background" + "Color"] = "orange";
// document.querySelector('p').style.backgroundColor = "orange";