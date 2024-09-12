// Constants
const PI = 3.1415;
const area = PI * radius * radius; // area of the circular garden
const radius = 5; // meters
const minSpace = 0.8; // square meters per plant

const startingPlants = 20;
const growthRate = 2;
const maxPlantCapacity = area / minSpace;

//  First week
const firstWeekPlantCount = startingPlants * growthRate;
const firstWeekSpace = firstWeekPlantCount * minSpace;
const firstWeekSpaceLeft = area - firstWeekSpace;

if(firstWeekPlantCount * minSpace / area > 0.8) {
    console.log("The plant needs to be pruned");
} else if (firstWeekPlantCount * minSpace / area >= 0.5) {
    console.log("The plant is healthy");
} else {
    console.log("Need more plants")
}

//  Second week
const secondWeekPlantCounts = firstWeekPlantCount * growthRate;
const secondWeekSpace = secondWeekPlantCounts * minSpace;


