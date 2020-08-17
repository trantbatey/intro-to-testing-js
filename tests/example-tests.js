
const randomNumber = Math.random();

describe("returnExampleMsg", function() {
    it("should be defined", function() {
        expect(returnExampleMsg).toBeDefined();
    });
    it("should return example message", function() {
        expect(returnExampleMsg()).toEqual("This is an example");
    });
});

describe('addOne', function () {
    it('should be defined', function() {
        expect(typeof addOne).toBe('function');
    });
    it('Should return a number when passed a number', function() {
        expect(typeof addOne(randomNumber)).toBe('number')
    })
    it('Should return a number one greater than the input', function() {
        expect(addOne(randomNumber)).toBe(randomNumber+1)
    })
})