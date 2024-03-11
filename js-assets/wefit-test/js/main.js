const menuButton = document.getElementsByClassName('btn-group-vertical')[0];
menuButton.className = 'btn-group-horizontal';

const headerCard = document.getElementsByClassName('jumbotron')[0]
headerCard.style.backgroundColor = '#6c757d'
headerCard.style.textAlign = 'right'

const headerTexts = document.querySelectorAll('.jumbotron > *')
headerTexts.forEach((e) => {
  e.style.color = '#FFFFFF'
})

const headerButton = document.querySelectorAll('.jumbotron a')[0]
headerButton.classList.remove('btn-primary')
headerButton.style.backgroundColor = '#27A844'
headerButton.style.borderColor = '#27A844'

const cardList = document.getElementsByClassName('row')[2]
const item1 = cardList.querySelector('.col-lg-3:nth-child(2)');
const item2 = cardList.querySelector('.col-lg-3:nth-child(3)');
const item3 = cardList.querySelector('.col-lg-3:nth-child(4)');
const item4 = cardList.querySelector('.col-lg-3:nth-child(5)');

const cardListItem1Button = item1.querySelector('a')
cardListItem1Button.style.backgroundColor = '#27A844';
cardListItem1Button.style.borderColor = '#27A844';

cardList.insertBefore(item4, item1);
cardList.insertBefore(item3, item2);

const list = document.querySelector('.list-group');
for (let index = 0; index <= 1; index++) {
  const newItem = document.createElement('li')
  newItem.classList.add('list-group-item')
  newItem.textContent = `${index === 0 ? 'Quarto' : 'Quinto' } item`
  list.appendChild(newItem)
}

const listItem1 = list.querySelector('.list-group-item:nth-child(1)');
const listItem4 = list.querySelector('.list-group-item:nth-child(4)');
listItem1.classList.remove('active')
listItem4.classList.add('active')