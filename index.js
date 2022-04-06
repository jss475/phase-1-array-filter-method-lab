// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

/*function findMatching(drivers,string){
    
    const result = drivers.filter(element => element.toUpperCase() === string.toUpperCase())
    return result
}*/

function fuzzyMatch(drivers,string){
    const result = drivers.filter(name => name[0] === string[0])
    return result
}

function matchName(drivers, string){
    const result = drivers.filter(array => array.name === string)
    return result
}





function findMatching(drivers, string){

    function findSomething(element){
 
        return element === string
    }
    return drivers.filter(findSomething)
}

