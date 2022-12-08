
function greeting(name: string, age: number) {
    return `Hi, my name is ${name}. I am ${age} years old`;
}

console.log(greeting("Jude Bellingham", 19));


let grades: number[] = [99, 96, 97, 96, 99];

// calculate average
// add them all up
let sum: number = 0;

// loop through the array
grades.forEach( (grade: number) => {
    sum += grade;
})

const average = sum / grades.length;

console.log("Average grades: " + average);



interface User {
    id: number,
    name: string,
    zodiacSign: ZodiacSign
}

enum ZodiacSign {
    Aries = "Aries",
    Cancer = "Cancer",
    Leo = "Leo",
    Aquarius = "Aquarius",
    Capricorn = "Capricorn",
    Pisces = "Pisces",
    Gemini = "Gemini",
    Virgo = "Virgo",
    Taurus = "Taurus",
    Sagittarius = "Sagittarius",
    Libra = "Libra",
    Scorpio = "Scorpio"
}

const user1 : User = {
    id: 1,
    name: "Person 1",
    zodiacSign: ZodiacSign.Aries
}

const user2 : User = {
    id: 2,
    name: "Person 2",
    zodiacSign: ZodiacSign.Cancer
}

const user3 : User = {
    id: 3,
    name: "Person 3",
    zodiacSign: ZodiacSign.Leo
}

const users : User[] = [user1, user2, user3];

users.forEach((user: User) => {
    console.log(`${user.name} has the sign: ${user.zodiacSign}`);
})


export {};