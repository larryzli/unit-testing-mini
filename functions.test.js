const {
    add,
    multiply,
    divide,
    subtract,
    greeting,
    returnTwo,
    awesomeOrNot
} = require("./functions");

test("Should greet user by name", () => {
    expect(greeting("Larry")).toBe("Hello, Larry.");
    expect(greeting("John")).toBe("Hello, John.");
    expect(greeting("Jin")).toBe("Hello, Jin.");
    expect(greeting("Jordan")).toBe("Hello, Jordan.");
});

test("Should return integer 2", () => {
    expect(returnTwo()).toBe(2);
});

test("Tell me if thing passed in is awesome", () => {
    expect(awesomeOrNot("Larry")).toBeTruthy();
    expect(awesomeOrNot("Larry Li")).toBeTruthy();
    expect(awesomeOrNot("Jin")).toBeFalsy();
    expect(awesomeOrNot("Jordan")).toBeFalsy();
    expect(awesomeOrNot("Steven")).toBeFalsy();
});

describe("Math functions", () => {
    test("Add two integers together.", () => {
        expect(add(2, 2)).toBe(4);
        expect(add(0, 0)).toBe(0);
        expect(add(199, 2)).toBe(201);
        expect(add(0.1, 0.2)).toBe(0.3);
    });

    test("Subtract two integers together.", () => {
        expect(subtract(2, 2)).toBe(0);
        expect(subtract(0, 0)).toBe(0);
        expect(subtract(15, 2)).toBe(13);
        expect(subtract(0.3, 0.2)).toBe(0.1);
    });

    test("Divide two integers together.", () => {
        expect(divide(2, 2)).toBe(1);
        expect(divide(0, 4)).toBe(0);
        expect(divide(12, 2)).toBe(divide(12, 2));
        expect(divide(3, 5)).toBe(0.6);
    });

    test("Multiply two integers together.", () => {
        expect(multiply(2, 2)).toBe(4);
        expect(multiply(0, 0)).toBe(0);
        expect(multiply(15, 2)).toBe(30);
    });
});
