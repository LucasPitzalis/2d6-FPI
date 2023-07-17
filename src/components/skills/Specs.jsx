import HoverableButton from "../buttons/HoverableButton";
import LockedInput from "../fields/LockedInput";
import StaticField from "../fields/StaticField";
import CircleDot from "../ui-elements/CircleDot";
import PropTypes from 'prop-types';
import { addNewSpec, addSpecUse, deleteSpec } from "../../actions/skills";
import { useDispatch } from "react-redux";
import DeletableItem from "../DeletableItem";


export default function Specs({ specs, skillIndex, deleteMode }) {
    const dispatch = useDispatch();

    function renderSpecs() {
        const render = [];
        for (let i = 0; i < 2; i++) {
            if (specs[i]) {
                render.push(
                    <DeletableItem 
                        deleteMode={deleteMode} 
                        handler={() => dispatch(deleteSpec({skillIndex: skillIndex, specIndex: i}))} 
                        styles="w-full md:w-1/2 lg:w-full space-x-0.5" key={i}
                    >
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
                    </DeletableItem>
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