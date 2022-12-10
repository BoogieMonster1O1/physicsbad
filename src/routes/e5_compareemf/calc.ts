import {chadRound, error} from "../mathutil";

export type Reading = {
    l1: number
    l2: number
    ratio: number
}

export function generateReadings(v1: number, v2: number, count: number): Reading[] {
    const actualRatio = v1 / v2;
    const readings: Reading[] = [];
    for (let i = 0; i < count; i++) {
        const errorRatio = actualRatio + error() / 8;
        const l1 = chadRound(Math.random() * 100, 1);
        let invalid = false;
        if (l1 < 10 || l1 > 90) {
            invalid = true;
        }
        for (let reading of readings) {
            if (Math.abs(reading.l1 - l1) < 5) {
                invalid = true;
            }
        }
        if (invalid) {
            i--;
            continue;
        }
        const l2 = chadRound(l1 / errorRatio, 1);
        if (l2 < 0 || l2 > 100) {
            i--;
            continue;
        }
        readings.push({l1, l2, ratio: chadRound(l1 / l2, 2)});
    }
    return readings;
}
