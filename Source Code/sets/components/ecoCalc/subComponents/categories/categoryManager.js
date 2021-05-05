import { useState } from 'react'
import 'tailwindcss/tailwind.css'

export default function CategoryManager(props) {
    const PreviousButton = () => {
        if (!props.previous) {
            return null;
        }
        return (
            <button onClick={props.previousCategory}
                className="text-xl text-white bg-green-400 px-8 py-2 rounded-sm ml-48 border-transparent
                transition duration-200 ease-in-out
                hover:bg-green-500 focus:bg-green-600 focus:outline-none">
                {props.previousText}
            </button>
        )
    }

    const NextButton = () => {
        if (!props.next) {
            return null;
        }
        return (
                <button onClick={props.nextCategory}
                    className="text-xl text-white bg-green-400 px-8 py-2 rounded-sm mr-48 ml-auto border-transparent
                    transition duration-200 ease-in-out
                    hover:bg-green-500 focus:bg-green-600 focus:outline-none">
                    {props.nextText}
                </button>
        )
    }


    const PageButtons = (
        <div className="w-full flex items-center mt-4">
            <PreviousButton />
            <NextButton />
        </div>
    )


    return (
        <div className="flex flex-col ml-auto mr-auto my-8">
            <div className="flex ml-auto mr-auto w-8/12 items-center">
                <div className={props.iconColor}>
                    {props.icon}
                </div>
                <h1 className = "ml-10">
                    {props.header}
                </h1>
            </div>
            <hr className="w-8/12 border-0 border-b-2 border-green-400 ml-auto mr-auto mb-4"></hr>
            {props.children}      
            <br></br>
            {PageButtons}
        </div>
    )
}