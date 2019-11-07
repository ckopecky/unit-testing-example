const fizzBuzz = num => {
    //write the logic for nums divisible by 3 and 5

    if(num % 5 === 0 && num % 3 === 0) {
        return "fizzbuzz";
    }

    //write the logic for nums divisible by 3
    if(num % 3 === 0) {
        return "fizz";
    }
    //write the logic for nums divisible by 5
    if(num % 5 === 0) {
        return "buzz";
    }

    //return num

    else {
        return num;
    }
}

module.exports = {
    fizzBuzz
}