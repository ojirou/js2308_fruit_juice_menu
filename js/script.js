const menu = document.querySelector('#menu');

const lists = [
    {
      name: 'イチゴ',
      img: 'strawberry.jpg',
      price: 550,
    },
    {
      name: 'ライム',
      img: 'lime.jpg',
      price: 500,
    },
    {
      name: 'マンゴー',
      img: 'mango.jpg',
      price: 550,
    },
    {
      name: 'レモン',
      img: 'lemon.jpg',
      price: 500,
    },
    {
      name: 'イチジク',
      img: 'fig.jpg',
      price: 550,
    },
    {
      name: 'リンゴ',
      img: 'apple.jpg',
      price: 500,
    },
];

for(let i = 0; i < lists.length; i++){
    const name = lists[i].name;
    const img = lists[i].img;
    const price = lists[i].price;

    const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}円</p></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}