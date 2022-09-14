/* algo sketch : 
- create HarvestPLants fn accepting PLantsInField as param
- creaste an empty array for the codeblock to push stuff into
- iterate teh contents of plantsInField w/ for loop 
- inside for loop code block, use if else
- if corn is type, then take the value of output and divivde it by two, and push that many copies to the empty array from step 3 //! output = 6, so push it 3 times
- if anything else is type, then take the value of output and push that many copies to the empty array from step 3 //!(DONT divide these by two)
- return array of seed objects //todo: figure out where the return goes in harvestPlants() to not get a val of undefined
- //*profit
*/

export const harvestPlants = (yearlyPlanForPlanting) => {
    const plantsHarvested = []
    for (const newHarvestPlan of yearlyPlanForPlanting) {
        if(newHarvestPlan.type === 'Corn'){
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
        } else if (newHarvestPlan.type === 'Soybean'){
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
        } else if (newHarvestPlan.type === 'Sunflower'){
            plantsHarvested.push(newHarvestPlan)                
            plantsHarvested.push(newHarvestPlan)                
            plantsHarvested.push(newHarvestPlan)                
        } else if (newHarvestPlan.type === 'Asparagus'){
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
        } else if (newHarvestPlan.type === 'Wheat') {
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
        } else if (newHarvestPlan.type === 'Potato') {
            plantsHarvested.push(newHarvestPlan)
            plantsHarvested.push(newHarvestPlan)
        } 
    }
    return plantsHarvested
}