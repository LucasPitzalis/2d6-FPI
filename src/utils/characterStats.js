import store from "../store";

const state = store.getState();

const { str, dex, con, int, wis, cha } = state.character.abilities;

export function atk() {
    return str + dex;
}

export function def() {
    return con + int;
}

export function wil() {
    return wis + cha;
}

export function maxHp() {
    return con*10;
}

export function maxEp() {
    return wis*10;
}

export function maxWeight() {
    return (con + str)*10;
}


