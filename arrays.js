const fruits = ["mango", "orange", "banaan", "apple"]
const numbers = [1, 2, 3, 4, 5, 6]
console.log(fruits);
console.table(numbers);

//modifying  a particular element in an array
fruits[0] = "pear"
console.log(fruits);

//accessing a particular element in array
console.log(fruits[3]);
console.log(fruits[1]);
console.log(fruits[2]);

// length property of an array
colors = ["Red", "Blue", "White", "Yellow", "Green", "Black", "Pink"]
console.log(colors.length-1);

// finding the indexof of an item in array
console.log(colors.indexOf("Yellow"));

//last indexOf 
console.log(fruits[fruits.length-1]);

//nested array
letters = [['A', 'B', 'C', 'D', 'E', 'F'],
        ['G', 'H', 'I', 'J', 'K', 'L'],
        ['M', 'N', 'O', 'P', 'Q', 'R'],
        ['S', 'T', 'U', 'V', ['W', 'X', 'Y', 'Z']]]
console.log(letters[0]); //prints the first line of arrays
console.log(letters[1]); // prints the second line of arrays
console.log(letters[0][5]) // prints the first item on the first line of array
console.log(letters[3][2][0])

students = [["James", "Hope", "Faith", "Grace"],
            ["Chidi", "Obi", "Amara", "Uche"],
            ["Okey", "Chima", "Chika", "Uka"]]
console.table(students[2][3])
console.log(students[0][0])
console.table(students);