async function onMyBirthDayAsync(isKyoSick, numberCakes) {
    if (!isKyoSick) return numberCakes;
    throw new Error("I am sad!");
}

async function doSomethingAsync(isKyoSick,numberCakes){
    try {
        let result = await onMyBirthDayAsync(isKyoSick, numberCakes);
        console.log(`I have ${result} cakes`)
    }
    catch(error) {
        console.log(error.message);
    }
    finally {
        console.log("Party");
    }
}
doSomethingAsync(false,5);