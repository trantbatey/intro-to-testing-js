// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the helloWorld function
describe('sayHello', function() {
    it('should be a defined function.', function() {
        expect(typeof sayHello).toBe('function');
    })
    it('should return a string when called.', function() {
        expect(typeof sayHello()).toBe('string');
    })
    it('Jane should print "Hello, Jane!"', function() {
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    })
    it('Alex should print "Hello, Alex!"', function() {
        expect(sayHello("Alex")).toBe('Hello, Alex!');
    })
    it('Pat should print "Hello, Pat!"', function() {
        expect(sayHello("Pat")).toBe('Hello, Pat!');
    })
    it('No input should print "Hello, World!"', function() {
        expect(sayHello()).toBe('Hello, World!')
    })
    it('5 should print "Hello, World!"', function() {
        expect(sayHello(5)).toBe('Hello, World!')
    })
    it('"5" should print "Hello, World!"', function() {
        expect(sayHello('5')).toBe('Hello, World!')
        expect(sayHello("5")).toBe('Hello, World!')
    })
    it('null should print "Hello, World!"', function() {
        expect(sayHello(null)).toBe('Hello, World!')
    })
});

// Unit tests for the helloWorld function
describe('isFive', function() {
    it('isFive should be a defined function.', function() {
        expect(typeof isFive).toBe('function');
    })
    it('isFive() should be a boolean.', function() {
        expect(typeof isFive()).toBe('boolean');
    })
    it('No input should be false.', function() {
        expect(isFive()).toBe(false);
    })
    it('"Hello" should be false.', function() {
        expect(isFive('Hello')).toBe(false);
    })
    it('null should be false.', function() {
        expect(isFive(null)).toBe(false);
    })
    it('27.2 should be false.', function() {
        expect(isFive(27.2)).toBe(false);
    })
    it('-8 should be false.', function() {
        expect(isFive(-8)).toBe(false);
    })
    it('"5" should be true.', function() {
        expect(isFive('5')).toBe(true);
    })
    it('5 should be true.', function() {
        expect(isFive(5)).toBe(true);
    })
});

// Unit tests for the isEven function
describe('isEven', function() {
    it('isEven should be a defined function.', function() {
        expect(typeof isEven).toBe('function');
    })
    it('isEven() should be a boolean.', function() {
        expect(typeof isEven()).toBe('boolean');
    })
    it('isEven() should be a false.', function() {
        expect(isEven()).toBe(false);
    })
    it('isEven("hello") should be a false.', function() {
        expect(isEven("hello")).toBe(false);
    })
    it('isEven(null) should be a false.', function() {
        expect(isEven(null)).toBe(false);
    })
    it('isEven(0) should be a true.', function() {
        expect(isEven(0)).toBe(true);
    })
    it('isEven(94) should be a true.', function() {
        expect(isEven(94)).toBe(true);
    })
    it('isEven(7) should be a false.', function() {
        expect(isEven(7)).toBe(false);
    })
    it('isEven(-94) should be a true.', function() {
        expect(isEven(-94)).toBe(true);
    })
    it('isEven(-7) should be a false.', function() {
        expect(isEven(-7)).toBe(false);
    })
});

// Unit tests for the isVowel function
describe('isVowel', function() {
    it('isVowel should be a defined function.', function() {
        expect(typeof isVowel).toBe('function');
    })
    it('isVowel() should be a boolean.', function() {
        expect(typeof isVowel()).toBe('boolean');
    })
    it('isVowel("Aa") should be a false.', function() {
        expect(isVowel("Aa")).toBe(false);
    })
    it('isVowel() should be a false.', function() {
        expect(isVowel(null)).toBe(false);
    })
    it('isVowel(null) should be a false.', function() {
        expect(isVowel(null)).toBe(false);
    })
    it('isVowel(17) should be a false.', function() {
        expect(isVowel(17)).toBe(false);
    })
    it('isVowel("Hello") should be a false.', function() {
        expect(isVowel("Hello")).toBe(false);
    })
    it('isVowel("<") should be a false.', function() {
        expect(isVowel("<")).toBe(false);
    })
    it('isVowel("A") should be a true.', function() {
        expect(isVowel("A")).toBe(true);
    })
    it('isVowel("E") should be a true.', function() {
        expect(isVowel("E")).toBe(true);
    })
    it('isVowel("I") should be a true.', function() {
        expect(isVowel("I")).toBe(true);
    })
    it('isVowel("O") should be a true.', function() {
        expect(isVowel("O")).toBe(true);
    })
    it('isVowel("U") should be a true.', function() {
        expect(isVowel("U")).toBe(true);
    })
    it('isVowel("a") should be a true.', function() {
        expect(isVowel("a")).toBe(true);
    })
    it('isVowel("e") should be a true.', function() {
        expect(isVowel("e")).toBe(true);
    })
    it('isVowel("i") should be a true.', function() {
        expect(isVowel("o")).toBe(true);
    })
    it('isVowel("o") should be a true.', function() {
        expect(isVowel("i")).toBe(true);
    })
    it('isVowel("u") should be a true.', function() {
        expect(isVowel("u")).toBe(true);
    })
});

// Unit tests for the add function
describe('add', function() {
    it('add should be a defined function.', function() {
        expect(typeof add).toBe('function');
    })
    it('add() should be a number.', function() {
        expect(typeof add()).toBe('number');
    })
    it('add() should be a 0.', function() {
        expect(add()).toBe(0);
    })
    it('add("hello") should be a 0.', function() {
        expect(add("hello")).toBe(0);
    })
    it('add("hello", 7) should be a 0.', function() {
        expect(add("hello", 7)).toBe(0);
    })
    it('add(null) should be a 0.', function() {
        expect(add(null)).toBe(0);
    })
    it('add(null, 8) should be a 8.', function() {
        expect(add(null, 8)).toBe(8);
    })
    it('add(7, "hello") should be a 0.', function() {
        expect(add(7, "hello")).toBe(0);
    })
    it('add(8, null) should be a 0.', function() {
        expect(add(8, null)).toBe(8);
    })
    it('add(9, 10) should be a 19.', function() {
        expect(add(9, 10)).toBe(19);
    })
    it('add(19.1, 6.4) should be a 25.5.', function() {
        expect(add(19.1, 6.4)).toBe(25.5, 0.0002);
    })
    it('add(9, -10) should be a -1.', function() {
        expect(add(9, -10)).toBe(-1);
    })
});


