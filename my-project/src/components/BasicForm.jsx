import { RegisterS } from "./Register";
import { InformationS } from "./Information";

const BasicFormS = () => {
    return (
        <div className=" drop-shadow-xl flex">
            {/* To components here, 1.information 2. register form */}

            <InformationS />
            <RegisterS />
        </div>
    )
}

export { BasicFormS };