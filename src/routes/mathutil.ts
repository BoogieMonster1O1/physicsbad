export function chadRound(value: number, digits: number) {
    const multiplier = Math.pow(10, digits || 0);
    return Math.round(value * multiplier) / multiplier;
}

export function truncateOne(num: number) {
    return Math.floor(num * 10) / 10.0;
}

export function truncateTwo(num: number) {
    return Math.floor(num * 100) / 100.0;
}

export function truncatedRand(lowerLimit: number, upperLimit: number) {
    return truncateOne(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
}

export function getRandomDecimals(lowerLimit: number, upperLimit: number, count: number): number[] {
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

export function getRandomIntegers(lowerLimit: number, upperLimit: number, count: number): number[] {
    let numbers: number[] = [];
    for (let i = 0; i < count; i++) {
        let num = randInt(lowerLimit, upperLimit + 1);
        while (exists(numbers, num)) {
            num = randInt(lowerLimit, upperLimit + 1);
        }
        numbers.push(num);
    }
    return numbers.sort((a, b) => a > b ? b : a);
}


export function error(): number {
    return chadRound((Math.random() - 0.5) * 1.5, 2);
}

export function exists(numbers: number[], num: number): boolean {
    for (let i = 0; i < numbers.length; i++) {
        if (num == numbers[i]) {
            return true;
        }
    }
    return false;
}

export function randInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
