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
