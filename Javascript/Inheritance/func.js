function printPrototype(obj){
    let currentObject = obj;
    while(currentObject !== null){
        console.log(currentObject);
        currentObject = Object.getPrototypeOf(currentObject);
        
    }
    console.log(null);
    
}
const printprototype = 0;
printPrototype(printprototype);