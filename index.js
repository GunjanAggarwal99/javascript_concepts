// Import stylesheets
import './style.css';

// Write Javascript code!

//recursion
const myself = {
  name: 'max',
  friends: [
    {
      name: 'manuel',
      friends: [
        {
          name: 'anna',
        },
        {
          name: 'chariles',
        },
      ],
    },
    {
      name: 'maximilliean',
    },
  ],
};

function getFriends(person) {
  const collectNames = [];
  if (!person.friends) {
    return [];
  }
  for (const friend of person.friends) {
    collectNames.push(friend.name);
    collectNames.push(...getFriends(friend));
  }
  return collectNames;
}

console.log(getFriends(myself));

//tagged template

function productDiscription(string, prodName, prodPrice) {
  console.log(string);
  console.log(prodName);
  console.log(prodPrice);
  return `${string[0]}${prodName}${string[1]}${prodPrice}`;
}

const prodName = 'js course';
const prodPrice = 20.56;

const productOutput = productDiscription`The product name is (${prodName}) and its price is ${prodPrice}`;
console.log(productOutput);
