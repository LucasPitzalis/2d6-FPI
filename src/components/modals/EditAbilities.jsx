import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleModal } from "../../actions/app";
import { editAbilities } from "../../actions/character";
import { abilityPointsLeft } from "../../features/characterStats";
import { getAbilityNameFr, sumProperties } from "../../utils/functions";
import HoverableButton from "../buttons/HoverableButton";
import SimpleButton from "../buttons/SimpleButton";

export default function EditAbilities() {
    const dispatch = useDispatch();

    const { abilities } = useSelector((state) => state.character);
    const { isMobile } = useSelector((state) => state.app);

    const [abilityChange, setAbilityChange] = useState({str:0, dex:0, con:0, int:0, wis:0, cha:0});
    // const [unlimitedPts, toggleUnlimitedPts] = useState(false);
    const [allowRemoval, toggleAllowRemoval] = useState(false);

    const remainingPoints = abilityPointsLeft() - sumProperties(abilityChange);

    const handleMinus = (ability) => {
        if ((allowRemoval && abilityChange[ability] + abilities[ability] > 0) || abilityChange[ability] > 0) 
            setAbilityChange({...abilityChange, [ability]: abilityChange[ability] - 1});
    }

    const isDisabled = () => {
        const unallowedRemoval = () => {
            if (allowRemoval) return false;
            for (const ability in abilityChange) {
                if (abilityChange[ability] < 0) return true;
            }
        }
        return remainingPoints < 0 || unallowedRemoval();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isDisabled()) return;

        const newAbilities = {};
        for (const ability in abilities) {
            newAbilities[ability] = abilities[ability] + abilityChange[ability]
        }

        dispatch(editAbilities(newAbilities));
        dispatch(handleModal(false));
    }

    return (
        <form className="flex flex-col space-y-2 align-start mt-2 sm:p-2" onSubmit={handleSubmit}>
            <p>Points restants : <span className={`font-bold ${remainingPoints < 0 && 'text-red-600'}`}>{remainingPoints}</span></p>
            <table className="table-auto text-center mt-2 border-separate border-spacing-x-3 sm:border-spacing-x-10 border-spacing-y-2">
                <thead>
                    <tr>
                        <th>Carac.</th>
                        <th>Valeur<br />initiale</th>
                        <th></th>
                        <th>Valeur<br />finale</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {Object.keys(abilities).map((ability) => { return (
                    <tr key={ability}>
                        <td>{getAbilityNameFr(ability)}</td>
                        <td>{abilities[ability]}</td>
                        <td className={`text-xs leading-none ${!allowRemoval && abilityChange[ability] < 0 && 'text-red-600 font-bold' }`}>
                            <p>{abilityChange[ability] > -1 ? `+${abilityChange[ability]}` : abilityChange[ability]}</p>
                            <p className="leading-none">&#10233;</p>
                        </td>
                        <td>{abilities[ability] + abilityChange[ability]}</td>
                        <td>
                            <HoverableButton icon="-" size={isMobile ? 15 : 20} handler={() => handleMinus(ability)}/>
                            <HoverableButton icon="+" size={isMobile ? 15 : 20} handler={() => setAbilityChange({...abilityChange, [ability]: abilityChange[ability] + 1})} />
                        </td>
                    </tr>
                )})}
                </tbody>
            </table>
            <div className="flex flex-col">
                {/* // TODO ? add the option to allow for unlimited points
                <div className="flex space-x-2">
                    <input checked={unlimitedPts} onChange={() => toggleUnlimitedPts(!unlimitedPts)} type="checkbox" name="unlimitedPts"/>
                    <label htmlFor="unlimitedPts">Points illimités</label>
                </div> */}
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
