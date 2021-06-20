function partial(fn, ...presetArgs) {
    return function partiallyApplied(...laterArgs) {
        fn(...presetArgs, ...laterArgs);
    }
}

function partialRight(fn, ...presetArgs) {
    return function partiallyAppliedRight(...laterArgs) {
        fn(...laterArgs, ...presetArgs);
    }
}

function partialProps(fn, presetArgsObj) {
    return function partiallyAppliedProps(laterArgsObj) {
        fn(Object.assign({}, presetArgsObj, laterArgsObj));
    }
}

module.exports = {
    partial,
    partialRight,
    partialProps
};