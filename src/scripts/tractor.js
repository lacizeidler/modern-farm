
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from './seeds/potato.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { createSoybean } from './seeds/soybean.js'
import { createCorn } from './seeds/corn.js'

const addAsparagus = createAsparagus()
const addPotato = createPotato()
const addSunflower = createSunflower()
const addWheat = createWheat()
const addSoybean = createSoybean()
const addCorn = createCorn()


export const plantSeeds = (plantingPlan) => {
    
}