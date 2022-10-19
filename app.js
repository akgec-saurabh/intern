const a = [2, 4, 6, 8, 10, 12];

// let a = [ 5, 8, 3, 2, 6, 9, 7, 10];
a.sort((a, b) => a - b);
let b = [];

let small = a.length - 1;
let large = small / 2;
for (var i = 0; i < large; i++) b.push(a[small - i], a[i]);
if (a.length % 2) b.push(a[i]);

console.log(b);
