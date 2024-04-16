import { ButtonA } from "./Button";

const InformationS = () => {
    return (
        <div className="bg-sky-700 w-1/4  px-6 py-3 text-white text-sm">

            <h1 className="text-3xl font-bold mb-4">INFORMATION</h1>
            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut laudantium ullam adipisci, aliquid est magnam eligendi dolores necessitatibus. Dolorem totam quae veniam</p>

            <p className="mb-8"><span>For value:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veniam facere alias molestias </p>

            <button className="bg-white text-sky-700 py-3 px-2 font-bold hover:bg-sky-500 hover:text-white drop-shadow-lg ">Have An Account</button>

        </div>
    )
}

export { InformationS };