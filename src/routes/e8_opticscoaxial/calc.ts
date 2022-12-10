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
    let yInt = 100 / desiredFocalLength;
    for (let i = 0; i < numberOfReadings; i++) {

    }
    return readings;
}
