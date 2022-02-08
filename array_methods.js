var articles = [
    { name: "Bike", value: 3000},
    { name: "TV", value: 2500},
    { name: "Book", value: 320},
    { name: "Cellphone", value: 10000},
    { name: "Laptop", value: 20000},
    { name: "Keyboard", value: 500},
    { name: "Headsets", value: 1700}
];

//Filter (Filter return data)
let filteredArticles = articles.filter((article)=>{return article.value <= 500});
console.log(filteredArticles);

//Map (Get Article's mames)
let mappedArticles = articles.map((article)=>{return article.name});
console.log(mappedArticles);

//Find (Find an article using article's name)
let foundArticles = articles.find((article)=>{return article.name === 'Laptop'});
console.log(foundArticles);

//forEach
articles.forEach((article)=>console.log(article));

//Some (Some return boolean flag)
let cheapArticles = articles.some((article)=>{return article.value <= 700})