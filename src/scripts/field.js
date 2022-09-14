

const plantsGrowing = [];

//*solved todo: this is wrong. so EVERY time it finds an object in put it pumps out BOTH seedobjects

// my incorrect answer: 
export const addPlant = (seedObject) => {
    if(Array.isArray(seedObject) === true){
      plantsGrowing.push(seedObject[0])
      plantsGrowing.push(seedObject[1])
    } else {
      plantsGrowing.push(seedObject);
    }
};

//  maria's answer we came to together
// export const addPlant = (seedObj) => {
//   if (Array.isArray(seedObj)) {
//     for (const seed of seedObj) {
//         plantsGrowing.push(seed)
//     }
// } else {
//     plantsGrowing.push(seedObj)
// }
// return plantsGrowing
// }


export const usePlants = () => {
  const seeds = plantsGrowing.map((seed => ({...seed})));
  return seeds
};


// *solved todo: 1:15 9.12.22: update the addPlant() function with a nested if else to figure out if the array is an array, and to push it to plantsGrowing if so, and if not push it to the plantsGrowing array. sicne corn has identical information, you only need it to push to plantsGrowing one time,



// todo: 6:54 pm 9/11/22 i'm not understanding how to get the new array exported from this module to the main.js without it returning void. is it that I need to return an array value inside this usePlants code block? 
// * solved 7:33pm 9/11/22: you needed to return the copy to it's own variable, to be able to be exported at a value other than undefined.




//
//*solved. not needed here todo: try to understand the .map() method here and apply it to create a copy

//jacob's answer:
//plantsGrowing.map((plant) => ({...plant}))

//*2:52pm 9/11/22: this is atartting to make sense. Jacob's answer isn't being saved to a variable, but it does now make sense how the spread syntax used inside the .map() method on the  plantsGrowwing array would return a coppy from the usePlants function.

// const copiedPlantsGrowing = plantsGrowing
// return copiedPlantsGrowing

//* the syntax above wont work because it affects the ORIGINAL array as well, not *just* the copied array. it makes sense to separate those two steps. what if you had new stuff to plant that wasn't typical?
