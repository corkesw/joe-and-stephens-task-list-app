const {categoryList} = require("../utils.js")

describe('categoryList', () => {
    test('returns an empty array when passed empty array', () => {
        const input = [];
        const expected = [];
        const actual = categoryList(input)
        expect(actual).toEqual(expected)
    });
    test('returns an array that is the same as the input when all values are unique', () => {
        const input = ([
            {name: 'Wash the car', completed: false, category:'chores'},
            {name: 'Do the dishes', completed: false, category:'housework'},
            {name: 'Feed the dog', completed: true, category:'pet stuff'}
          ]);
        const expected = ['chores', 'housework', 'pet stuff']
        const actual = categoryList(input)
        expect(actual).toEqual(expected)
    });
    test('returns an array that only contains unique values', () => {
        const input = ([
            {name: 'Wash the car', completed: false, category:'chores'},
            {name: 'Do the dishes', completed: false, category:'chores'},
            {name: 'Feed the dog', completed: true, category:'pet stuff'},
            {name: 'Do the dishes', completed: false, category:'chores'},
            {name: 'Do the dishes', completed: false, category:'chores'},
          ]);
        const expected = ['chores', 'pet stuff']
        const actual = categoryList(input)
        expect(actual).toEqual(expected)
    });
    test('does not MUTATE input', () => {
        const input = ([
            {name: 'Wash the car', completed: false, category:'chores'},
            {name: 'Do the dishes', completed: false, category:'housework'},
            {name: 'Feed the dog', completed: true, category:'pet stuff'}
          ]);
        categoryList(input)
        expect(input).toEqual([
            {name: 'Wash the car', completed: false, category:'chores'},
            {name: 'Do the dishes', completed: false, category:'housework'},
            {name: 'Feed the dog', completed: true, category:'pet stuff'}
          ])
    });
    test('returns a NEW array', () => {
        const input = ([
            {name: 'Wash the car', completed: false, category:'chores'},
            {name: 'Do the dishes', completed: false, category:'housework'},
            {name: 'Feed the dog', completed: true, category:'pet stuff'}
          ]);
        const actual = categoryList(input)
        expect(actual).not.toBe(input)
    });
})