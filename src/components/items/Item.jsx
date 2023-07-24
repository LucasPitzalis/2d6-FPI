import { useDispatch } from "react-redux";
import LockedInput from "../fields/LockedInput";
import PropTypes from 'prop-types';
import SheetField from "../fields/SheetField";
import { editField } from "../../actions/app";
import DeletableItem from "../DeletableItem";
import FieldLabel from "../fields/FieldLabel";
import { qualityTable } from "../../data/quality";
import { deleteItem } from "../../actions/items";
import DirectInput from "../fields/DirectInput";

export default function Item({ item, index, deleteMode }) {
    const dispatch = useDispatch();

    return (
        <DeletableItem 
            handler={() => dispatch(deleteItem(index))}
            deleteMode={deleteMode}
            styles="flex-col py-2 lg:flex-row space-y-0.5 lg:space-y-0 lg:space-x-1 border-t border-gray-400"
        >
            <div className="flex flex-col justify-between space-y-0.5 w-full lg:w-3/5 relative">
                <LockedInput label="nom" name={`items.${index}.name`} />
                <LockedInput label="type" name={`items.${index}.type`} />
                <div className="flex space-x-0.5">
                    <LockedInput multiline={3} label="bonus" name={`items.${index}.bonusDesc`} styles={'w-5/6'} />
                    <LockedInput prefix="+" htmlType="number" name={`items.${index}.bonusValue`} styles={'w-1/6'} />
                </div>
                <div className="flex space-x-0.5">
                    <LockedInput multiline={3} label="malus" name={`items.${index}.malusDesc`} styles={'w-5/6'} />
                    <LockedInput prefix="-" htmlType="number" name={`items.${index}.malusValue`} styles={'w-1/6'} />
                </div>
                <SheetField>
                    <FieldLabel name={`items.${index}.quality`} label="qualité" />
                    <select name={`items.${index}.quality`} value={item.quality} onChange={(e) => dispatch(editField(e.target))}>
                        {qualityTable.map((quality) => <option key={quality.value} value={quality.value}>{quality.nameFr}</option>)}
                    </select>
                </SheetField>
            </div>
            <div className="flex flex-col justify-between space-y-0.5 w-full lg:w-2/5 relative">
                <div className="flex space-x-0.5">
                    <DirectInput label="pr" name={`items.${index}.resistance`} htmlType="number" styles={'w-1/3'}/>
                    <LockedInput label="réservoir" name={`items.${index}.reserve`} styles={'w-2/3'}/>
                </div>
                <div className="flex space-x-0.5">
                    <LockedInput label="dgt" name={`items.${index}.dmg`} styles={'w-1/2'}/>
                    <LockedInput label="prix rech." name={`items.${index}.reloadPrice`} styles={'w-1/2'}/>
                </div>
                <div className="flex space-x-0.5">
                    <LockedInput label="pde" name={`items.${index}.armor`} htmlType="number" center styles={'w-1/3'}/>
                    <LockedInput label="nb. de km" name={`items.${index}.kilometers`} styles={'w-2/3'}/>
                </div>
                <LockedInput label="prix" name={`items.${index}.price`} />
                <LockedInput label="poids" name={`items.${index}.weight`} />
                <LockedInput label="Type de minerai" name={`items.${index}.matType`} />
                <LockedInput label="qté de minerai" name={`items.${index}.matQty`} />
            </div>
        </DeletableItem>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired, 
        type: PropTypes.string.isRequired, 
        bonusDesc: PropTypes.string.isRequired, 
        bonusValue: PropTypes.number.isRequired, 
        malusDesc: PropTypes.string.isRequired, 
        malusValue: PropTypes.number.isRequired, 
        resistance: PropTypes.string.isRequired, 
        dmg: PropTypes.string.isRequired,
        armor: PropTypes.string.isRequired,
        reserve: PropTypes.string.isRequired, 
        reloadPrice: PropTypes.string.isRequired, 
        kilometers: PropTypes.string.isRequired,
        quality: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired, 
        weight: PropTypes.string.isRequired,
        matType: PropTypes.string.isRequired, 
        matQty: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    deleteMode: PropTypes.bool.isRequired,
};
