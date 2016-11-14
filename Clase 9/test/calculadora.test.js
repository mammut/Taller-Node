const expect = require('chai').expect;
const calc = require('../lib/calc.js');

describe('calculadorator', () => {
    describe('#add', () => {
        it('should be a method', () => {
            expect(typeof calc.add).to.be.equal("function");
        });
        it('should add two numbers', () => {
            let result = calc.add(2, 2);
            expect(result).to.be.equal(4);
            expect(calc.add(2,3)).to.be.equal(5);
        });
        it('should throw error if one of the parameters is not a Number', () => {
            expect(calc.add).to.throw(Error);
        });
    });
    describe('#sub', () => {
        it('should subtract two numbers', () => {
            expect(calc.sub(3,2)).to.be.equal(1);
            expect(calc.sub(3,1)).to.be.equal(2);
        });
        it('should throw error if one of the parameters is not a Number', () => {
            expect(calc.sub.bind(calc, 'l', 2)).to.throw(Error);
        });
    });
    describe('#divide', () => {
        it('should divide two numbers', () => {
            expect(calc.div(3,2)).to.be.equal(1.5);
            expect(calc.div(3,1)).to.be.equal(3);
        });
        it('should throw Error if division by zero', () => {
            expect(calc.div.bind(calc, 1, 0)).to.throw(Error);
        });
    });
});

