import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import { editField } from "../../actions/app";
import FieldLabel from "../fields/FieldLabel";
import SheetField from "../fields/SheetField";

export default function WantedIndex() {
    const { wantedIndex } = useSelector((state) => state.character);
    const dispatch = useDispatch();

    const changeRating = (rating) => {
        const newRating = rating === wantedIndex ? 0 : rating
        dispatch(editField({name: 'character.wantedIndex', value: newRating}))
    }

    return (
        <SheetField styles="w-2/3" vertical>
            <FieldLabel label="indice de recherche" name="character.wantedIndex" vertical />
            <div className="flex flex-1 justify-center items-center">
                <StarRatings
                    rating={wantedIndex}
                    changeRating={changeRating}
                    numberOfStars={7}
                    starDimension={"18px"}
                    starSpacing={"5px"}
                    name="character.wantedIndex"
                    starRatedColor="black"
                />
            </div>
        </SheetField>
    );
}
