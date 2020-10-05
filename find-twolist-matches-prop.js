// Comparing two arrays of objects, and
// exclude the elements who dont match version property
// but do match id's into new array in JS

var result1 = [
    {id:1, name:'Sandra', type:'user', username:'sandra', version: 0},
    {id:2, name:'John', type:'admin', username:'johnny2', version: 1},
    {id:3, name:'Peter', type:'user', username:'pete', version: 0},
    {id:4, name:'Bobby', type:'user', username:'be_bob', version: 0}
];

var result2 = [
    {id:2, name:'John', email:'johnny@example.com', version: 0},
    {id:4, name:'Jake', email:'bobby@example.com', version: 0}
];

var props = ['id', 'name'];

var result = result1.filter(function(o1){
    // filter out (!) items in result2
    return result2.some(function(o2){
        return (o1.id === o2.id) && (o1.version !== o2.version);          // assumes unique id
    });
}).map(function(o){
    // objects with only the required properties
    // and map to apply this to the filtered array as a whole
    return props.reduce((newo) => {
        newo = o;
        return newo;
    }, {});
});

console.log('result: ', result);