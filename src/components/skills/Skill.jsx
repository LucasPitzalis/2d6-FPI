import { useSelector } from "react-redux";
import LockedInput from "../fields/LockedInput";
import StaticField from "../fields/StaticField";
import PropTypes from 'prop-types';
import SheetField from "../fields/SheetField";

export default function Skill({ skill, index }) {
    const { abilities } = useSelector((state) => state.character);

    return (
        <div>
            <div className="flex flex-col space-y-0.5 w-full lg:w-3/5">
                <div className="flex space-x-0.5">
                    <LockedInput label="nom" name={`skills.${index}.name`} styles={'w-2/3'} />
                    <StaticField name={`skills.${index}.bonus`} value={abilities[skill.ability1] + abilities[skill.ability2]} styles={'w-1/3'}/>
                </div>
                <div className="flex space-x-0.5">
                    <LockedInput label="info" name={`skills.${index}.description`} multiline styles={'w-2/3'} />
                    <SheetField vertical styles={'w-1/3'}>
                        <span className="text-xs">Carac. associées</span>
                        <span>machin + bidule</span>
                    </SheetField>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}

Skill.propTypes = {
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired, 
        ability1: PropTypes.string.isRequired, 
        ability2: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};
