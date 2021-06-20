const {partial, partialRight, partialProps} = require('./modules/partials')
const {strictCurry, looseCurry, propsCurry} = require('./modules/currying')

function testFnBinary(firstArg, secondArg) {
    console.log(firstArg, secondArg);
}

function testFnNary(firstArg, secondArg, thirdArg) {
    console.log(firstArg, secondArg, thirdArg);
}

function testFnVariadic(...args) {
    console.log(...args);
}

function testFnProps({x, y, z} = {}) {
    console.log(x, y, z);
}

console.log('Partial tests:');
partial(testFnBinary, 1)(2);
partial(testFnNary, 1)(2);
partial(testFnNary, 1)(2, 3);

console.log('\nPartial right tests:');
partialRight(testFnBinary, 1)(2);
partialRight(testFnNary, 1)(2);
partialRight(testFnNary, 1)(2, 3);

console.log('\nPartial props tests:');
partialProps(testFnProps, {
    x: 1
})({
    y: 2,
    z: 3
});

console.log('\nStrict currying tests:');
let curriedBinary = strictCurry(testFnBinary);
curriedBinary(1)(2);
let curriedNary = strictCurry(testFnNary);
curriedNary(1)(2)(3);
let curriedVariadic = strictCurry(testFnVariadic, 5);
curriedVariadic(1)(2)(3)(4)(5);

console.log('\nLoose currying tests:');
curriedBinary = looseCurry(testFnBinary);
curriedBinary(1, 2);
curriedNary = looseCurry(testFnNary);
curriedNary(1, 2, 3);
curriedVariadic = looseCurry(testFnVariadic, 5);
curriedVariadic(1)(2)(3, 4)(5);

console.log('\nProp currying tests:');
const curriedProps = propsCurry(testFnProps, 3);
curriedProps({y: 1})({z: 2})({x: 3});


function testString(x, y, z) {
    console.log(x, y, z);
}

// TODO: Create utilities!
// TODO: Create uncurry!