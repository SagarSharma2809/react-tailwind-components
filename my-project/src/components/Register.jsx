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
          <input
            type="password"
            id="password"
            className="border-2 w-full py-1"
          />
        </div>

        <div className="formItem">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="border-2 w-full py-1"
          />
        </div>

        <div className="formItem col-span-2">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="ml-2">
            I agree to the{" "}
            <a href="#" className="text-sky-600 underline">
              Terms and Conditions
            </a>
          </label>
        </div>

        <ButtonA textA="Register" />
      </form>
    </div>
  );
};

const RegisterA = () => {
  return (
    <>
      <div className="h-screen w-screen  bg-blue-300 flex justify-center ">
        <div className="flex  h-3/4 w-3/4  my-auto">
          {/* information div  */}
          <div className="flex flex-col w-1/2 h-full bg-blue-400">
            <h1 className="text-white font-bold mt-10 ml-5 text-2xl ">
              INFORMATION
            </h1>
            <p className=" text-white ml-5 mt-8 mr-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae totam magni, assumenda cupiditate quam id enim libero
              officiis laboriosam ullam unde, vel voluptatem earum suscipit?
              Blanditiis quisquam error soluta ipsam!
              <p className="mt-3 text-sm mr-2">
                {" "}
                <span className="font-bold text-base"> Lorem ipsum </span> dolor
                sit amet consectetur adipisicing elit. Nulla eius vel magni
                nesciunt eos, ipsa quam quis iste eum,{" "}
              </p>
            </p>
            <button className="w-1/2 mt-5 bg-white ml-5 py-2 px-4 text-sm rounded-sm hover:bg-blue-200 tracking-widest">
              Have an Account
            </button>
          </div>
          {/* form div  */}
          <div className="flex w-1/2 h-full flex-col  bg-white">
            <h1 className="text-blue-400 font-bold mt-10 ml-5 text-2xl ">
              REGISTER FORM
            </h1>
            <div className="flex ml-5 mr-2 mt-8">
              <div className="w-1/2 flex flex-col">
                <p className="font-bold text-gray-600">First Name</p>
                <input type="text" className="border-2 mr-1" />
              </div>
              <div className="w-1/2 flex flex-col">
                <p className="font-bold text-gray-600">Last Name</p>
                <input type="text" className="border-2 ml-1" />
              </div>
            </div>
            <div className="flex ml-5 mr-2 mt-4"> 
            <div className=" flex flex-col w-full">
                <p className="font-bold text-gray-600">Your Email</p>
                <input type="text" className="border-2  " />
              </div>
            </div>
            <div className="flex ml-5 mr-2 mt-5">
              <div className="w-1/2 flex flex-col">
                <p className="font-bold text-gray-600">Password</p>
                <input type="text" className="border-2 mr-1" />
              </div>
              <div className="w-1/2 flex flex-col">
                <p className="font-bold text-gray-600">Confirm Password</p>
                <input type="text" className="border-2 ml-1" />
              </div>
            </div>
            <div className="flex ml-5 mr-2 mt-10">
                <input type="checkbox" />
                <p className="text-gray-600 text-sm ml-1">I agree to <a href="" className="cursor-pointer text-blue-400 underline">Terms And Conditions</a></p>
            </div>
            <div className="flex ml-5 mr-2 mt-5">
                <button className="w-1/4 bg-blue-400 text-white p-2 font-bold hover:bg-blue-600">Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { RegisterS, RegisterA };
