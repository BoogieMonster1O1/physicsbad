export type Reading = {
    aObjectPos: number,
    bLensPos: number,
    cImagePos: number,
    uObjectDistance: number,
    vImageDistance: number
    focalLength: number
}

export function chadRound(value: number, digits: number) {
    const multiplier = Math.pow(10, digits || 0);
    return Math.round(value * multiplier) / multiplier;
}

export function getUValue(xValue: number, focalLength: number): number {
    const sign = Math.random() > 0.5 ? 1 : -1;
    return truncateOne((xValue - sign * Math.sqrt((xValue * xValue) - 4 * xValue * focalLength)) / 2.0);
}

export function focus(u: number, v: number) {
    return (u * v) / (u + v);
}

export function generateReadings(numberOfReadings: number, desiredFocalLength: number): Reading[] {
    let readings: Reading[] = [];
    const lowerLimit = desiredFocalLength * 4;
    let numbers: number[] = chooseRandom(lowerLimit, lowerLimit + 12, numberOfReadings);
    for (let i = 0; i < numbers.length; i++) {
        const delta = numbers[i];
        const u = getUValue(delta, desiredFocalLength);
        const v = delta - u;
        const reading: Reading = {
            aObjectPos: 50 + u,
            bLensPos: 50,
            cImagePos: 50 - v,
            uObjectDistance: u,
            vImageDistance: v,
            focalLength: chadRound(focus(u, v), 2),
        };
        readings.push(reading);
    }
    return readings;
}

export function truncatedRand(lowerLimit: number, upperLimit: number) {
    return truncateOne(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
}

export function truncateOne(num: number) {
    return Math.floor(num * 10) / 10.0;
}

export function truncateTwo(num: number) {
    return Math.floor(num * 100) / 100.0;
}

export function chooseRandom(lowerLimit: number, upperLimit: number, count: number): number[] {
    let numbers: number[] = [];
    for (let i = 0; i < count; i++) {
        let num = truncatedRand(lowerLimit, upperLimit);
        while (exists(numbers, num)) {
            num = truncatedRand(lowerLimit, upperLimit);
        }
        numbers.push(num);
    }
    return numbers.sort((a, b) => a > b ? b : a);
}

export function exists(numbers: number[], num: number): boolean {
    for (let i = 0; i < numbers.length; i++) {
        if (num == numbers[i]) {
            return true;
        }
    }
    return false;
}
