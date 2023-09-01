import store from "../store";
import { getLevel } from "../data/levels";

let currentState = store.getState();

store.subscribe(() => {
    currentState = store.getState();
});

export function currentPetLevel(index) {
    return getLevel(currentState.pets[index].experience, true);
}

export function petPoints(index) {
    const pet = currentState.pets[index];
    const {atk, def, wil, spe, maxHp, maxEp} = pet.stats
    const totalSkill = pet.levelRolls.reduce((sum, roll) => sum + roll.skill, 0);
    const totalHpEp = pet.levelRolls.reduce((sum, roll) => sum + roll.hpEp, 0);
    return {
        skillPts: {total: totalSkill, baseLeft: totalSkill - (atk + def + wil + spe)},
        hpEpPts: {total: totalHpEp, baseLeft: totalHpEp - (maxHp + maxEp)},
    }
}
