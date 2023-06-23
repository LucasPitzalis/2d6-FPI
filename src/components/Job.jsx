import SheetField from "./SheetField";

export default function Job() {
    return (
        <div className="flex space-x-0.5">
            <SheetField label="métier 1" reducer="character" name="job" styles="w-2/3" />
            <SheetField label="diff" reducer="character" name="difficulty" styles="w-1/3" />
        </div>
    );
}
