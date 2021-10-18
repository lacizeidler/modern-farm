

const initialArray = []


// The addPLant function must accept a seed object as an input. The function will add the seed to the field. 
export const addPlant = (seedObject) => {
        initialArray.push(seedObject)
}

// Function named usePlants that returns a copy of the array of plants. 
export const usePlants = () => {
    return initialArray
}

