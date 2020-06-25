// This is for better understanding the output in a console or in a terminal.
const logSeparator = () => console.log('----------------------------------------------------------------------------------------------');

logSeparator();

// Question - 1: Write a custom method to replace the string "The quick brown fox jumps over the lazy dog" with the string "The1 quick2 brown3 fox4 jumps5 over6 the7 lazy8 dog9"
console.log('Question - 1: Write a custom method to replace the string "The quick brown fox jumps over the lazy dog" with the string "The1 quick2 brown3 fox4 jumps5 over6 the7 lazy8 dog9"');
// solution below:
const updateString = str => str.split(' ').map((word, i) => `${word}${i+1}`).join(" ");
console.log(updateString("The quick brown fox jumps over the lazy dog"));

logSeparator();

// Question - 2: Using a single line of code, reverse the order of words in the string below:
console.log('Question - 2: Using a single line of code, reverse the order of words in the string below:');
// solution below:
var dwarves = "bashful doc dopey grumpy happy sleepy sneezy";
const reverseString = str => str.split(" ").reverse().join(" ");
console.log(reverseString(dwarves));


logSeparator();

// Question - 3: Write a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
console.log('Question - 3: Write a function that takes a number (from 1 to 12) and return its corresponding month name as a string.');
// solution one below:
const getMonth = (monthNum) => {
  const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  };
  return months[monthNum];
}
console.log(getMonth(10));

// Another solution for Q3:
const getMonthWithArrayData = (monthNum) => {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return months[monthNum - 1];
}
console.log(getMonthWithArrayData(12));

logSeparator();

// Question 4:  Write a regular expression that matches any string containing at least one digit.
console.log('Question 4:  Write a regular expression that matches any string containing at least one digit.');
const hasNum = str => {
  const regexToCheckNum = /\d/;
  return regexToCheckNum.test(str);
}
console.log(hasNum("The price of the maggi is 10 rupees.")) // returns true;
console.log(hasNum("India is my country.")) // returns false;

logSeparator();

// Question 5: Write a function that returns true if two arrays are identical, and false otherwise.
console.log('Question 5: Write a function that returns true if two arrays are identical, and false otherwise.');
const areIdenticalObjects = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);
const isObject = (elem) => elem !== null && !Array.isArray(elem) && typeof elem === 'object';

const areIdenticalArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i=0; i< arr1.length; i++) {
      // check for objects
       if (isObject(arr1[i]) && isObject(arr2[i])) {
          if (!areIdenticalObjects(arr1[i], arr2[i])) {
            return false;
          } else {
            continue;
          }
      }
      // check for arrays
       if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
          if (!areIdenticalArrays(arr1[i], arr2[i]) ) {
            return false;
          } else {
            continue;
          }
       }
       // check for individual elements
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }
  return true;
}
console.log(areIdenticalArrays(
    ['a', 'b', ['Cholan', 'Madala', {location: 'bangalore'}], 'c'],
    ['a', 'b', ['Cholan', 'Madala', {location: 'bangalore'}], 'c']
  )); // returns true
console.log(areIdenticalArrays(
    ['a', 'b', ['Cholan', 'Madala', {location: 'bng'}], 'c'],
    ['a', 'b', ['Cholan', 'Madala', {location: 'bangalore'}], 'c']
  )); // returns false
  console.log(areIdenticalArrays(
    ['a', 'b', ['Cholan', 'Madala', {location: 'bangalore', state: 'karnataka'}], 'c', 'd'],
    ['a', 'b', ['Cholan', 'Madala', {location: 'bangalore', state: 'karnataka'}], 'c', 'd']
  )); // returns true
  console.log(areIdenticalArrays(
    ['a', 'b', ['Cholan', 'Madala', null, {location: 'bangalore', state: 'karnataka'}], 'c', 'd'],
    ['a', 'b', ['Cholan', 'Madala', {location: 'bangalore', state: 'karnataka'}], 'c', 'd']
  )); // returns false
  console.log(areIdenticalArrays(
    ['a', 'b', 'c', 'd'],
    ['a', 'd', 'c', 'b']
  )); // returns false
  console.log(areIdenticalArrays(
    ['a', 'b', 'c', 'd'],
    ['a', 'b', 'c', 'd']
  )); // returns true

  console.log(areIdenticalArrays(
    ['a', 'b', ['Cholan', 'Madala', {location: 'bangalore', state: 'karnataka'}], 'c', 'd'],
    ['a', 'b', ['Cholan', 'Madala', {location: 'bangalore', state: 'karnataka'}], 'c', undefined]
  )); // returns false


  logSeparator();



// Question 6: In the object defined below, set each property to its described value using the sample response payload provided on the next page:
console.log('Question 6: In the object defined below, set each property to its described value using the sample response payload provided on the next page:');
var response = {
  "cartItems":[
     {
        "id":"ci186012014536",
        "qty":3,
        "itemInfo":{
           "model":"UN55NU6950FXZA",
           "itemNo":"980142010",
           "minDeliveryDate": 1561938400000,
           "name":"UN55NU6950FXZA - SAMSUNG 55\" Class 4K (2160p) Ultra HD Smart LED TV",
           "skuId":"sku23018986",
           "itemPageUrl": "/sams/samsung-55in-4k-2160p-uhd- smart-led-tv-6000-series/prod22464496.ip"
        },
        "inventoryInfo":{
           "minQtyLimit":-1,
           "lowStockLevel":5,
           "maxQtyLimit":-1,
           "itemLowInStockFlag":false,
           "stockLevel":"inStock"
        },
        "priceInfo":{
           "mapPriceInCents":0,
           "listPriceInCents":44900,
           "shippingAmountInCents":0,
           "shippingAmount":0,
           "originalPrice":0,
           "itemTotalInCents":44900,
           "totalMapPrice":0,
           "originalPriceInCents":0,
           "salesTax":3500
        },
        "props":{
          "selectedChannel":"ONLINE",
          "shippingChargeIncluded":false,
          "shippingDiscountEligible":true,
          "freeShipEligible":false,
          "specialItem":false,
          "weightedItem":false,
          "onlineChannelMinLimitQty":-1
       }
     }
  ]
};
const oSiteCatalyst = {};
const getProducts = (response) => {
  const products = [];
    if (response.cartItems && response.cartItems.length) {
      for (let i =0 ; i < response.cartItems.length; i++) {
        products.push(getModifiedData(response.cartItems[i]));
      }
    } else {
      return {}
    }
    return products.length > 1 ? products : products[0];
};

const getModifiedData = (data) => {
  const {itemInfo, priceInfo, props, qty = ""} = data || {};
  const {shippingDiscountEligible = false} = props || {};
  const {listPriceInCents = null} = priceInfo || {};
  const {itemPageUrl = '', minDeliveryDate = null} = itemInfo || {};

  const getProdId = itemPageUrl => {
    if(!itemPageUrl) return '';
    try {
      return itemPageUrl.split('/').filter(word => /^prod2246/.test(word))[0].split(".")[0];
    } catch (e){
      console.log('error:', e);
      return "";
    }
  }

  const getShipDays = timestamp =>  {
    if (!timestamp) return '';
    const diffDays = (new Date(timestamp) - new Date())/8.64e+7;
    return Math.abs(parseInt(diffDays)).toString();
  }
  const currencySymbol = '$';
  const getSubTotal = () => {
    if (!listPriceInCents) {
      return "";
    }
    const price = (qty * listPriceInCents)/100;
    return `${currencySymbol} ${ ((qty * listPriceInCents) / 100).toLocaleString() }`;
  }

  const getUnitPrice = () => {
    if (!listPriceInCents) {
      return "";
    }
    return `${currencySymbol} ${ (listPriceInCents/ 100).toLocaleString()}`;
  }

  const extractedData = {
    "prod": getProdId(itemPageUrl),
    "quantity": qty.toString(),
    "shipdays": getShipDays(minDeliveryDate),
    "shipvalue": shippingDiscountEligible? 'free' : 'plus',
    "subtotal":  getSubTotal(),
    "uprice": getUnitPrice()
  }
  return extractedData;
}
oSiteCatalyst.products = getProducts(response);
console.table(oSiteCatalyst.products);