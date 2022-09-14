// goal: print the html representation of the plants you harvested, and use flexbox to style them like the example. this will require looking back at the same thing you did with artin's aquarium.
/*algo:
- export PlantsHarvested from main then import into catalog //!not needed - catalog fn will go to main
- make the catalog Fn
- inside th4e function body, define a variable that hold the whole HTML string to be put into index. set this up a varible outside the for loop
- in the for loop, loop through the plantsharvested array you pass in, and build an HTMLstring out of those values that displays the vale of "type" in each object //! rememeber you need <script type="module" src="./scripts/main.js"></script> to actiuvite teh script on the HTML page
- design it in CSS to mimic the example photo 
*/


export const catalog = (plantsHarvestedArray) => {
    let plantsToSellHTML = '<section class="plants-to-sell">'
    for (const item of plantsHarvestedArray){
        plantsToSellHTML += `<div class="individual-plant">${item.type}</div>`
    }
    plantsToSellHTML += `</section>`
    return plantsToSellHTML  
}