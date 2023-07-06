import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import LockedInput from '../fields/LockedInput';

export default function ContactList({ type }) {
    const headerStyles = 'bg-black rounded font-bold text-white w-1/4 text-center text-base truncate p-1';
    const list = useSelector((state) => state.contacts.list).filter((contact) => contact.type === type);

    return (
        <div className="flex flex-col space-y-1">
            <div className="flex w-full space-x-1">
                <span className={headerStyles}>NOM</span>
                <span className={headerStyles}>FONCTION</span>
                <span className={headerStyles}>APTITUDES</span>
                <span className={headerStyles}>CONDITIONS</span>
            </div>
            <div className="flex flex-col space-y-1">
                {list.map((contact) => {
                    return (
                        <div className="flex space-x-1" key={`contact${contact.id}`}>
                            {
                                Object.keys(contact)
                                    .filter((key) => key !== 'id' && key !== 'type')
                                    .map((key) => <LockedInput key={key} name={`contacts.list.${contact.id}.${key}`} styles={'w-1/4'} />)
                            }
                        </div>
                )})}
            </div>
        </div>
    );
}

ContactList.propTypes = {
    type: PropTypes.string.isRequired,
};