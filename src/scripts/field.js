import { typesArray } from "./plan.js"

initialArray = []


// The addPLant function must accept a seed object as an input. The function will add the seed to the field. 
export const addPlant = () => {
    for (const typesObj of typesArray) {
        initialArray.push(typesObj)
    }
}

// Function named usePlants that returns a copy of the array of plants. 
export const usePlants = () => {
    for (const initialObj of initialArray) {
        return initialObj
    }
}