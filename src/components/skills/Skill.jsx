import { useSelector, useDispatch } from "react-redux";
import InputField from "../fields/InputField";
import StaticField from "../fields/StaticField";
import PropTypes from 'prop-types';
import SheetField from "../fields/SheetField";
import { abilityStrings } from "../../features/characterStats";
import { getStatNameFr } from "../../utils/functions";
import { editField } from "../../actions/app";
import Specs from "./Specs";
import { deleteSkill } from "../../actions/skills";
import DeletableItem from "../DeletableItem";

export default function Skill({ skill, index, deleteMode }) {
    const { abilities } = useSelector((state) => state.character);
    const dispatch = useDispatch();

    return (
        <DeletableItem 
            handler={() => dispatch(deleteSkill(index))}
            deleteMode={deleteMode}
            styles="flex-col py-2 md:flex-row space-y-0.5 md:space-y-0 md:space-x-0.5 border-t border-gray-400"
        >
            <div className="flex flex-col justify-between space-y-0.5 w-full md:w-3/5 relative">
                <div className="flex space-x-0.5">
                    <InputField label="nom" name={`skills.${index}.name`} styles={'w-2/3'} />
                    <StaticField name={`skills.${index}.bonus`} value={abilities[skill.ability1] + abilities[skill.ability2]} styles={'w-1/3'}/>
                </div>
                <div className="flex space-x-0.5">
                    <InputField label="info" name={`skills.${index}.description`} multiline={2} styles={'w-2/3'} />
                    <SheetField vertical styles={'w-1/3 justify-center'}>
                        <span className="text-xs">Carac. associées</span>
                        <div className="flex space-x-0.5 items-center">
                            <select name={`skills.${index}.ability1`} value={skill.ability1} onChange={(e) => dispatch(editField(e.target))}>
                                {abilityStrings
                                    .filter((ability) => ability !== skill.ability2)
                                    .map((ability) => (
                                        <option key={ability} value={ability}>{getStatNameFr(ability)}</option>
                                    ))}
                            </select>
                            <span className="font-bold">+</span>
                            <select name={`skills.${index}.ability2`} value={skill.ability2} onChange={(e) => dispatch(editField(e.target))}>
                                {abilityStrings
                                    .filter((ability) => ability !== skill.ability1)
                                    .map((ability) => (
                                        <option key={ability} value={ability}>{getStatNameFr(ability)}</option>
                                    ))}
                            </select>
                        </div>
                    </SheetField>
                </div>
            </div>
            <Specs specs={skill.specs} skillIndex={index} deleteMode={deleteMode} /> 
        </DeletableItem>
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
