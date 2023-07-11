import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HoverableButton from '../buttons/HoverableButton';
import LockedInput from '../fields/LockedInput';
import StaticField from '../fields/StaticField';
import SectionTitle from '../SectionTitle';
import Skill from './Skill';

export default function Skills() {
    const skills = useSelector((state) => state.skills);
    const dispatch = useDispatch();

    function renderList() {
        let skill;
        const renderedList = [];
        for (let i = 0; i < skills.length; i++) {
            skill = skills[i];
            renderedList.push(<Skill skill={skill} index={i} key={`${skill.id}`} />); 
        }
        return renderedList;
    }

    return (
        <>
            <SectionTitle title="Compétences" />
            <div className="flex flex-col space-y-1">
                {renderList()}
                <div className="flex justify-left space-x-2 items-center">
                    <HoverableButton icon="+" handler={() => console.log("bouton ajout contact")} />
                    <span>Ajouter une compétence</span>
                </div>
            </div>
        </>
    );
}
