import {chadRound} from "../mathutil";

export type Reading = {
    firstPos: number;
    secondPos: number;
    distance: number;
    objectImageDistance: number;
    focalLength: number;
}

export function focus(x: number, d: number) {
    return (x * x - d * d) / (4 * x);
}

export function distance(x: number, focus: number): number {
    return Math.sqrt(x * x - 4 * x * focus);
}

export function d1(x: number, d: number) {
    return (x - d) / 2;
}

export function d2(x: number, d: number) {
    return (x + d) / 2;
}

export function generateReadings(focalLength: number, count: number): Reading[] {
    const xes: number[] = [];
    const readings: Reading[] = [];
    const baseX = multipleOf5GreaterThan(4 * focalLength + 1);
    for (let i = 0; i < count; i++) {
        xes.push(baseX + i * 5);
    }
    for (let i = 0; i < count; i++) {
        const x = xes[i];
        const d: number = distance(x, focalLength);
        const dOne = chadRound(d1(x, d), 1);
        const dTwo = chadRound(d2(x, d), 1);
        const newD = chadRound(dTwo - dOne, 1);
        const newFocus = chadRound(focus(x, newD), 2);
        readings.push({
            focalLength: newFocus,
            firstPos: dOne,
            secondPos: dTwo,
            distance: newD,
            objectImageDistance: x
        });
    }
    return readings;
}

export function multipleOf5GreaterThan(x: number) {
    return Math.ceil(x / 5) * 5;
}
