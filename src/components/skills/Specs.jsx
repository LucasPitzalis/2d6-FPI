import HoverableButton from "../buttons/HoverableButton";
import LockedInput from "../fields/LockedInput";
import StaticField from "../fields/StaticField";
import CircleDot from "../ui-elements/CircleDot";
import PropTypes from 'prop-types';
import { addNewSpec, addSpecUse, deleteSpec } from "../../actions/skills";
import { useDispatch } from "react-redux";
import IconButton from "../buttons/IconButton";
import { useState } from "react";


export default function Specs({ specs, skillIndex, deleteMode }) {
    const dispatch = useDispatch();
    const [highlight, setHighlight] = useState(false);

    function renderSpecs() {
        const render = [];
        for (let i = 0; i < 2; i++) {
            if (specs[i]) {
                render.push(
                    <div className={`w-full md:w-1/2 lg:w-full flex space-x-0.5 relative ${highlight === i ? 'p-0.5 border-2 border-red-500' : ''}`} key={i}>
                        <LockedInput name={`skills.${skillIndex}.specs.${i}.name`} styles="w-2/3"></LockedInput>
                        <div className="w-1/3">
                            {specs[i].bonus < 7 && (
                            <div className="flex justify-evenly items-center">
                                <div className="flex">
                                    {renderUses(specs[i].uses)}
                                </div>
                                <HoverableButton icon="+" size={15} handler={() => dispatch(addSpecUse({skillIndex: skillIndex, specIndex: i}))} />
                            </div>)}
                            <StaticField name={`skills.${skillIndex}.specs.${i}.bonus`} value={`${specs[i].bonus} / 7`} styles="text-center text-xs" />
                        </div>
                        {deleteMode &&
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group/delete" 
                                onMouseOver={() => setHighlight(i)}
                                onMouseOut={() => setHighlight(false)}
                            >
                                <IconButton 
                                    styles={'bg-red-500 p-1 text-white hover:scale-110'} 
                                    size={15} 
                                    handler={() => dispatch(deleteSpec({skillIndex: skillIndex, specIndex: i}))} 
                                    icon="delete" 
                                />
                            </div>
                        }
                    </div>
                )
            }
        }
        if (specs.length < 2) render.push(
            <div className="md:w-1/2 lg:w-full flex flex-1 space-x-0.5 items-center md:justify-center lg:justify-start" key="addSpec">
                <HoverableButton icon="+" handler={() => dispatch(addNewSpec(skillIndex))}/>
                <span>Ajouter une particularité</span>
            </div>
        )
        
        return render;
    }

    function renderUses(uses) {
        const render = [];
        for (let i = 0; i < 5; i++) {
            if (uses > i) render.push(<CircleDot checked key={i}/>);
            else render.push(<CircleDot key={i}/>)
        }
        return render;
    }

    return (
        <div className="flex flex-col md:flex-row md:space-x-1 lg:flex-col lg:space-x-0 space-y-0.5 lg:w-2/5">
            {renderSpecs()}
        </div>
    );
}

Specs.propTypes = {
    specs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        bonus: PropTypes.number.isRequired,
        uses: PropTypes.number.isRequired,
    })),
    skillIndex: PropTypes.number.isRequired,
    deleteMode: PropTypes.bool.isRequired,
};