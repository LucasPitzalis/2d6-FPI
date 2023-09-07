import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { editField } from '../../actions/app';
import { qualityTable } from '../../data/quality';
import FieldLabel from '../fields/FieldLabel';
import InputField from '../fields/InputField';
import SheetField from '../fields/SheetField';

export default function PetItem({ itemIndex, item }) {
    const dispatch = useDispatch();

    const handleQualityChange = (e) => {
        if(e.target.value < item.bonusValue) dispatch(editField({name: `items.${itemIndex}.bonusValue`, value: Number(e.target.value)}));
        if(e.target.value < item.malusValue) dispatch(editField({name: `items.${itemIndex}.malusValue`, value: Number(e.target.value)}));
        dispatch(editField(e.target));
    }

    return (
        <div className="flex flex-col gap-0.5">
            <InputField vertical name={`items.${itemIndex}.name`} label={`objet ${itemIndex + 1}`} />
            <div className="flex gap-0.5">
                <InputField vertical label="pr" name={`items.${itemIndex}.resistance`} htmlType="number" center />
                <InputField vertical label="pde" name={`items.${itemIndex}.armor`} htmlType="number"  center />
                <InputField vertical label="dgt" name={`items.${itemIndex}.dmg`} center />
            </div>
            <SheetField>
                <FieldLabel name={`items.${itemIndex}.quality`} label="qualité" />
                <select name={`items.${itemIndex}.quality`} value={item.quality} onChange={handleQualityChange} className="grow">
                    {qualityTable.map((quality) => <option key={quality.value} value={quality.value}>{quality.nameFr}</option>)}
                </select>
            </SheetField>
        </div>
    );
}

PetItem.propTypes = {
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
    itemIndex: PropTypes.number.isRequired,
};