export const levelsTable = [
    {level: 1, nextLevelXp: 700, abilityPts: 12, skillPts: 4},
    {level: 2, nextLevelXp: 2100, abilityPts: 14, skillPts: 5},
    {level: 3, nextLevelXp: 4900, abilityPts: 15, skillPts: 6},
    {level: 4, nextLevelXp: 13300, abilityPts: 17, skillPts: 6},
    {level: 5, nextLevelXp: 17500, abilityPts: 20, skillPts: 8},
    {level: 6, nextLevelXp: 24500, abilityPts: 22, skillPts: 8},
    {level: 7, nextLevelXp: 31500, abilityPts: 23, skillPts: 9},
    {level: 8, nextLevelXp: 38500, abilityPts: 25, skillPts: 10},
    {level: 9, nextLevelXp: 53300, abilityPts: 27, skillPts: 11},
    {level: 10, nextLevelXp: 63700, abilityPts: 31, skillPts: 13},
    {level: 11, nextLevelXp: 72100, abilityPts: 33, skillPts: 14},
    {level: 12, nextLevelXp: 80500, abilityPts: 35, skillPts: 15},
    {level: 13, nextLevelXp: 88900, abilityPts: 36, skillPts: 16},
    {level: 14, nextLevelXp: 111300, abilityPts: 38, skillPts: 17},
    {level: 15, nextLevelXp: 122500, abilityPts: 41, skillPts: 19},
    {level: 16, nextLevelXp: 133700, abilityPts: 43, skillPts: 20},
    {level: 17, nextLevelXp: 144900, abilityPts: 45, skillPts: 21},
    {level: 18, nextLevelXp: 158900, abilityPts: 47, skillPts: 23},
    {level: 19, nextLevelXp: 186900, abilityPts: 49, skillPts: 24},
    {level: 20, nextLevelXp: 'Niveau max !', abilityPts: 56, skillPts: 28},
];

export function getLevel(xp) {
    if (xp >= levelsTable.slice(-2)[0].nextLevelXp) return levelsTable.slice(-1)[0];
    return levelsTable.find((level) => level.nextLevelXp > xp);
}

export function minXp(level) {
    return levelsTable[levelsTable.findIndex((levelObject) => levelObject.level === level) - 1].nextLevelXp;
}
