const {looseCurry} = require('../currying');

const mockFnNary = jest.fn((a, b, c) => {});
const mockFnVariadic = jest.fn((...args) => {});

test('N-ary functions become curried unary functions.', () => {
    const curried = looseCurry(mockFnNary);
    curried(1)(2, 3);

    expect(mockFnNary).toBeCalledWith(1, 2, 3);
})

test('Variadic functions become curried unary functions.', () => {
    const curried = looseCurry(mockFnVariadic, 5);
    curried(1)(2, 3)(4, 5);

    expect(mockFnVariadic).toBeCalledWith(1, 2, 3, 4, 5);
})

test('Variadic functions result in error when curried without explicitly passing arity.', () => {
    const curried = looseCurry(mockFnVariadic);

    expect(() => {
        curried(1)(2, 3)
    }).toThrow(TypeError);
})