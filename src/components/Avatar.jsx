import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleModal } from "../actions/app";
import IconButton from "./buttons/IconButton";

import PropTypes from 'prop-types';
import HoverableButton from "./buttons/HoverableButton";
import { properFalse } from "../utils/functions";

export default function Avatar({petIndex}) {
    const { avatar } = useSelector((state) => !properFalse(petIndex) ? state.character : state.pets[petIndex]);
    const dispatch = useDispatch();

    return (
        <div className="group/edit flex justify-center items-center flex-grow border-2 border-black rounded">
            {avatar === '' && 
                <div className="flex space-x-1 items-center">
                    <HoverableButton icon="+" handler={() => dispatch(handleModal(!properFalse(petIndex) ? 'avatar' : `avatar.${petIndex}`))} />
                    <span className={`text-center ${properFalse(petIndex) ? 'xs:w-16' : 'sm:w-16'}`}>Ajouter un avatar</span>
                </div>
            }
            {avatar !== '' && 
                <div className={`group/edit flex justify-center items-center flex-grow aspect-avatar group relative max-w-sm`}>
                    <img src={avatar} className="max-h-full" alt="URL d'avatar non valide !" />
                    <div className="hidden group-hover/edit:block absolute right-0 top-0">
                        <IconButton hidden styles="bg-white" size={15} handler={() => dispatch(handleModal(!properFalse(petIndex) ? 'avatar' : `avatar.${petIndex}`))} icon="edit" />
                    </div>
                </div>
            }
        </div>
    );
}

Avatar.propTypes = {
    petIndex: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ])
};

Avatar.defaultProps = {
    petIndex: false,
}
