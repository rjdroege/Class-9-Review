let foods = [
    {name: 'blueberries', price: '$2.00'},
    {name: 'persimmons' , price:'$3.00'},
    {name: 'garlic', price: '$1.00'}
];

let ul = document.getElementById('list');

for (let food of foods){
    let li = document.createElement('li');
    li.innerText = food.name;
    ul.appendChild(li);
}