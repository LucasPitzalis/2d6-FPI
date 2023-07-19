import { useDispatch } from "react-redux";
import { handleModal } from "../../actions/app";
import SimpleButton from "../buttons/SimpleButton";
import Warning from "../ui-elements/Warning";
import { abilityPointsLeft, maxEp, maxHp } from "../../utils/characterStats";
import { editField } from "../../actions/app";

export default function CharacterControls() {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-wrap mt-1 justify-center space-x-2">
            <div className="relative">
                <SimpleButton handler={() => dispatch(handleModal('editAbilities')) } text="Editer les caractéristiques" />
                {abilityPointsLeft() !== 0 && <Warning isFloat isRed={abilityPointsLeft() < 0} />}
            </div>
            <SimpleButton handler={() => dispatch(handleModal('editExperience')) } text="Editer l'expérience" />
            <SimpleButton handler={() => dispatch(editField({name: 'character.healthPoints', value: maxHp()}))}  text="Soigner tous les PV" />
            <SimpleButton handler={() => dispatch(editField({name: 'character.energyPoints', value: maxEp()}))}  text="Soigner tous les PE" />
        </div>
    );
}
