import store from "../store";
import { sumProperties } from "./functions";
import { getLevel } from "./levels";

let currentState = store.getState();

store.subscribe(() => {
    currentState = store.getState();
});

export const abilityStrings = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

export function atk() {
    const { str, dex } = currentState.character.abilities;
    return str + dex;
}

export function def() {
    const { con, int } = currentState.character.abilities;
    return con + int;
}

export function wil() {
    const { wis, cha } = currentState.character.abilities;
    return wis + cha;
}

export function maxHp() {
    return currentState.character.abilities.con * 10;
}

export function maxEp() {
    return currentState.character.abilities.wis * 10;
}

export function maxWeight() {
    const { con, str } = currentState.character.abilities;
    return (con + str) * 10;
}

export function abilityPointsLeft() {
    const { experience, abilities } = currentState.character;
    return getLevel(experience).abilityPts - sumProperties(abilities);
}