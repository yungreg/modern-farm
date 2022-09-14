//! remember you can just use a sample array to make sure this is iterrating properly

import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

//*done: function -> for loop to iterate through the outer array -> fro loop to iterate through gthose INNER arrays -> if/else conditionals for the inner arrays to decide which functions to run.

//*solved todo: maia's advice: think about teh addPlant's function, and using both nested for loops 

export const plantSeeds = (yearlyPlanArray) => {
  for (const plants of yearlyPlanArray) {
    for (const seedsYouNeed of plants) {
      if (seedsYouNeed === "Asparagus") {
        const asparagusSeed = createAsparagus();
        addPlant(asparagusSeed)
      } 
        else if (seedsYouNeed === "Potato") {
        const potatoSeed = createPotato();
        addPlant(potatoSeed)
      } 
        else if (seedsYouNeed === "Sunflower") {
        const sunflowerSeed = createSunflower()
        addPlant(sunflowerSeed)
      } 
        else if (seedsYouNeed === "Wheat") {
        const wheatSeed = createWheat();
        addPlant(wheatSeed)
      } 
        else if (seedsYouNeed === "Soybean") {
        const soybeanSeed = createSoybean()
        addPlant(soybeanSeed)
      } 
      //* solved todo: fix CreateCorn() error. ask for help
        else if (seedsYouNeed === "Corn")
      {
        const cornDuplicated = createCorn()
        addPlant(cornDuplicated)
      }
    }
  }
};

/* Algo:
1. define a plantSeeds func that takes the yearly plan as a param
2. iterate both the nested arrays in the example. my guess = for loop
3. create conditional in the loop that will execuite a corresponding factory function for each element */

