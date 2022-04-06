const myReplace = require("./index");

describe('Search and Replace function', () => {
    it('should replace the before with the after', () => {
        const expected = "Let us go to the mall"; 
        expect(myReplace("Let us go to the store", "store", "mall")).toBe(expected); 
    })
    it('before should be case sensitive', () => {
        const expected = "He is Sitting on the couch"; 
        expect(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")).toBe(expected); 
    })
    it('after should be case sensitive', () => {
        const expected = "I think we should look down there"; 
        expect(myReplace("I think we should look up there", "up", "Down")).toBe(expected); 
    })
    it('should fix spelling errors', () => {
        const expected = "This has a spelling error"; 
        expect(myReplace("This has a spellngi error", "spellngi", "spelling")).toBe(expected); 
    })
    it('should fix spelling errors', () => {
        const expected = "His name is John"; 
        expect(myReplace("His name is Tom", "Tom", "john")).toBe(expected); 
    })
    it('should match case sensitivity to before', () => {
        const expected = "His name is John"; 
        expect(myReplace("His name is Tom", "Tom", "john")).toBe(expected); 
    })
    it('should always match case sensitivity to before', () => {
        const expected = "Let us get back to more Algorithms"; 
        expect(myReplace("Let us get back to more Coding", "Coding", "algorithms")).toBe(expected); 
    })
})