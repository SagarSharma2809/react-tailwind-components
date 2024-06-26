import { ButtonS, ButtonA } from "./components/Button.jsx";
import { BasicFormS } from "./components/BasicForm.jsx";
import { RegisterA } from "./components/Register.jsx";
import {ToggleBtnA} from "./components/ToggleBtn.jsx"
import { ToolTipA } from "./components/ToolTip.jsx";
export default function Container() {
    return (
        <div className="flex flex-col gap-7">
            {/* <ButtonS />
            <ButtonA /> */}
            {/* <BasicFormS /> */}
            {/* <RegisterA /> */}
            {/* <ToggleBtnA /> */}
            <ToolTipA />
        </div>
    );
}