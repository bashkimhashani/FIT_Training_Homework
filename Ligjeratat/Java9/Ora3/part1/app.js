const API = 'https://jsonplaceholder.typicode.com';

let lStorage = window.localStorage

let hasArticles = lStorage.getItem('articleList');

console.log(lStorage);


if(hasArticles) {
  renderHtml(JSON.parse(hasArticles));
  console.log('From Storage');
  
} else {
  fetch(`${API}/posts`)
    .then(response => response.json())
    .then(posts => {
      renderHtml(posts)
      lStorage.setItem('articleList', JSON.stringify(posts));
      console.log('From API');
    })
    .catch(error => console.error(error));
}

function renderHtml(articles) {
  let articlesHtml = ``;

  articles.forEach(item => {
    articlesHtml +=`
      <article class="article-class">
        <h1>${item.title}</h1>
        <p>${item.body}</p>
      </article>
      `;
  });

  document.getElementById('article-list').innerHTML = articlesHtml;


}

lStorage.setItem('item-1', 123);
lStorage.setItem('item-2', 123);
lStorage.setItem('item-3', 123);
lStorage.setItem('item-4', 123);
lStorage.setItem('item-5', 123);
lStorage.setItem('item-6', 123);
lStorage.setItem('item-7', 123);
lStorage.setItem('item-8', 123);
lStorage.setItem('item-9', 123);
lStorage.setItem('item-10', 123);

for(let item in lStorage) {
    document.write(JSON.stringify(item));
    document.write(JSON.stringify(lStorage[item]));
    document.write("<br>");
}

// document.write(JSON.stringify(lStorage));

$("#objectValue").focusout(function() {
    if($("#objectValue").value.length > 0) {
        $("#2").attr("disabled");
        $("#4").attr("disabled");
    }
});



$('#myForm').submit(function(event) {
    let objectKey = $('#objectKey');
    let objectValue = $('#objectValue');
    let action = $('#action').value;

    switch(action) {
        case "1" : createItem(objectKey, objectValue) ; break;
        case "2" : readItem(objectKey) ; break;
        case "3" : updateItem(objectKey, objectValue) ; break;
        case "4" : deleteItem(objectKey) ; break;
    }
});

function getAll() {
    return JSON.parse(lStorage);
}

function createItem(objectKey, objectValue) {
    lStorage.setItem(objectKey, JSON.parse(objectValue));
}

function readItem(objectKey) {
    lStorage.getItem(objectKey);
}

function updateItem(objectKey, objectValue) {
    lStorage.setItem(objectKey, objectValue);
}

function deleteItem(objectKey) {
    lStorage.deleteItem(objectKey);
}