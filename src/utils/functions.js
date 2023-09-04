export function getProperty(obj, path) {
    const properties = path.split(".");
    let currentObj = obj;

    for (var i = 0; i < properties.length; i++) {
        const property = properties[i];
        currentObj = currentObj[property];

        if (typeof currentObj === "undefined") return undefined;
    }

    return currentObj;
}

export function getStatNameFr(stat, long = false) {
    let statFr;

    switch (stat) {
        case 'str': statFr = 'force'; break;
        case 'dex': statFr = 'dexterité'; break;
        case 'con': statFr = 'constitution'; break;
        case 'int': statFr = 'intelligence'; break;
        case 'wis': statFr = 'sagesse'; break;
        case 'cha': statFr = 'charsime'; break;
        case 'atk': return long ? 'attaque' : 'ATQ';
        case 'def': return long ? 'défense' : 'DEF';
        case 'wil': statFr = 'volonté'; break;
        case 'spe': statFr = 'spécial'; break;
        case 'maxHp': return 'PV';
        case 'maxEp': return 'PE';

        default: break;
    }

    return long ? statFr : statFr.slice(0, 3).toUpperCase();
}

export function sumProperties(object) {
    return Object.keys(object).reduce((acc, property) => acc + object[property], 0);
}

export function properFalse(value) {
    return value !== false;
}

export function generateSheetFileName(string) {
    return string !== '' ? string.replace(/[^a-z0-9]/gi, '_') + '.json' : 'perso2d6.json'
}

export function generateId(array) {
    const usedIDs = new Set(array.map(obj => obj.id));
  
    for (let i = 0; i <= array.length; i++) {
        if (!usedIDs.has(i)) {
            return i;
        }
    }
}

export function removeIndex(array, index) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}
  
export function rollDice(diceAmount = 2, diceSize = 6) {
    let result = 0;
    for(let i = 1; i <= diceAmount; i++) {
        result += Math.ceil(Math.random()* diceSize);
    }
    return result;
}