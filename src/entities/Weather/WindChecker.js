const windDirectionUS = {
    0: "north",
    45: "northeast",
    90: "east",
    135: "south-east",
    180: "south",
    225: "southwest",
    270: "west",
    315: "northwest",
    360: "north"
}

const windDirectionRU = {
    0: "северный",
    45: "северо-восточный",
    90: "восточный",
    135: "юго-восточный",
    180: "южный",
    225: "юго-западный",
    270: "западный",
    315: "северо-западный",
    360: "северный"
}


export const windChecker = (deg, lang) => {
    let direction = checkLang(lang);

    for (let value of Object.keys(direction)) {
        if (deg <= value) {
            return direction[value];
        }
    }
}

const checkLang = (lang) => {
    if (lang === "ru") {
        return windDirectionRU;
    }
    return windDirectionUS;
}