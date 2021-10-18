
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from './seeds/potato.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { createSoybean } from './seeds/soybean.js'
import { createCorn } from './seeds/corn.js'
import { addPlant } from "./field.js"

                const addAsparagus = createAsparagus()   
                const addPotato = createPotato()
                const addSunflower = createSunflower()
                const addWheat = createWheat()
                const addSoybean = createSoybean()
                const addCorn = createCorn()


export const harvestPlants = (plantsArray) => {
    const plantsToHarvest = []
    for (const plantsObj of plantsArray) {
        for (let i=0; i<plantsObj.output; i++) {
            if (plantsObj.type === "Asparagus") {
                plantsToHarvest.push(addAsparagus)
            } else if (plantsObj.type === "Potato") {
                plantsToHarvest.push(addPotato)
            } else if (plantsObj.type === "Sunflower"){
                plantsToHarvest.push(addSunflower)
            } else if (plantsObj.type === "Wheat") {
                plantsToHarvest.push (addWheat)
            } else if (plantsObj.type === "Soybean"){
                plantsToHarvest.push (addSoybean)
            } 
        }
        for (let i=0; i<plantsObj.output / 2; i++) {
            if (plantsObj.type === "Corn") {
                plantsToHarvest.push (addCorn[0])
            }
        }
    }
    return plantsToHarvest
}