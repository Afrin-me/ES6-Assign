const people = [
  {
    name: "Alice",
    address: { city: "New York", street: { name: "Broadway", number: 123 } },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];

const name = people.map(({ name }) => name);

console.log(name);

// city and street name from the address.

// const adress = people.map(({city},{street}))

people.forEach(
  ({
    name,
    address: {
      city,
      street: { name: streetName },
    },
  }) => {
    console.log(`Name: ${name}, City: ${city}, Street: ${streetName}`);
  }
);
