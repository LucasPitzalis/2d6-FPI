import SheetField from "./CharField";

export default function Job() {
    return (
        <div className="flex space-x-0.5">
            <SheetField label="métier 1" name="job" styles="w-2/3" />
            <SheetField label="diff" name="difficulty" styles="w-1/3" />
        </div>
    );
}
