import { createPlan } from './plan.js'
// *solved: import asparagus fn and check if it works
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"

// imported from field.js
import { addPlant, usePlants } from './field.js';
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

const yearlyPlan = createPlan()

console.log("Welcome to the main module")
// console.log(yearlyPlan)

//todo: attach all the "create" functions to a variable.
const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)
const potatoSeed = createPotato()

const soybeanSeed = createSoybean()

const sunflowerSeed = createSunflower()

const wheatSeed = createWheat()

const cornDuplicated = createCorn()
// console.log(cornDuplicated)



// todo: use one of the seeds you imported, instead of the sample
//*solved WOW YES it worked. lol now do it again! lol. don't invioke these until the tractor section though.
 
// addPlant(asparagusSeed)
// addPlant(potatoSeed)
// addPlant(soybeanSeed)
// addPlant(wheatSeed)
// addPlant(sunflowerSeed)

// addPlant(cornDuplicated)



plantSeeds(yearlyPlan)


const plantsInField = usePlants() //remmeber usePlants() is a COPY of addPlant()


//! 3:59 9.12.22: this is returning 70 results, when it shoudl be max 24. hwo can you trouble shoot this?
// todo: re look at the PlantSeeds function. toggling loops allowed me to change the number of output. am I just incorrectly looping?
// console.log(plantsInField)

// test code for harvester.js :
//* test sucessful! it's LIT

const plantsHarvested = harvestPlants(plantsInField)
// console.log(plantsInField)
console.log(plantsHarvested)

// selling steps below


const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalog(plantsHarvested)