//var name = 'Paul';
//var lastName = 'Toillion';
//var age = 23;
//
//if(name === 'Bob')
//    {
//        alert('Hello Paul');
//    }
//

//var friendHeight1, friendHeight2, friendHeight3;
//var friendAge1, friendAge2, friendAge3;
//
//friendAge1 = 10;
//friendAge2 = 20;
//friendAge3 = 50;
//friendHeight1 = 50;
//friendHeight2 = 50;
//friendHeight3 = 50;
//
//var score1, score2, score3;
//
//score1 = friendHeight1 + friendAge1 * 5;
//score2 = friendHeight2 + friendAge2 * 5;
//score3 = friendHeight3 + friendAge3 * 5;
//
//if (score1 > score2 && score1 > score3) {
//    console.log("Player one wins: " + score1);
//} else if (score2 > score1 && score2 > score3) {
//    console.log("Player two wins: " + score2);
//} else if (score3 > score1 && score3 > score2) {
//    console.log("Player three wins: " + score3);
//} else {
//    console.log("draw");
//}
//


//  FUNCTIONS //
console.log("\n\nFUNCTIONS\n\n");

//function calculateAge(yearOfBirth) {
//    return 2017 - yearOfBirth;
//}
//
//var age = calculateAge(1994);
//
//console.log(age);
//
//
//function yearsToRetire(name, yearOfBirth) {
//    var age = calculateAge(yearOfBirth);
//    var yearsLeft = 65 - age;
//    if(yearsLeft >= 0) {
//    console.log(name + " has " + yearsLeft + " years until retirement") 
//    } else {
//        console.log(name + " has been retired for " + yearsLeft*-1 + " years");
//    }
//}
//
//yearsToRetire('Paul', 1994);
//yearsToRetire('Bob', 1950);
//
//
////Function Statment
//function someFun(param) {
//    //code
//}
//
////Function Expression
//var someFunc = function(param){
//    // code
//}

// *********************************** //


// ARRAYS //

console.log("\n\nARRAYS\n\n");


//var names = ['John', 'Sam', 'Bob'];
//var years = new Array(1990, 1984, 1950);
//
//console.log(names[0]);
//
//var john = ['John', 'Smith', 1990, 'teacher', false];
//
//john.push('red'); // adds to end
//john.unshift('Mr.') // adds to beginning
//console.log(john);
//
//john.pop(); // pops last element
//john.shift(); // pops first element
//console.log(john);
//
//console.log(john.indexOf('Smith'));


// *********************************** //


// OBJECTS //
console.log("\n\nOBJECTS\n\n");


//  var john = {
//      name: 'John',
//      lastName: 'Smith',
//      birth: 1990,
//      job: 'teacher',
//      isMarried: false
//  };
//
//console.log(john);
//
//console.log(john.lastName); //Two main ways to access a property from an object
//console.log(john['lastName']);
//var xyz = 'job';
//console.log(john[xyz]);
//
//john.lastName = 'Miller';
//john['job'] = 'programmer';
//console.log(john);
//
//var jane = new Object();
//
//jane.name = 'Jane';
//jane.lastName = 'Smith';
//jane['birth'] = 1969;
//jane.job = 'teacher';
//jane.isMarried = true;
//
//console.log(jane);
//
//
//// Objects and methods
//console.log('\nObjects with arrays and methods\n');
//
//var paul = {
//    name: 'Paul',
//    lastName: 'Toillion',
//    birth: 1994,
//    job: 'programmer',
//    isMarried: true,
//    family: ['Cherith', 'Sasha', 'Cynda'],
//    calculateAge: function(){
//        //return 2017 - this.birth;
//        this.age = 2017 - this.birth; //create a new variable for the object
//    }
//    
//};
//
//console.log(paul.family[2]);
//
//paul.calculateAge();
//console.log(paul.age);


// *********************************** //

// LOOPS AND ITERATION //
console.log('\n\nLOOPS & ITERATION\n\n');

//var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
//
////for loop
//for(var i = names.length - 1; i >= 0; i--)
//    {
//        console.log(names[i]);
//    }
//
//
////while loop
//var i = 0;
//while(i < names.length)
//    {
//        console.log(names[i]);
//        i++;
//    }


//break
//continue


// *********************************** //

//CODING CHALLENGE 2
console.log('\n\nCODING CHALLENGE 2\n\n');

var years = [1994, 1992, 1989, 2007];


function calculateAge(birth){
    
    return 2017 - birth;
}

function printFullAge(year)
{
    var ages = [];

    for(var i = 0; i < years.length; i++){

        ages.push(calculateAge(years[i]));

    }

    for(var i = 0; i <ages.length; i++) {
        if(ages[i] >= 18)
            {
                console.log(ages[i] + ' is 18 or older');
            }
    }
}

printFullAge(years);

// *********************************** //

// *********************************** //

// *********************************** //

// *********************************** //

// *********************************** //



