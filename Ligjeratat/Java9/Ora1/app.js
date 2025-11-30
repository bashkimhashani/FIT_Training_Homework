// Write a code that displays a list of employees via AJAX (from employees.json file) and depending on the "inOffice" status,
// assign class="in" or class="out" to a list item. 
// Place the list in div with id "employeeList". Styles and markup attached. The result should look like this:

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify([
    {
    employeeName: 'Test 1',
    inOffice: Math.round(Math.random( 0 , 1 )),
    },
    {
    employeeName: 'Test 2',
    inOffice: Math.round(Math.random( 0 , 1 )),
    },
    {
    employeeName: 'Test 3',
    inOffice: Math.round(Math.random( 0 , 1 )),
    },
    {
    employeeName: 'Test 4',
    inOffice: Math.round(Math.random( 0 , 1 )),
    },
    {
    employeeName: 'Test 5',
    inOffice: Math.round(Math.random( 0 , 1 )),
    },
  ]),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => renderHtml(json)
  );

  function renderHtml(content) {
    let contentAray = [];

    console.log(content);
    
    for(let item in content) {
        
        
        for (const [key, value] of Object.entries(item)) {
            console.log(`${key}: ${value}`);
            contentAray.push({key: value}); 
            console.log(contentAray); 
        }
    }

    // console.log(contentAray);
    
    
    let articleHtml = ``;

    contentAray.forEach(employee => {
        articleHtml += `<article class="${employee.inOffice ? 'green' : 'red'}"></article>`;
    });

    document.getElementById('listofemployees').append(articleHtml);
  }