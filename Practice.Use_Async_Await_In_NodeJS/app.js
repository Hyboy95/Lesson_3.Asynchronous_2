async function getSum(arr) {
    if(arr instanceof Array) {
        return arr.reduce((pre, current) => pre + current, 0);
    }
    throw new Error('Input data incorrect');
}

async function f() {
    try {
        let result = await getSum([1,3,4,5,6,20])
        console.log(result);
    }
    catch (error) {
        console.log(error.message)
    }
}

f();