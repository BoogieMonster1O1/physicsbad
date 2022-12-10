import {chadRound, getRandomDecimals, truncateOne} from "../mathutil";

export type Reading = {
    aObjectPos: number,
    bLensPos: number,
    cImagePos: number,
    uObjectDistance: number,
    vImageDistance: number
    focalLength: number
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
    let numbers: number[] = getRandomDecimals(lowerLimit, lowerLimit + 12, numberOfReadings);
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
