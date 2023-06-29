import store from "../store";

const state = store.getState();

const { str, dex, con, int, wis, cha } = state.character.abilities;

export default {
    atk: function() {
        return str + dex;
    },

    def: function() {
        return con + int;
    },

    wil: function() {
        return wis + cha;
    },

    maxHp: function() {
        return con*10;
    },

    maxEp: function() {
        return wis*10;
    },

    maxWeight: function() {
        return (con + str)*10;
    },
}

