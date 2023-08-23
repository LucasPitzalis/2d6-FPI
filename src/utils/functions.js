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

export function getAbilityNameFr(ability, long = false) {
    let abilityFr;

    switch (ability) {
        case 'str': abilityFr = 'force'; break;
        case 'dex': abilityFr = 'dexterité'; break;
        case 'con': abilityFr = 'constitution'; break;
        case 'int': abilityFr = 'intelligence'; break;
        case 'wis': abilityFr = 'sagesse'; break;
        case 'cha': abilityFr = 'charsime'; break;
        default: break;
    }

    return long ? abilityFr : abilityFr.slice(0, 3).toUpperCase();
}

export function sumProperties(object) {
    return Object.keys(object).reduce((acc, property) => acc + object[property], 0);
}

export function properFalse(value) {
    return value !== false;
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
  