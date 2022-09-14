// *solved: 1:19 9.12.22: finish me by using hieght and output elements as well

export const createCorn = () => {
    const cornElementOne = {}
    const cornElementTwo = {}
    cornElementOne.type = 'Corn'
    cornElementOne.height = 180 
    cornElementOne.output = 6
    cornElementTwo.type = 'Corn'
    cornElementTwo.height = 180 
    cornElementTwo.output = 6 
    // todo: this next line makes this an array. how do I change this? 
    const cornSeedsObject = [ cornElementOne, cornElementTwo]
    return cornSeedsObject
} 
