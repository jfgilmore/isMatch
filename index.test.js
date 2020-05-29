// harrison will show you how to run the tests and also what lodash is
// https://www.npmjs.com/browse/depended

// index.test.js

const isMatch = require('./index')

describe('Is Match', () => {
    it('returns true when key value pair is present', () => {
        const moe = {name: 'Moe Howard', hair: true}
        expect(isMatch(moe, moe)).toBe(true)
    })
    it('returns false when key value pair isn\'t present', () => {
        const curly = {name: 'Curly Howard', hair: false}
        expect(isMatch(curly, {name: 'Curly Howard'})).toBe(false)
    })
    it('returns false when key value pair isn\'t present', () => {
        const curly = {name: 'Curly Howard', hair: false}
        expect(isMatch(curly, {hair: true})).toBe(false)
    })
    it('returns false when some key value pairs don\'t match', () => {
        const curly = {name: 'Curly Howard', hair: false}
        const badCurly = {name: 'Curly Howard', hair: true}
        expect(isMatch(curly, badCurly)).toBe(false)
    })
    it('returns false when all key value pairs don\'t match', () => {
        const curly = {name: 'Curly Howard', hair: false}
        const moe = {name: 'Moe Howard', hair: true}
        expect(isMatch(curly, moe)).toBe(false)
    })
})
