// Merging and Updating Nested Objects with Spread Operator

const profile = { name: "Charlie",
age: 29,
address: { city: "San Francisco",
zipcode: "94101" } };

const updates = { 
  age:31,
  address: { zipcode: "94109",
  country: "USA" } };
  
  const updatedProfile = {
    ...profile,
    age : updates.age,
    address: {
    ...profile.address,
    ...updates.adresss}
  }
  
  console.log(updatedProfile);