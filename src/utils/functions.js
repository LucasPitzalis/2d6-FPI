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