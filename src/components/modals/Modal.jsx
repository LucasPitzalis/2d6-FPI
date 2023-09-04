import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import EditAbilities from './EditAbilities';
import { handleModal } from '../../actions/app';
import { useState } from 'react';
import { useEffect } from 'react';
import EditExperience from './EditExperience';
import IconButton from '../buttons/IconButton';
import AvatarModal from './AvatarModal';
import SaveModal from './SaveModal';
import EditPetRolls from './EditPetRolls';
import EditPetStats from './EditPetStats';

export default function Modal() {
    const { modal } = useSelector((state) => state.app);
    const { isMobile } = useSelector((state) => state.app);
    const dispatch = useDispatch();

    const [modalContent, setModalContent] = useState();
    const [modalTitle, setModalTitle] = useState();

    useEffect(() => {
        switch (modal) {
            case 'editAbilities': 
                setModalContent(<EditAbilities />);
                setModalTitle('Modifier les caractéristiques');
                break;
            case 'editExperience':
                setModalContent(<EditExperience />);
                setModalTitle('Modifier l\'expérience');
                break;
            case 'editPetRolls':
                setModalContent(<EditPetRolls />);
                setModalTitle('Jets de niveaux des familiers');
                break;
            case 'editPetAbilities':
                setModalContent(<EditPetStats />);
                setModalTitle('Distribution des points des familiers');
                break;
            case 'avatar':
                setModalContent(<AvatarModal />);
                setModalTitle('Ajouter/modifier l\'avatar');
                break;
            case 'importSheet':
            case 'newSheet':
                setModalContent(<SaveModal action={modal} />);
                setModalTitle('Avertissement');
                break;
            default: break;
        }
    }, [modal]);

    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/50 flex justify-center items-center z-20">
            <dialog open className="rounded bg-white text-xs sm:text-base p-2 sm:p-3">
                <div className="relative border-b border-gray-400 flex justify-between">
                    <h3 className="font-bold">{modalTitle}</h3>
                    <div className="relative bottom-0.5"><IconButton size={isMobile ? 15 : 20} icon={"close"} handler={() => dispatch(handleModal(false))} /></div>
                </div>
                {modalContent}
            </dialog>
        </div>
    );
}
