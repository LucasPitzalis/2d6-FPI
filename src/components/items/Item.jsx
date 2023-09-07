import { useDispatch, useSelector } from "react-redux";
import InputField from "../fields/InputField";
import PropTypes from 'prop-types';
import SheetField from "../fields/SheetField";
import { editField } from "../../actions/app";
import DeletableItem from "../context/DeletableItem";
import FieldLabel from "../fields/FieldLabel";
import { qualityTable } from "../../data/quality";
import { deleteItem } from "../../actions/items";
import { properFalse } from "../../utils/functions";

export default function Item({ item, index, deleteMode }) {
    const dispatch = useDispatch();
    const { quality, bonusValue, malusValue } = useSelector((state) => state.items[index]);
    const pets = useSelector((state) => state.pets);
    const { name } = useSelector((state) => state.character);

    const handleQualityChange = (e) => {
        if(e.target.value < bonusValue) dispatch(editField({name: `items.${index}.bonusValue`, value: Number(e.target.value)}));
        if(e.target.value < malusValue) dispatch(editField({name: `items.${index}.malusValue`, value: Number(e.target.value)}));
        dispatch(editField(e.target));
    }

    return (
        <DeletableItem 
            handler={() => dispatch(deleteItem(index))}
            deleteMode={deleteMode}
            styles="flex-col py-2 sm:flex-row space-y-0.5 sm:space-y-0 sm:space-x-1 border-t border-gray-400"
        >
            <div className="flex flex-col justify-between space-y-0.5 w-full sm:w-3/5">
                <InputField label="nom" name={`items.${index}.name`} />
                <InputField label="type" name={`items.${index}.type`} />
                <div className="flex space-x-0.5">
                    <InputField multiline={3} label="bonus" name={`items.${index}.bonusDesc`} styles={'w-full'} />
                    <InputField prefix="+" htmlType="number" name={`items.${index}.bonusValue`} styles={'w-16'} regex={new RegExp(`^[0-${quality}]d*$`)} />
                </div>
                <div className="flex space-x-0.5">
                    <InputField multiline={3} label="malus" name={`items.${index}.malusDesc`} styles={'w-full'} />
                    <InputField prefix="-" htmlType="number" name={`items.${index}.malusValue`} styles={'w-16'} regex={new RegExp(`^[0-${quality}]d*$`)} />
                </div>
                <div className="flex flex-col gap-0.5 xxs:flex-row">
                    <SheetField styles="xxs:w-1/2">
                        <FieldLabel name={`items.${index}.quality`} label="qualité" />
                        <select name={`items.${index}.quality`} value={item.quality} onChange={handleQualityChange} className="grow">
                            {qualityTable.map((quality) => <option key={quality.value} value={quality.value}>{quality.nameFr}</option>)}
                        </select>
                    </SheetField>
                    <SheetField styles="xxs:w-1/2">
                        <FieldLabel name={`items.${index}.bearer`} label="porteur" />
                        <select 
                            className="grow"
                            name={`items.${index}.bearer`} 
                            value={item.bearer} 
                            onChange={(e) => dispatch(editField({name: `items.${index}.bearer`, value: Number(e.target.value)}))}
                        >
                            <option value={-1}>{name}</option>
                            {pets.map((pet, index) => <option key={index} value={index}>{`n°${index + 1} : ${pet.name}`}</option>)}
                        </select>
                    </SheetField>
                </div>
            </div>
            <div className="flex flex-col justify-between space-y-0.5 w-full sm:w-2/5">
                <div className="flex space-x-0.5">
                    <InputField label="pr" name={`items.${index}.resistance`} htmlType="number" center styles={'w-1/3'} regex={/^[0-9]\d*$/} />
                    <InputField label="réservoir" name={`items.${index}.reserve`} styles={'w-2/3'}/>
                </div>
                <div className="flex space-x-0.5">
                    <InputField label="dgt" name={`items.${index}.dmg`} styles={'w-1/2'}/>
                    <InputField label="prix rech." name={`items.${index}.reloadPrice`} styles={'w-1/2'}/>
                </div>
                <div className="flex space-x-0.5">
                    <InputField label="pde" name={`items.${index}.armor`} htmlType="number" center styles={'w-1/3'} regex={/^[0-9]\d*$/} />
                    <InputField label="nb. de km" name={`items.${index}.kilometers`} styles={'w-2/3'}/>
                </div>
                <InputField label="prix" name={`items.${index}.price`} />
                <InputField label="poids" name={`items.${index}.weight`} />
                <InputField label="Type minerai" name={`items.${index}.matType`} />
                <InputField label="qté minerai" name={`items.${index}.matQty`} />
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
        resistance: PropTypes.number.isRequired, 
        dmg: PropTypes.string.isRequired,
        armor: PropTypes.number.isRequired,
        reserve: PropTypes.string.isRequired, 
        reloadPrice: PropTypes.string.isRequired, 
        kilometers: PropTypes.string.isRequired,
        quality: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired, 
        weight: PropTypes.string.isRequired,
        matType: PropTypes.string.isRequired, 
        matQty: PropTypes.string.isRequired,
        bearer: PropTypes.number.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    deleteMode: PropTypes.bool.isRequired,
};
