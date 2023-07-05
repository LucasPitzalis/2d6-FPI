import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleModal } from "../../actions/app";
import IconButton from "../buttons/IconButton";

export default function Avatar() {
    const { avatar } = useSelector((state) => state.character)
    const dispatch = useDispatch();

    return (
        <div className="flex justify-center items-center flex-grow max-w-sm aspect-avatar border-2 border-black rounded group relative">
            {avatar === '' && <span>Pas d&apos;avatar</span>}
            {avatar !== '' && <img src={avatar} alt="avatar du personnage" />}
            <div className="absolute right-0 top-0">
                <IconButton hidden background="white" size={15} handler={() => dispatch(handleModal("avatar"))} icon="edit" />
            </div>
        </div>
    );
}
