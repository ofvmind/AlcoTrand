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

//const randomAlco = (isHard) => {
    //let alcoSet = [];
    //if (isHard)  alcoSet = alco.filter(item => item.strength === "hard");
    //else alcoSet = alco.filter(item => item.strength === "light");
    //const r = {};
    //for (let i = 0; i < 1000; i++) {
      //const res = getRandomIntInclusive(0, alcoSet.length);
      //if (r[res]) {
        //r[res]++;
      //} else r[res] = 1;
    //}
    //let k = "";
    //let m = 0;
    //console.log(r);
    //for (const key in r) {
      //console.log(key);
      //if (m < r[key]) {
        //m = r[key];
        //k = key;
      //}
    //}
    //console.log(k);
    //console.log(m);
    //console.log(level);
    //return alcoSet[k].name;
  //};