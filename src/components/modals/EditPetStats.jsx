import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../actions/app";
import { editPetStats } from "../../actions/pets";
import { getLevel } from "../../data/levels";
import { petPoints } from "../../features/petStats";
import { getStatNameFr } from "../../utils/functions";
import HoverableButton from "../buttons/HoverableButton";
import SimpleButton from "../buttons/SimpleButton";

export default function EditPetStats() {
    const dispatch = useDispatch();

    const [petIndex, setPetIndex] = useState(0);
    const { isMobile } = useSelector((state) => state.app);
    const pets = useSelector((state) => state.pets);

    const [statChange, setStatChange] = useState({maxHp: 0, maxEp: 0, atk: 0, def: 0, wil: 0, spe: 0});

    useEffect(() => {
        setStatChange({atk: 0, def: 0, wil: 0, spe: 0, maxHp: 0, maxEp: 0});
    }, [petIndex])

    const [allowRemoval, toggleAllowRemoval] = useState(false);

    const { stats } = useSelector((state) => state.pets[petIndex]);

    const { skillPts, hpEpPts } = petPoints(petIndex);
    skillPts.currentLeft = skillPts.baseLeft - (statChange.atk + statChange.def + statChange.wil + statChange.spe);
    hpEpPts.currentLeft = hpEpPts.baseLeft - (statChange.maxHp + statChange.maxEp);

    const handleMinus = (stat) => {
        if (((allowRemoval || !isWithinLimit(stat, true)) && statChange[stat] + stats[stat] > 0) || statChange[stat] > 0)
            setStatChange({...statChange, [stat]: statChange[stat] - 1});
    }

    const handlePlus = (stat) => {
        const level = getLevel(pets[petIndex].experience, true);
        const limit = ['maxHp', 'maxEp'].includes(stat) ? level.hpEpLimit : level.skillLimit;

        if(statChange[stat] + stats[stat] < limit) setStatChange({...statChange, [stat]: statChange[stat] + 1});
    }

    const isWithinLimit = (stat, base = false) => {
        const level = getLevel(pets[petIndex].experience, true);
        const limit = ['maxHp', 'maxEp'].includes(stat) ? level.hpEpLimit : level.skillLimit;
        if(base) return stats[stat] <= limit;
        return statChange[stat] + stats[stat] <= limit;
    }

    const isDisabled = () => {
        const unallowedRemoval = () => {
            if (allowRemoval) return false;
            for (const stat in statChange) {
                if(!isWithinLimit(stat, true) && isWithinLimit(stat)) return false;
                if(statChange[stat] < 0) return true;
            }
        }
        return skillPts.currentLeft < 0 || hpEpPts.currentLeft < 0 || unallowedRemoval();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isDisabled()) return;

        const newStats = {};
        for (const stat in stats) {
            newStats[stat] = stats[stat] + statChange[stat]
        }

        dispatch(editPetStats(newStats, petIndex));
        dispatch(handleModal(false));
    }

    return (
        <form className="flex flex-col space-y-2 align-start mt-2 sm:p-2" onSubmit={handleSubmit}>
            <div className="relative border-b border-gray-400 pb-2 flex flex-col justify-between space-y-1">
                <h4 className="font-bold">Sélection du familier :</h4>
                <select className="border border-black rounded" onChange={(e) => setPetIndex(e.target.value)} >
                    {pets.map((pet, index) => <option key={index} value={index}>{`n°${index + 1} : ${pet.name}`}</option>)}
                </select>
            </div>
            <p>Points de PV/PE restants : <span className={`font-bold ${hpEpPts.currentLeft < 0 && 'text-red-600'}`}>{hpEpPts.currentLeft}</span></p>
            <p>Points de comp. restants : <span className={`font-bold ${skillPts.currentLeft < 0 && 'text-red-600'}`}>{skillPts.currentLeft}</span></p>
            <table className="table-auto text-center mt-2">
                <thead>
                    <tr className="border-b border-gray-400">
                        <th>Carac.</th>
                        <th>Valeur<br />initiale</th>
                        <th></th>
                        <th>Valeur<br />finale</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-400">
                {Object.keys(stats).map((stat) => { return (
                    <tr key={stat}>
                        <td>{getStatNameFr(stat)}</td>
                        <td className={!isWithinLimit(stat, true) ? 'text-red-600 font-bold' : ''}>{stats[stat]}</td>
                        <td className={`text-xs leading-none ${(allowRemoval || statChange[stat] >= 0 || !isWithinLimit(stat, true)) ? '' : 'text-red-600 font-bold' }`}>
                            <p>{statChange[stat] > -1 ? `+${statChange[stat]}` : statChange[stat]}</p>
                            <p className="leading-none">&#10233;</p>
                        </td>
                        <td className={!isWithinLimit(stat) ? 'text-red-600 font-bold' : ''}>{stats[stat] + statChange[stat]}</td>
                        <td>
                            <HoverableButton icon="-" size={isMobile ? 15 : 20} handler={() => handleMinus(stat)}/>
                            <HoverableButton icon="+" size={isMobile ? 15 : 20} handler={() => handlePlus(stat)} />
                        </td>
                    </tr>
                )})}
                </tbody>
            </table>
            <div className="flex flex-col">
                <div className="flex space-x-2">
                    <input checked={allowRemoval} onChange={() => toggleAllowRemoval(!allowRemoval)} type="checkbox"/>
                    <label>Autoriser le retrait de points</label>
                </div>
            </div>
            <div className="flex justify-center">
                <SimpleButton btnType="submit" text={"Enregistrer"} isDisabled={isDisabled()} />
            </div>
        </form>
    );
}
