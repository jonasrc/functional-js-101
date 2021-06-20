function strictCurry(fn, arity = fn.length) {
    return (
        function previousCurry(previousArgs) {
            return function nextCurry(nextArg) {
                const args = [...previousArgs, nextArg];
                return args.length >= arity ? fn(...args) : previousCurry(args);
            }
        }
    )([]);
}

function looseCurry(fn, arity = fn.length) {
    return (
        function previousCurry(previousArgs) {
            return function nextCurry(...nextArgs) {
                const args = [...previousArgs, ...nextArgs];
                return args.length >= arity ? fn(...args) : previousCurry(args);
            }
        }
    )([]);
}

function propsCurry(fn, arity = 1) {
    return (
        function previousCurry(previousArgsProp) {
            return function nextCurry(nextArgsProp) {
                const [key] = Object.keys(nextArgsProp);
                const allArgsProp = Object.assign({}, previousArgsProp, {
                    [key]: nextArgsProp[key]
                })

                return Object.keys(allArgsProp).length >= arity ?
                    fn(allArgsProp) : previousCurry(allArgsProp);
            }
        }
    )({});
}

module.exports = {
    strictCurry,
    looseCurry,
    propsCurry
}