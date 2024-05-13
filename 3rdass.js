function checkDataType(arraY) {
    if(arraY.length === 0){
        return true;// Empty array is considered to have the same data type
    }
    const type = typeof arraY[0];// Get the data type of the first item
    for(let y=1; y < arraY.length ; y++){
        if(typeof arraY[y]  !==  type){
            return " dont have the same data type";// If any item has a different data type, return dont have the same data type
        }
    }
    return "yes they all have the same data type";// If all items have the same data type, return yes they all have the same data type
}

let arraY1 = [0,1,2,3,4]
console.log(checkDataType(arraY1))

let arrray2 = ["please",33,3.45]
console.log(checkDataType(arrray2))

//second question
function reverseItems(items){
    const items2 = items.slice();
    const items3 = items2.reverse();
    return items3;
}
let items1 = ['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM'];
const items3= reverseItems(items1)
console.log (items3)


// question 3
function sumOfEven(number) {
    if (typeof number !== 'number'  || number < 0 ) 
        {
        return "true";
    }// set conditions 

    let sum = 0;
    for (let i = 0; i <= number; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sumOfEven(10))

//question 4
function modifyArray(array){
    if (array.length<5){
        return "item not found"
    }
    array[4]="u"
    return array
}
console.log(modifyArray(["a","e","i","o","vowels"]))
console.log(modifyArray([1,2,3]))// to check if my "item not found condition is met"

// question 5
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
  }
  console.log(users)// this is to get the keys 
  for (let allKeys in users){
    console.log(users[`${allKeys}`])
  }// this is to get all the values 

  function countPoints(obj,gradePoint){
    let point = 0;
    for( const users in obj){
        if(obj.hasOwnProperty(users) && obj[users].points >= gradePoint){
            point++
        }
    }
    return point
  }
  console.log(countPoints(users,50))





