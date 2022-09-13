let str = document.getElementsByClassName("heading")[0].outerText;
let chars = [...str];
let result ="";
for(let i in chars){
    result += `<span>${chars[i]}</span>`;
}
console.log(result);
document.getElementsByClassName("heading")[0].innerHTML = result;