import 'tailwindcss/tailwind.css'
import { IoIosCloudOutline } from 'react-icons/io'

export default function ResultDisplay(props) {
    return (
        <div className="flex flex-col ml-auto mr-auto my-8 w-8/12">
            <div className="flex ml-auto mr-auto items-center">
                <IoIosCloudOutline size={80} />
                <h1 className="ml-10 text-4xl">
                    Results
                </h1>
            </div>
            <hr className="w-full border-0 border-b-2 border-green-400 ml-auto mr-auto mb-4"></hr>
            <p className="text-4xl mb-0">Your annual emissions</p>
            <div className="flex items-center -mt-4">
                <div className="shadow w-8/12 bg-green-400 rounded-lg py-2 px-16">
                    {/* <div className ="bg-teal text-xs leading-none py-1 text-center text-white"></div> */}
                </div>
                <p className="text-3xl ml-auto"><b>{props.value}</b> tons of CO2</p>
            </div>


            <div className="w-full flex items-center mt-6">
                <button onClick={props.previousCategory}
                    className="text-xl text-white bg-green-400 px-8 py-2 rounded-sm border-transparent
                transition duration-200 ease-in-out
                hover:bg-green-500 focus:bg-green-600 focus:outline-none">
                    Edit Numbers
                </button>
            </div>

        </div>

    )
}