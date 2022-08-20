// Code your solutions in this file

const gifts = ["Guadalupe", "Ollie", "Aki"]

let myCard = []

const writeCards = (names , party) => {
  for (let counter = 0; names.length > counter; counter++){
const card =`Thank you, ${names[counter]}, for the wonderful ${party} gift!`

myCard.push(card)

  }return myCard;
}

const countDown = (number) => {
  while ( number > -1) {
    console.log(number);
    number--;
  }
}
