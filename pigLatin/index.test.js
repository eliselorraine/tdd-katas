const translatePigLatin = require("./index");

describe('Translate Pig Latin function', () => {
    it('should translate words that begin with a consonant', () => {
        const expected = "aliforniacay"; 
        expect(translatePigLatin("california")).toStrictEqual(expected); 
    })
    it('should translate words that begin with any consonant', () => {
        const expected = "aragraphspay"; 
        expect(translatePigLatin("paragraphs")).toStrictEqual(expected); 
    })
    it('should translate pig latin', () => {
        const expected = "oveglay"; 
        expect(translatePigLatin("glove")).toStrictEqual(expected); 
    })
    it('should handle words that begin with vowels', () => {
        const expected = "algorithmway"; 
        expect(translatePigLatin("algorithm")).toStrictEqual(expected); 
    })
    it('should handle words that have their first vowel in the middle', () => {
        const expected = "artzschway"; 
        expect(translatePigLatin("schwartz")).toStrictEqual(expected); 
    })
    it('should handle words without vowels', () => {
        const expected = "rhythmay"; 
        expect(translatePigLatin("rhythm")).toStrictEqual(expected); 
    })
})