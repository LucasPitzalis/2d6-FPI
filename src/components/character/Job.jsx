import InputField from "../fields/InputField";

export default function Job() {
    return (
        <>
            <div className="flex space-x-0.5">
                <InputField label="métier 1" name="character.job1" styles="w-2/3" labelStyles="w-16 xxs:w-20"/>
                <InputField htmlType="number" label="diff" name="character.difficulty1" styles="w-1/3" regex={/^\d{0,2}$/} center />
            </div>
            <div className="flex space-x-0.5">
                <InputField label="métier 2" name="character.job2" styles="w-2/3" labelStyles="w-16 xxs:w-20"/>
                <InputField htmlType="number" label="diff" name="character.difficulty2" styles="w-1/3" regex={/^\d{0,2}$/} center />
            </div>
        </>
    );
}
