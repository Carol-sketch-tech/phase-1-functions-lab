// Code your solution in this file!
function distanceFromHqInBlocks(block){
   return Math.abs(block - 42);
}

function distanceFromHqInFeet(block){
    return Math.abs(block - 42)*264;
   
}
function distanceTravelledInFeet(start, destination){
    return Math.abs( destination - start) * 264;
    
}
function  calculatesFarePrice(start, destination){
    const feetTravelled = distanceTravelledInFeet (start, destination);
    if (feetTravelled <= 400 ){
        return 0;
    }
    else if (feetTravelled > 400 && feetTravelled <= 2000){
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled >  2000 && feetTravelled <= 2500){
        return 25;
    } else {
            return 'cannot travel that far'}}