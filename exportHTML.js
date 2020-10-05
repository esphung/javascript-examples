function convertObjectToHTML(item) {
  let key;
  let array = [];
  // console.log(item);


  for ( key in item ) {
    if ( item.hasOwnProperty( key ) ) {
      // parse nested opbj properties
      if (key === 'category') {
        // console.log(item[key].name);
        array.push('<td>' + item[key].name + '</td>\n');
      } else if (key === 'payee') {
         array.push('<td>' + item[key].name + '</td>\n');
      } else {
        array.push('<td>' + item[key] + '</td>\n');
      }
    }
  }
  return array.join( '' );
}

function getHTMLObjectRows(array) {
  let string = '';
  let i = array.length - 1;
  for (i; i >= 0; i -= 1) {
    string += `<tr>${convertObjectToHTML(array[i])}</tr>${'\n'}`
  }
  return string;
}

function getObjectKeysHTML (list) {
  let keys = [];

  let key;

  let item = list[0];

  for ( key in item ) {
    keys.push('<th>' + key + '</th>');
  }
  return keys.join('\n'); 
}


const htmlTop = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
        /*
        th {
          border: 1px solid black;
        }
        */
        table {
            border-collapse: collapse;
            font: 15px sf-pro;
        }

        td {
            border: 1px lightgray solid;
        }

        th, td {
          padding: 15px;
          text-align: left;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, sf-pro;
        }
    </style>
    <title>${'Hello WOrld'}</title>
  </head>
    <body>
`;

const htmlTable = `
    <table style="width:100%">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </table>
`;

const htmlBottom = `
  </body>
</html>
`

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


function getCSVHTML (data) {
  let html = '';

  const keys = `${getObjectKeysHTML(data)}`;

  const tableHead = `${keys}`;

  const table = `
<div>
<table style="width:100%">
<tr>
${keys}
</tr>
${getHTMLObjectRows(data)}
</table>

</div>${'\n'}
`;

  const row  = `
<div>${getHTMLObjectRows(data)}</div>
`;

  html = htmlTop + table + htmlBottom;

  // console.log(html);
  return html;
}


console.log(getCSVHTML(data))
