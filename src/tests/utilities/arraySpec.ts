import arrays from '../../utilities/arrays';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

describe('Tests for array utilities', () => {  
    describe('function that adds numbers in arrays', () => {
        it('should add numbers in array and be truthy', () => {
        expect(arrays.addArr(numArr)).toBeTruthy();
        });
        it('should add numbers in array and be 19', () => {
            expect(arrays.addArr(numArr)).toBe(19);
        });
    })
    
    describe('function that concatinate 2 arrays', () => {
        it('should concatinate 2 arrays to not equal the first', () => {
        expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
        });
        it('should concatinate 2 arrays to not equal the second', () => {
            expect(arrays.concatArr(numArr, wordArr)).not.toEqual(wordArr);
        });
    })
    
    describe('function that tests if certain items are within an array', () => {
        it('should contain 3 items except rabbit', () => {
        expect(arrays.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
        });
        it('should not contain the third index rabbit', () => {
            expect(arrays.cut3(wordArr)).not.toContain('rabbit');
        });
    })
   
    describe('function that would test the largest numbers', () => {
        it('should have 6 be largest number', () => {
        expect(arrays.lgNum(numArr)).toEqual(6);
        });
        it('should not have a large number and be falsy', () => {
            expect(arrays.lgNum(wordArr)).toBeFalsy();
        });
    })
})
