let Who = ["The dog ", "My granma ", "His turtle ", "My bird "];
let What = ["eat ", "pissed ", "crushed ", "broked "];
let When = [  "before the class ", "right in time ", "when I finished ", "during my lunch ",  "while I was praying ",];
function onload() {
  let Quien = Math.floor(Math.random() * Who.length);
  let Que = Math.floor(Math.random() * What.length);
  let Cuando = Math.floor(Math.random() * When.length);
  let excusa = Who[Quien] + What[Que] + When[Cuando];
  return excusa;
}
console.log(onload());
