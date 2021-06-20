const {partial, partialRight} = require('../partials');

const mockFunction = jest.fn((a, b) => a + b);

test('Binary function becomes unary from partial.', () => {
    const partialTest = partial(mockFunction, 0);
    partialTest(10);

    expect(mockFunction).toBeCalledWith(0, 10);
    expect(mockFunction).toReturnWith(10);
});

test('Binary function becomes unary with reversed arguments from partial right.', () => {
    const partialTest = partialRight(mockFunction, 0);
    partialTest(10);

    expect(mockFunction).toBeCalledWith(10, 0);
    expect(mockFunction).toReturnWith(10);
});