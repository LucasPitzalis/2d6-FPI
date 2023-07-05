import LockedInput from "./LockedInput";

export default function Job() {
    return (
        <>
            <div className="flex space-x-0.5">
                <LockedInput label="métier 1" name="job1" styles="w-2/3" />
                <LockedInput label="diff" name="difficulty1" styles="w-1/3" regex={/^\d{0,2}$/} center />
            </div>
            <div className="flex space-x-0.5">
                <LockedInput label="métier 2" name="job2" styles="w-2/3" />
                <LockedInput label="diff" name="difficulty2" styles="w-1/3" regex={/^\d{0,2}$/} center />
            </div>
        </>
    );
}
