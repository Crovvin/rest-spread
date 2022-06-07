const filterOutOdds = (...args) => args.filter(num => num%2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (input, input2) => ({...input, ...input2});

const doubleAndReturnArgs = (inputArray, ...args) => [...inputArray, ...args.map(x => x*2)];

const removeRandom = items => {
    let y = Math.random() * items.length;
    return [...items.slice(0, y), ...items.slice(1 + y)];
}

const extend = (array1, array2) => {return [...array1, ...array2]}

const addKeyVal = (obj, key, val) => {
    let newObject = {...obj};
    newObject[key] = val;
    return newObject
}

const removeKey = (obj, key) => {
    let newObject = {...obj};
    delete newObject[key];
    return newObject
}

const combine = (obj1, obj2) => {return {...obj1, ...obj2}}

const update = (obj, key, val) => {
    let newObject = {...obj};
    newObject[key] = val;
    return newObject
}