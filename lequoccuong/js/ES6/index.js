let course = {
  name: "javascript",
  price: 1000,
  children: {
    name: "PHP",
  },
};
//đổi tên name con
let {
  name: parentName,
  children: { name: childrenName },
} = course;
// đổi tên name đầu tiên
console.log(parentName);
console.log(childrenName);

function highlight([first, ...strings], ...value) {
  return value.reduce((acc, cur)=> [acc , `<span>${cur}</span>`, strings.reduce.shift],
  [first]).join('');
}
let cuong='Cường';
let age = 18;
let html = highlight`Lê Quốc ${cuong} age ${age} !`
console.log(html);