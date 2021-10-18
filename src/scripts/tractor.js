
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from './seeds/potato.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { createSoybean } from './seeds/soybean.js'
import { createCorn } from './seeds/corn.js'
import { addPlant } from "./field.js"



export const plantSeeds = (plantingPlan) => {
    for (const childArrays of plantingPlan) {
        for (const plantName of childArrays) {
            if (plantName === "Asparagus") {
                const addAsparagus = createAsparagus()   
                addPlant(addAsparagus)
            } else if (plantName === "Potato") {
                const addPotato = createPotato()
                addPlant(addPotato)
            } else if (plantName === "Sunflower") {
                const addSunflower = createSunflower()
                addPlant(addSunflower)
            } else if (plantName === "Wheat") {
                const addWheat = createWheat()
                addPlant(addWheat)
            } else if (plantName === "Soybean") {
                const addSoybean = createSoybean()
                addPlant(addSoybean)
            } else if (plantName === "Corn") {
                const addCorn = createCorn()
                for (let i=0; i<addCorn.length; i++) {
                    addPlant(addCorn[i])
                }
            }
        }
    }
}