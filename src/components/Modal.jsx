import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CloseIcon from '../icons/CloseIcon';
import EditAbilities from './character/EditAbilities';
import { handleModal } from '../actions/app';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Modal() {
    const { modal } = useSelector((state) => state.app);
    const dispatch = useDispatch();

    const [modalContent, setModalContent] = useState();
    const [modalTitle, setModalTitle] = useState();

    useEffect(() => {
        switch (modal) {
            case 'editAbilities': 
                setModalContent(<EditAbilities />);
                setModalTitle('Editer les caractéristiques')
                break;
            default: break;
        }
    }, [modal]);

    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/50 flex justify-center items-center">
            <dialog open className="roundedbg-white">
                <div className="relative border-b border-gray-400 flex justify-between min-w-[300px]">
                    <h3>{modalTitle}</h3>
                    <button className="relative bottom-1" onClick={() => dispatch(handleModal(false))}><CloseIcon /></button>
                </div>
                {modalContent}
            </dialog>
        </div>
    );
}
