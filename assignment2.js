Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
       callback(this[i]);
    }
}
Array.protoype.myMap = function(callback) {
    newArray = [];
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray; 
}
Array.protoype.myFilter = function(callback) {
    newArray = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i]) == true) {
            newArray.push(this[i]);
        }
    }
    return newArray; 
}
Array.prototype.mySome = function(callback) { 
    for(let i = 0; i < this.length; i++){
        if(callback(this[i]) == true) {
            return true; 
        }
    return false; 
}
Array.protoype.myEvery = function(callback) {
    for(let i = 0; i < this.length; i++){
        if(callback(this[i]) == false) {
            return false; 
        }
    }
    return true; 
}
Array.prototype.myReduce = function(callback, initialValue) { 
    reduced = initialValue; 
    for(let i = 0; i < this.length; i++){
        reduced = callback(reduced, this[i]); 
    }
    return reduced; 
}
