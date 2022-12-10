
import {chadRound, error} from "../mathutil";

export type Reading = {
    lengthK1: number
    lengthK2: number
    resistanceBox: number
    internalResistance: number
}

export function generateReadings(internalResistance: number, count: number): Reading[] {
    let resistanceBox = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const readings: Reading[] = [];
    let lengthK1 = 48.8;
    for (let i = 0; i < count; i++) {
        let lengthK2 = chadRound(lengthK1 / (internalResistance / resistanceBox[i] + 1) + error(), 1);
        let calcIr = chadRound(resistanceBox[i] * (lengthK1 / lengthK2 - 1), 2);
        readings.push({lengthK1, lengthK2, resistanceBox: resistanceBox[i], internalResistance: calcIr});
    }
    return readings;
}
