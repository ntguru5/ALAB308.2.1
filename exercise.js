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

// PART 2

const initialPlantCount = 100;
const weeks = 10;
// Calculate the final plant count after 10 weeks
const finalPlantCount = initialPlantCount * Math.pow(growthRate, weeks);
// Calculate the total space required for the plants
const space = finalPlantCount * minSpace;
const radiusPart2 = Math.sqrt(space / PI);
console.log(
"The radius of the expanded circular garden should be: ",
radiusPart2.toFixed(1) + "m"
);

//  PART 3
// add try catch blocks

try {
    // Calculate plant count and space required for the first week
    const firstWeekPlantCount = startingPlants * growthRate;
    const firstWeekSpace = firstWeekPlantCount * minSpace;

    // Check if the space required exceeds the garden's available area
    if (firstWeekSpace > area) {
        throw new Error("The plants have exceeded the available space in the garden after 1 week!");
    }

    console.log("First week plant count: ", firstWeekPlantCount);
    console.log("Space required after 1 week: ", firstWeekSpace);
    console.log("Space is still sufficient after 1 week.");

    // Continue with the second week
    const secondWeekPlantCount = firstWeekPlantCount * growthRate;
    const secondWeekSpace = secondWeekPlantCount * minSpace;

    if (secondWeekSpace > area) {
        throw new Error("The plants have exceeded the available space in the garden after 2 weeks!");
    }

    console.log("Second week plant count: ", secondWeekPlantCount);
    console.log("Space required after 2 weeks: ", secondWeekSpace);
    console.log("Space is still sufficient after 2 weeks.");

    // Continue with the third week
    const thirdWeekPlantCount = secondWeekPlantCount * growthRate;
    const thirdWeekSpace = thirdWeekPlantCount * minSpace;

    if (thirdWeekSpace > area) {
        throw new Error("The plants have exceeded the available space in the garden after 3 weeks!");
    }

    console.log("Third week plant count: ", thirdWeekPlantCount);
    console.log("Space required after 3 weeks: ", thirdWeekSpace);
    console.log("Space is still sufficient after 3 weeks.");

} catch (error) {
    console.error(error.message);
}
