import LockedInput from "../fields/LockedInput";
import StaticField from "../fields/StaticField";

export default function Skill({ skill, index }) {
    return (
        <div>
            <div>
                <div>
                    <LockedInput label="nom" name="skills.0.name" styles={'w-4/5'} />
                    <StaticField name="skills.0.bonus" value="skills.0"/>
                </div>
                <div>
                    
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}
