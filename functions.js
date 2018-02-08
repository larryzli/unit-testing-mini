module.exports = {
    returnTwo: () => {
        return 2;
    },
    greeting: name => {
        return `Hello, ${name}.`;
    },
    add: (num1, num2) => {
        return parseFloat((num1 + num2).toFixed(1));
    },
    awesomeOrNot: name => {
        if (name === "Larry" || name === "Larry Li") {
            return true;
        } else {
            return false;
        }
    },
    multiply: (num1, num2) => {
        return num1 * num2;
    },
    divide: (num1, num2) => {
        return num1 / num2;
    },
    subtract: (num1, num2) => {
        return num1 - num2;
    }
};
