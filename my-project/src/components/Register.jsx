import { ButtonA } from "./Button";


const RegisterS = () => {
    return (
        <div className="w-1/3 px-9 py-14 bg-white rounded-r-lg">
            <h1 className="text-3xl text-sky-600 font-bold mb-4">REGISTER FORM</h1>
            <form action="" className=" grid grid-cols-2 gap-2 text-gray-700">
                <div className="formItem mb-4">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" className="border-2 w-full  py-1" />
                </div>

                <div className="formItem">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="border-2 w-full py-1" />
                </div>

                <div className="formItem col-span-2 grid grid-rows-2  mb-4">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" className="border-2 w-full py-1" />
                </div>

                <div className="formItem  mb-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="border-2 w-full py-1" />
                </div>

                <div className="formItem">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" className="border-2 w-full py-1" />
                </div>

                <div className="formItem col-span-2">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms" className="ml-2">I agree to the <a href="#" className="text-sky-600 underline">Terms and Conditions</a></label>
                </div>


                <ButtonA textA="Register" />
            </form>

        </div>
    )
}

export { RegisterS };