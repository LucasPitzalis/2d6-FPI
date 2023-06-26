export const levelsTable = [
    {level: 1, minXp: 0, abilityPts: 12, skillPts: 4},
    {level: 2, minXp: 700, abilityPts: 14, skillPts: 5},
    {level: 3, minXp: 2100, abilityPts: 15, skillPts: 6},
    {level: 4, minXp: 4900, abilityPts: 17, skillPts: 6},
    {level: 5, minXp: 13300, abilityPts: 20, skillPts: 8},
    {level: 6, minXp: 17500, abilityPts: 22, skillPts: 8},
    {level: 7, minXp: 24500, abilityPts: 23, skillPts: 9},
    {level: 8, minXp: 31500, abilityPts: 25, skillPts: 10},
    {level: 9, minXp: 38500, abilityPts: 27, skillPts: 11},
    {level: 10, minXp: 55300, abilityPts: 31, skillPts: 13},
    {level: 11, minXp: 63700, abilityPts: 33, skillPts: 14},
    {level: 12, minXp: 72100, abilityPts: 35, skillPts: 15},
    {level: 13, minXp: 80500, abilityPts: 36, skillPts: 16},
    {level: 14, minXp: 88900, abilityPts: 38, skillPts: 17},
    {level: 15, minXp: 111300, abilityPts: 41, skillPts: 19},
    {level: 16, minXp: 122500, abilityPts: 43, skillPts: 20},
    {level: 17, minXp: 133700, abilityPts: 45, skillPts: 21},
    {level: 18, minXp: 144900, abilityPts: 47, skillPts: 23},
    {level: 19, minXp: 158900, abilityPts: 49, skillPts: 24},
    {level: 20, minXp: 186900, abilityPts: 56, skillPts: 28},
];

export function getLevel(xp) {
    return levelsTable[levelsTable.findIndex((level) => level.minXp > xp)].level - 1;
}

export function getNextLevelXp(xp) {
    return levelsTable.find((level) => level.minXp > xp).minXp;
}