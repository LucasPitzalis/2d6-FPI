import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HoverableButton from '../buttons/HoverableButton';
import SectionTitle from '../SectionTitle';

export default function Skills() {
    const skills = useSelector((state) => state.skills);
    const dispatch = useDispatch();

    return (
        <>
            <SectionTitle title="Compétences" />
            <div className="flex flex-col space-y-1">
                <div className="flex flex-col space-y-1">

                </div>
                <div className="flex justify-left space-x-2 items-center">
                    <HoverableButton icon="+" handler={() => console.log("bouton ajout contact")} />
                    <span>Ajouter une compétence</span>
                </div>
            </div>
        </>
    );
}
