let arr1 = [
  { id: "abdc4051", date: "2017-01-24" }, 
  { id: "abdc4052", date: "2017-01-22" }
];

let arr2 = [
  { id: "abdc4051", name: "ab" },
    {
        "hex": "#C5E384", 
        "name": "Yellow Green", 
        "rgb": "(197, 227, 132)"
    }, 
    {
        "hex": "#FFAE42", 
        "name": "Yellow Orange", 
        "rgb": "(255, 174, 66)"
    }
];

let merged = [];

for(let i=0; i<arr1.length; i++) {
  merged.push({
   ...arr1[i], 
   ...(arr2.find((itmInner) => itmInner.id === arr1[i].id))}
  );
}

console.log(merged);

