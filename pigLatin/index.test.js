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
})