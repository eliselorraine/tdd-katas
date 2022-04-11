const truthCheck = require('./index');

describe('the truth check function', () => {
    it('should return true or false', () => {
        const test = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")
        expect(test).toBe(false); 
    })
    it('should check to see if the value is consistently truthy', () => {
        const test = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name")
        expect(test).toBe(true); 
    })
    it('should handle empty strings', () => {
        const test = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role")
        expect(test).toBe(false); 
    })
    it('should handle numbers', () => {
        const test = truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number")
        expect(test).toBe(true); 
    })
    it('should handle zero', () => {
        const test = truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught")
        expect(test).toBe(false); 
    })
    it('should handle keys that do not exist', () => {
        const test = truthCheck([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username")
        expect(test).toBe(false); 
    })
    it('should handle empty arrays', () => {
        const test = truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users")
        expect(test).toBe(true); 
    })
    it('should handle empty objects', () => {
        const test = truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data")
        expect(test).toBe(true); 
    })
    it('should handle null values', () => {
        const test = truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id")
        expect(test).toBe(false); 
    })
})