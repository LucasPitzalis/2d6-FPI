import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewSkill } from '../../actions/skills';
import { currentLevel } from '../../utils/characterStats';
import HoverableButton from '../buttons/HoverableButton';
import SimpleButton from '../buttons/SimpleButton';
import SectionTitle from '../SectionTitle';
import Skill from './Skill';

export default function Skills() {
    const skills = useSelector((state) => state.skills);
    const [deleteMode, setDeleteMode] = useState(false);
    const dispatch = useDispatch();

    function renderList() {
        let skill;
        const renderedList = [];
        for (let i = 0; i < skills.length; i++) {
            skill = skills[i];
            renderedList.push(<Skill skill={skill} index={i} key={`skill${i}`} deleteMode={deleteMode} />); 
        }
        return renderedList;
    }

    return (
        <>
            <div className="flex flex-col">
                <SectionTitle title="Compétences" />
                {renderList()}
                {skills.length < currentLevel().skillPts &&
                    <div className="flex justify-left space-x-1 mt-2 items-center">
                        <HoverableButton icon="+" handler={() => dispatch(addNewSkill())} />
                        <span>Ajouter une compétence - <span className="italic">{currentLevel().skillPts - skills.length} point(s) restant(s)</span></span>
                    </div>
                }
            </div>
                <div className="flex flex-wrap mt-1 justify-center space-x-2">
                <div className="relative">
                    <SimpleButton
                        handler={() => setDeleteMode(!deleteMode)} 
                        text={`${deleteMode ? 'Désactiver' : 'Activer'} le mode suppression`} 
                        styles={deleteMode ? 'bg-red-500' : ''}
                    />
                </div>
            </div>
        </>
    );
}