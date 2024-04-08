import './MenuNavegacion.css'
import { useState } from "react";

const Checkbox = ({ checked}) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    return (
        <label>        
            <input name="Check" className={isChecked ? "checked" : ""} type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>
        </label>
    );
};
export default Checkbox;