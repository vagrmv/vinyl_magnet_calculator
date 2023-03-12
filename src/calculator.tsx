const SETTINGS = {
    sizes: {
        A3: {
            width: 297,
            height: 420,
        },
        A4: {
            width: 210,
            height: 297,
        },
        A5: {
            width: 148,
            height: 210,
        },
        A6: {
            width: 105,
            height: 148,
        },
    },
    prices: {
        printA4: 350,
        printA5: 120,
        printA6: 60,
        laminationA3: 250,
        laminationA4: 200,
        cutsMultiple: 40,
        cornerRounding: 20,
        vinylSheet: 90,
    }
};

export function getPrice(width: number, height: number, count: number, lamination: boolean, rounding: boolean) {
    let price = 0;
    price += getCutPrice(count);
    price += getVinylSheetPrice(count);
    price += getPrintPrice(width, height, count);
    if (rounding) {
        price += getCornerRoundingPrice(count);
    }
    if (lamination) {
        price += getLaminationPrice(width, height, count);
    }

    return price;
}

function getCutPrice(count: number): number {
    return count * SETTINGS.prices.cutsMultiple;
}

function getCornerRoundingPrice(count: number): number {
    return count * SETTINGS.prices.cornerRounding;
}

function getPrintPrice(width: number, height: number, count: number): number {
    let chosenPrice: number = -1;

    if (width <= SETTINGS.sizes.A6.width && height <= SETTINGS.sizes.A6.height) {
        chosenPrice = SETTINGS.prices.printA6;
    } else if (width <= SETTINGS.sizes.A5.width && height <= SETTINGS.sizes.A5.height) {
        chosenPrice = SETTINGS.prices.printA5;
    } else if (width <= SETTINGS.sizes.A4.width && height <= SETTINGS.sizes.A4.height) {
        chosenPrice = SETTINGS.prices.printA4;
    } else {
        throw new Error('No propriate paper size');
    }

    return chosenPrice * count
}

function getLaminationPrice(width: number, height: number, count: number): number {
    let chosenPrice: number = -1;

    if (width <= SETTINGS.sizes.A4.width && height <= SETTINGS.sizes.A4.height) {
        chosenPrice = SETTINGS.prices.laminationA4;
    } else if (width <= SETTINGS.sizes.A3.width && height <= SETTINGS.sizes.A3.height) {
        chosenPrice = SETTINGS.prices.laminationA3;
    } else {
        throw new Error('No propriate paper size');
    }

    return chosenPrice * count
}

function getVinylSheetPrice(count: number): number {
    return count * SETTINGS.prices.vinylSheet;
}