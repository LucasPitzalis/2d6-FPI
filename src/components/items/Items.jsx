import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItem } from '../../actions/items';
import HoverableButton from '../buttons/HoverableButton';
import SimpleButton from '../buttons/SimpleButton';
import SectionTitle from '../SectionTitle';
import Item from './Item';

export default function Items() {
    const items = useSelector((state) => state.items);
    const [deleteMode, setDeleteMode] = useState(false);
    const dispatch = useDispatch();

    function renderList() {
        const renderedList = [];
        for (let i = 0; i < items.length; i++) {
            renderedList.push(<Item item={items[i]} index={i} key={`item${i}`} deleteMode={deleteMode} />); 
        }
        return renderedList;
    }

    return (
        <>
            <div className="flex flex-col">
                <SectionTitle title="Objets et véhicules" />
                {renderList()}
                <div className="flex justify-left space-x-1 mt-2 items-center">
                    <HoverableButton icon="+" handler={() => dispatch(addNewItem())} />
                    <span>Ajouter un objet/véhicule</span>
                </div>
            </div>
                <div className="flex flex-wrap mt-1 justify-center space-x-2">
                <div className="relative">
                    <SimpleButton
                        handler={() => setDeleteMode(!deleteMode)} 
                        text={`${deleteMode ? 'Désactiver' : 'Activer'} le mode suppression`} 
                        background={deleteMode ? 'bg-red-500' : 'bg-teal-800'}
                    />
                </div>
            </div>
        </>
    );
}
