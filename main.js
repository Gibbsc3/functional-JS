//********************NUMER 1**********
var total = items.reduce(function(prevItem,currItem){
  var prevPrice = isNaN(prevItem) ? prevItem.price : prevItem
  // console.log(prevItem);
  return prevPrice + currItem.price
})
console.log(total/items.length);
//****************NUMBER1***********


//****************NUMBER2 ** ** ** ** ** *
    //sets the range for filter method
    function priceRange(item) {
        return item.price > 14 && item.price < 18;
    }
    //passes each item through and returns an array of OBJECTS with a price btwn 14 and 18
    var titles = items.filter(priceRange);
    //takes the filtered array objects and returns their titles
    titles = titles.map(function(item) {
        return 'TITLE:  ' + item.title
    })
    console.log(titles);
    //*********************NUMBER2

    //*******************NUMBER3
    function findCode(item) {
    return item.currency_code === 'GBP';
}
    console.log(items.find(findCode));
    //***************NUMBER3

  //  *******************NUMBER4
    function woodyOrNah(item) {
      return item.materials.includes('wood');
    }
    var madeOfWood = items.filter(woodyOrNah)
    console.log(madeOfWood);
      //*******************NUMBER4

    //*******************NUMBER5
    function aLotOmaterials(item) {
     return item.materials.length > 8 ;
    }
     var madeWithLove = items.filter(aLotOmaterials)
     console.log(madeWithLove);
      //*******************NUMBER5

        //*******************NUMBER6
        function madeBySeller(item) {
         return item.who_made === "i_did";
        }
         var mamaImadeIt = items.filter(madeBySeller)
         console.log(mamaImadeIt);
          //*******************NUMBER6


// var numbers = [1, 4, 9];
// var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3], numbers is still [1, 4, 9]
// filtered is [12, 130, 44]






//****************NUMBER2***********
// items.forEach(function(item) {
//     var titles = []
//     if (item.price > 14 && item.price < 18) {
//         titles.push(item.title)
//     }
// })
//
// console.log(titles);
