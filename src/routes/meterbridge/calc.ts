import {chadRound, getRandomIntegers, randInt} from "../mathutil";

export type ResistanceReading = {
    resistanceBox: number,
    length: number,
    lengthComp: number,
    unknown: number
}

export function getMeterBridgeL(resistanceBox: number, unknown: number): number {
    return chadRound((100 * resistanceBox) / (resistanceBox + unknown), 1);
}

export function calculateUnknown(resistanceBox: number, length: number): number {
    return chadRound(resistanceBox * ((100 - length) / (length)), 2);
}

export function generateReadings(unknown: number, numberOfReadings: number): ResistanceReading[] {
    let readings: ResistanceReading[] = [];
    const resistances = getRandomIntegers(1, 20, numberOfReadings); // Resistance box goes from 1 ohm to 20 ohm
    for (let i = 0; i < numberOfReadings; i++) {
        const error = randInt(-2, 2) / 10;
        const resistance = resistances[i];
        const length = getMeterBridgeL(resistance, unknown + error);
        readings.push({
            resistanceBox: resistance,
            length: length,
            lengthComp: 100 - length,
            unknown: calculateUnknown(resistance, length)
        })
    }
    return readings;
}
