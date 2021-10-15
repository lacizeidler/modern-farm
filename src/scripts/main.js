import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from './seeds/potato.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { createSoybean } from './seeds/soybean.js'
import { createCorn } from './seeds/corn.js'

const cornSeed = createCorn() 
console.log(cornSeed)

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

const wheatSeed = createWheat()
console.log(wheatSeed)

const sunflowerSeed = createSunflower() 
console.log(sunflowerSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const yearlyPlan = createPlan()
console.log(yearlyPlan)

console.log("Welcome to the main module")


