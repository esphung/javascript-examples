

const data =  [
  {
    "id": "1575264547767",
    "date": "2019-12-02T05:29:07.767Z",
    "amount": 0.01,
    "payee": {},
    "category": {
     "id": 0,
     "name": "Income",
     "color": "#00e157",
     "type": "income"
    },
    "type": "income"
  },
   {
    "id": "1575264543544",
    "date": "2019-12-02T05:29:03.544Z",
    "amount": -11.24,
    "payee": {},
    "category": {
     "id": 2,
     "name": "Transport & Travel",
     "color": "#e05ceb",
     "type": "expense"
    },
    "type": "expense"
  }
];


// var csv = data.map(function(d){
//   // const amount_values = JSON.stringify(d.amount);
//   return JSON.stringify(d.amount);
// })
// .join(',') 
// .replace(/(^\[)|(\]$)/mg, ''); // remove opening [ and closing ] brackets from each line 

// console.log(csv)


function getObjectKeys (list) {
  let keys = [];

  let key;

  let item = list[0];

  for ( key in item ) {
    keys.push(key);
  }
  return keys.join(','); 
}

function convertObjectToCSV(item) {
  let key;
    // item = {
    //   name: "John",
    //   surname: "Smith",
    //   phone: "253 689 4555"
    // },
  let array = [];

  console.log(item)

  for ( key in item ) {
    if ( item.hasOwnProperty( key ) ) {
      // parse nested opbj properties
      if (key === 'category') {
        // console.log(item[key].name);
        array.push(item[key].name);
      } else if (key === 'payee') {
         array.push(item[key].name);
      } else {
        array.push(item[key]);
      }
    }
  }
  return array.join( ',' );
}

function getCSVObjects(array) {
  let string = '';
  let i = array.length - 1;
  for (i; i >= 0; i -= 1) {
    string += `${convertObjectToCSV(array[i])} ${'\n'}`
  }
  return string;
}

function convertObjectToHTML(item) {
  let key;
  let array = [];
  // console.log(item);

  for ( key in item ) {
    if ( item.hasOwnProperty( key ) ) {
      // parse nested opbj properties
      if (key === 'category') {
        // console.log(item[key].name);
        array.push(item[key].name);
      } else if (key === 'payee') {
         array.push(item[key].name);
      } else {
        array.push(item[key]);
      }
    }
  }
  return array.join( ',' );
}

function getHTMLObjects(array) {
  let string = '';
  let i = array.length - 1;
  for (i; i >= 0; i -= 1) {
    string += `${convertObjectToHTML(array[i])} ${'\n'}`
  }
  return string;
}


// let csv = '';

// csv += `${getObjectKeys(data)} ${'\n'}`;

// csv += `${getCSVObjects(data)} ${'\n'}`;

// console.log(csv)



function getCSVHTML (data) {
  let html = '';

  const keys = `<div>${getObjectKeys(data)}</div>${'\n'}`;

  const row  = `<div>${getHTMLObjects(data)}</div>${'\n'}`;

  html = keys + row;

  console.log(html);
  return html;
}


console.log(getCSVHTML(data))


// console.log(getObjectKeys(data))

// console.log(getCSVObjects(data))

// console.log(convertObjectToCSV(data[0]));






