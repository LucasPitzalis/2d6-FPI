import { useDispatch, useSelector } from "react-redux";
import InputField from "../fields/InputField";
import PropTypes from 'prop-types';
import SheetField from "../fields/SheetField";
import { editField } from "../../actions/app";
import DeletableItem from "../context/DeletableItem";
import FieldLabel from "../fields/FieldLabel";
import { qualityTable } from "../../data/quality";
import { deleteItem } from "../../actions/items";
import DropdownItem from "../context/DropdownItem";
import PetOption from "../pets/PetOption";

export default function Item({ item, index, deleteMode }) {
    const dispatch = useDispatch();
    const items  = useSelector((state) => state.items);
    const pets = useSelector((state) => state.pets);
    const { name } = useSelector((state) => state.character);

    const handleQualityChange = (e) => {
        if(e.target.value < item.bonusValue) dispatch(editField({name: `items.${index}.bonusValue`, value: Number(e.target.value)}));
        if(e.target.value < item.malusValue) dispatch(editField({name: `items.${index}.malusValue`, value: Number(e.target.value)}));
        dispatch(editField(e.target));
    }

    return (
        <DeletableItem 
            handler={() => dispatch(deleteItem(index))}
            deleteMode={deleteMode}
            styles="py-2 border-t border-gray-400"
        >
            <DropdownItem
                defaultOpen
                header={
                    <InputField placeHolder="Nom de l'objet..." name={`items.${index}.name`} styles="w-full" />
                }
            >
                <div className="flex flex-col sm:flex-row gap-y-0.5 gap-x-1">
                    <div className="flex flex-col justify-between space-y-0.5 w-full sm:w-3/5">
                        <InputField label="type" name={`items.${index}.type`} />
                        <div className="flex gap-0.5 flex-col xxs:flex-row">
                            <div className="flex gap-0.5">
                                <InputField label="pr" name={`items.${index}.resistance`} htmlType="number" center regex={/^[0-9]\d*$/} />
                                <InputField label="pde" name={`items.${index}.armor`} htmlType="number"  center regex={/^[0-9]\d*$/} />
                            </div>
                            <InputField label="dgt" name={`items.${index}.dmg`} styles="w-full" center />
                        </div>
                        <div className="flex gap-0.5">
                            <InputField multiline={3} label="bonus" name={`items.${index}.bonusDesc`} styles={'w-full'} />
                            <InputField prefix="+" htmlType="number" name={`items.${index}.bonusValue`} styles={'w-16'} regex={new RegExp(`^[0-${item.quality}]d*$`)} />
                        </div>
                        <div className="flex gap-0.5">
                            <InputField multiline={3} label="malus" name={`items.${index}.malusDesc`} styles={'w-full'} />
                            <InputField prefix="-" htmlType="number" name={`items.${index}.malusValue`} styles={'w-16'} regex={new RegExp(`^[0-${item.quality}]d*$`)} />
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
                                    <option value={-1}>{name.trim() === '' ? `Personnage` : name.trim()}</option>
                                    {pets.map((pet, petIndex) => <PetOption 
                                        key={petIndex} 
                                        name={pet.name} 
                                        index={petIndex} 
                                        isDisabled={items.filter((i) => i.bearer === petIndex).length >= 3} 
                                    />)}
                                </select>
                            </SheetField>
                        </div>
                    </div>
                    <div className="flex flex-col justify-evenly gap-0.5 w-full sm:w-2/5">
                        <div className="flex flex-col xs:flex-row sm:flex-col gap-0.5">
                            <InputField label="réservoir" name={`items.${index}.reserve`} />
                            <InputField label="prix rech." name={`items.${index}.reloadPrice`} />
                            <InputField label="nb. de km" name={`items.${index}.kilometers`} />
                        </div>
                        <div className="flex flex-col xs:flex-row sm:flex-col gap-0.5">
                            <InputField label="prix" name={`items.${index}.price`} />
                            <InputField label="poids" name={`items.${index}.weight`} />
                        </div>
                        <div className="flex flex-col xs:flex-row sm:flex-col gap-0.5">
                            <InputField label="Type minerai" name={`items.${index}.matType`} />
                            <InputField label="qté minerai" name={`items.${index}.matQty`} />
                        </div>
                    </div>
                </div>
            </DropdownItem>
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
