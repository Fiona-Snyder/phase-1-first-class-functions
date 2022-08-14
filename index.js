/* The above code from this lecture does not work:

exerciseRoutine(() => console.log("Stretch! Work that core!"))

function morningRoutine(exercise) {
    let breakfast
    if (exercise === liftWeights) {
        breakfast = "protein bar"
    } else if (exercise === swim) {
        breakfast = "kale smoothie"
    } else {
        breakfast = "granola"
    }

    exerciseRoutine(exercise)

    return function() {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`)
    }
}

const afterExercise = morningRoutine(liftWeights)
afterExercise()
*/

function receivesAFunction(callBack) {
    const data = 2 * 2
    callBack(data)
}

function returnsANamedFunction() {
    return function aFunction(num1, num2){
        return num1 * num2
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log("Display me")
}


// Part 2:
const returnFirstTwoDrivers = function(driverName = ["Antonia", "Nuru", "Amari", "Mo"]) {
    const firstTwoDrivers = driverName.slice(0, 2)
    return firstTwoDrivers
}

const returnLastTwoDrivers = function(driverName = ["Antonia", "Nuru", "Amari", "Mo"]) {
    const lastTwoDrivers = driverName.slice(2)
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return totalFare = peopleForRide => peopleForRide * fare
}

function fareDoubler(fare) {
    const doubledFare = () => createFareMultiplier(fare) * 2
    return doubledFare
}

function fareTripler(fare) {
    const tripledFare = function() {
        return createFareMultiplier(fare) * 3
    }
    return tripledFare
}

function selectDifferentDrivers(driverName = ["Antonia", "Nuru", "Amari", "Mo"], returnFirstTwoDrivers) {
    return selectDifferentDrivers()
}
