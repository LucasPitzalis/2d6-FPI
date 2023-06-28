import { useSelector } from "react-redux";

export default function EditAbilities() {
    const { abilities } = useSelector((state) => state.character);

    return (
        <form>
            {Object.keys(abilities).map((ability) => {
                console.log([ability])
            })}
        </form>
    );
}
