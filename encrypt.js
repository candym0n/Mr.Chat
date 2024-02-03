function encode(a) {
  const things = 'GqxZ0fdBQoHDRhCvK2TkiM/ye9WS+JnOYA3FXEzw7g8p4mIVsjU61l5uabcPLNtr';
  a += "  ";
  a = a.split('').reduce(function(curr, thing) {
    return curr + thing.charCodeAt().toString(2).padStart(16, "0");
  }, "");
  let list = [];
  for (let i = 0; i < a.length; i += 6) {
    list.push(a.slice(i, i + 6));
  }

  list = list.map(a => {
    return parseInt(a, 2);
  });
  list = list.map(a => things[a]).join("");
  return list;
}

function decode(a) {
  const things = 'GqxZ0fdBQoHDRhCvK2TkiM/ye9WS+JnOYA3FXEzw7g8p4mIVsjU61l5uabcPLNtr';
  let list = a;
  list = list.split('').map(a => things.indexOf(a));
  list = list.map(a => a.toString(2).padStart(6, "0")).join("");
  let result = "";
  for (let i = 0; i < list.length; i += 16) {
    let chunk = list.slice(i, i + 16);
    let charCode = parseInt(chunk, 2);
    result += String.fromCharCode(charCode);
  }
  return result.substring(0, result.length - 2)
}
console.log(decode("GfKGWGqEGxGG9GqEGBQGWKq5Gd0GJGqgGBeG9KGYGdLG9YGYGBXGvKqaGfaGRYGYGdXG+sGYGZQGnGGYGxG"))

let a = encode("The derivative of y=x^2 is 2x");
console.log(a)
