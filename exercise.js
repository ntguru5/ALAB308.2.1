// Constants
const PI = 3.1415;
const radius = 5; // meters
const area = PI * radius * radius; // area of the circular garden
const minSpace = 0.8; // square meters per plant

const startingPlants = 20;
const growthRate = 2;
const maxPlantCapacity = area / minSpace;

//  First week
const firstWeekPlantCount = startingPlants * growthRate;
const firstWeekSpace = firstWeekPlantCount * minSpace;
const firstWeekSpaceTaken = firstWeekSpace / area;

if(firstWeekPlantCount * minSpace / area > 0.8) {
    console.log("The plant needs to be pruned");
} else if (firstWeekPlantCount * minSpace / area >= 0.5) {
    console.log("The plant is healthy");
} else {
    console.log("Need more plants")
}

//  Second week
const secondWeekPlantCount = firstWeekPlantCount * growthRate;
const secondWeekSpace = secondWeekPlantCount * minSpace;
const secondWeekSpaceTaken = secondWeekSpace / area;

switch (true) {
    case secondWeekSpace / area > 0.8:
        console.log("The plant needs to be pruned");
        break;
    case secondWeekSpace / area >= 0.5:
        console.log("The plant is healthy");
        break;
    default:
        console.log("Need more plants");
}

//  Third week
const thirdWeekPlantCount = secondWeekPlantCount * growthRate;
const thirdWeekSpace = thirdWeekPlantCount * minSpace;
const thirdWeekSpaceTaken = secondWeekSpace / area;

switch (true) {
    case thirdWeekSpace / area > 0.8:
        console.log("The plant needs to be pruned");
        break;
    case thirdWeekSpace / area >= 0.5:
        console.log("The plant is healthy");
        break;
    default:
        console.log("Need more plants");
}
