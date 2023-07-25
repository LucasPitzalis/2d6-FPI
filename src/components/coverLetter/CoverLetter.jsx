import { useSelector } from "react-redux";
import SheetField from "../fields/SheetField";
import SectionTitle from "../SectionTitle";
import LetterField from "./LetterField";

export default function CoverLetter() {
    const { name } = useSelector((state) => state.letter)

    return (
        <>
            <SectionTitle title="lettre de motivation" />
            <SheetField vertical styles={'!items-start p-2 mt-2 text-base'}>
                <p className="mb-2">Madame, Monsieur,</p>
                <LetterField text="Je m'appelle" name="name" />
                <LetterField text="et je vis dans la zone" name="area" />
                <LetterField text="J'appartiens à l'ordre" name="order" />
                <LetterField text="Officiellement, je pense que cet ordre est" name="publicOpinion"/>
                <LetterField text="alors qu'au fond je pense" name="secretOpinion" />
                <LetterField text="Ma religion est" name="religion" />
                <LetterField text="Mon statut familial est" name="familyStatus" />
                <LetterField text="Je viens d'une famille" name="familyBackground" />
                <LetterField text="et je me suis élevé jusqu'à" name="currentStatus" />
                <LetterField text="Mon objectif de vie est" name="lifeGoal" />
                <LetterField text="Ma plus belle réussite est" name="achievement" />
                <LetterField text="Mon pire échec est" name="failure" />
                <LetterField text="Mon plus grand talent est" name="talent" />
                <LetterField text="Ma plus grande faiblesse est" name="weakness" />
                <p className="mt-2">Signé : <span className="italic font-bold">{name}</span></p>
            </SheetField>
        </>
    );
}
