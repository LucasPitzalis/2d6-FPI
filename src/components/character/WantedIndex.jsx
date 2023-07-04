import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import { editChar } from "../../actions/character";
import FieldLabel from "../FieldLabel";
import SheetField from "../SheetField";

export default function WantedIndex() {
    const { wantedIndex } = useSelector((state) => state.character);
    const dispatch = useDispatch();

    const changeRating = (rating) => {
        const newRating = rating === wantedIndex ? 0 : rating
        dispatch(editChar({name: 'wantedIndex', value: newRating}))
    }

    return (
        <SheetField styles="w-2/3" vertical>
            <FieldLabel label="indice de recherche" name="wantedIndex" />
            <div className="flex flex-1 justify-center items-center">
                <StarRatings
                    rating={wantedIndex}
                    changeRating={changeRating}
                    numberOfStars={7}
                    starDimension={"18px"}
                    starSpacing={"5px"}
                    name="wantedIndex"
                    starRatedColor="black"
                />
            </div>
        </SheetField>
    );
}
