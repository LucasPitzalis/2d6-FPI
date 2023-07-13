import { useSelector, useDispatch } from "react-redux";
import LockedInput from "../fields/LockedInput";
import StaticField from "../fields/StaticField";
import PropTypes from 'prop-types';
import SheetField from "../fields/SheetField";
import { abilityStrings } from "../../utils/characterStats";
import { getAbilityNameFr } from "../../utils/functions";
import { editField } from "../../actions/app";
import Specs from "./Specs";
import IconButton from "../buttons/IconButton";
import { deleteSkill } from "../../actions/skills";
import { useState } from "react";

export default function Skill({ skill, index, deleteMode }) {
    const { abilities } = useSelector((state) => state.character);
    const [highlight, setHighlight] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className={`flex flex-col py-2 lg:flex-row space-y-0.5 lg:space-y-0 lg:space-x-0.5 border-t border-gray-400 ${highlight ? 'p-0.5 border-2 border-t-2 border-red-500' : ''}`}>
            <div className="flex flex-col justify-between space-y-0.5 w-full lg:w-3/5 relative">
                <div className="flex space-x-0.5">
                    <LockedInput label="nom" name={`skills.${index}.name`} styles={'w-2/3'} />
                    <StaticField name={`skills.${index}.bonus`} value={abilities[skill.ability1] + abilities[skill.ability2]} styles={'w-1/3'}/>
                </div>
                <div className="flex space-x-0.5">
                    <LockedInput label="info" name={`skills.${index}.description`} multiline styles={'w-2/3'} />
                    <SheetField vertical styles={'w-1/3 justify-center'}>
                        <span className="text-xs">Carac. associées</span>
                        <div className="flex space-x-0.5 items-center">
                            <select name={`skills.${index}.ability1`} value={skill.ability1} onChange={(e) => dispatch(editField(e.target))}>
                                {abilityStrings
                                    .filter((ability) => ability !== skill.ability2)
                                    .map((ability) => (
                                        <option key={ability} value={ability}>{getAbilityNameFr(ability)}</option>
                                    ))}
                            </select>
                            <span className="font-bold">+</span>
                            <select name={`skills.${index}.ability2`} value={skill.ability2} onChange={(e) => dispatch(editField(e.target))}>
                                {abilityStrings
                                    .filter((ability) => ability !== skill.ability1)
                                    .map((ability) => (
                                        <option key={ability} value={ability}>{getAbilityNameFr(ability)}</option>
                                    ))}
                            </select>
                        </div>
                    </SheetField>
                </div>
                {deleteMode &&
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group/delete" 
                        onMouseOver={() => setHighlight(true)}
                        onMouseOut={() => setHighlight(false)}
                    >
                        <IconButton styles={'bg-red-500 p-1 text-white hover:scale-110'} size={15} handler={() => dispatch(deleteSkill(index))} icon="delete" />
                    </div>
                }
            </div>
            <Specs specs={skill.specs} skillIndex={index} deleteMode={deleteMode} /> 
        </div>
    );
}

Skill.propTypes = {
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired, 
        ability1: PropTypes.string.isRequired, 
        ability2: PropTypes.string.isRequired,
        specs: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            bonus: PropTypes.number.isRequired,
            uses: PropTypes.number.isRequired,
        }))
    }).isRequired,
    index: PropTypes.number.isRequired,
    deleteMode: PropTypes.bool.isRequired,
};
