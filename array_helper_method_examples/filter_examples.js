// filter helper method example

var products = [
    {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
    {name: 'banana', type: 'fruit', quantity: 10, price: 15},
    {name: 'celery', type: 'vegetable', quantity: 30, price: 13},
    {name: 'orange', type: 'fruit', quantity: 3, price: 5}
  ];
  
  var filteredProducts = [];
  
  for (var i = 0; i < products.length; i++){
    if (products[i].type === 'fruit'){
      filteredProducts.push(products[i]);
    }
  }
  
  // console.log(filteredProducts);
  
  products.filter(function(product){
    return product.type === 'fruit';
  });
  
  // type is 'vegetible', quantity is greater than 0, privae is less than 10
  
  products.filter(function(product){
    return product.type === 'vegetable' 
      && product.quantity > 0
      && product.price < 10;
  });
  
  // Filter challenge 1
  var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
  
  var filteredNumbers = numbers.filter(function(number){
    return number > 50;
  });
  
  // Filter challenge 2
  var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];
   
   var filteredUsers = users.filter(function(user){
    return user.admin;
   });
  
  // Filter challenge 3
  // Create a function called 'reject'. Reject should work in the opposite way
  // of 'filter' - if a function returns true, the item should not be included
  // in the new array.
  function reject(array, iteratorFunction) {
   return array.filter(function(x){
    return !iteratorFunction(x)
   });
  };