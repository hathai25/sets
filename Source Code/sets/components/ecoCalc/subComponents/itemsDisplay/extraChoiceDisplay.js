import 'tailwindcss/tailwind.css'
import 'react';

export default function ExtraChoiceDisplay(props){
    const options = props.valueList;
    const selectOptionsDisplay = []
    options.forEach((item) => {
        selectOptionsDisplay.push(<option key = {item.value} value={item.value}>{item.name}</option>)
    })

    function handleChange(event) {
        props.changeOutsideFactor(props.associatedID, event.target.value);
        props.changeChoice(props.id, event.target.value);
        event.preventDefault();
    }

    return(
        <div className = "flex flex-row justify-center items-start mb-4">
            
            <div className = "p-2 m-2 w-6/12">
            </div>
            <div className = "w-1/12 self-center">
                <select name = {props.name} onChange = {handleChange} defaultValue = {props.calcValue}
                className = "w-24 outline-none border-0 border-gray-500 text-gray-600 text-lg mb-1 ">

                    {selectOptionsDisplay}
                </select>
            </div>
            <div className = "w-2/12 self-center ">{props.name}</div>
        </div>

        
    )
}