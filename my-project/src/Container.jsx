import { ButtonS, ButtonA } from "./components/Button.jsx";
import { BasicFormS } from "./components/BasicForm.jsx";

export default function Container() {
    return (
        <div className="m-5 flex flex-col gap-7">
            {/* <ButtonS />
            <ButtonA /> */}
            <BasicFormS />
        </div>
    );
}