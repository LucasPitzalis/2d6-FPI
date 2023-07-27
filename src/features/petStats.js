import store from "../store";
import { getLevel } from "../data/levels";

let currentState = store.getState();

store.subscribe(() => {
    currentState = store.getState();
});

export function currentPetLevel(index) {
    return getLevel(currentState.pets[index].experience, true);
}
