import 'tailwindcss/tailwind.css'

export default function ItemDisplay(props) {
    function handleChange(event) {
        props.changeValue(props.id, event.target.value);
        event.preventDefault();
    }

    return (
        <div className = "flex justify-center items-start">
            <div className = "w-1/12"></div>
            <div className="flex flex-row p-2 m-2 content-center items-center text-gray-800 w-5/12">
                <div className=" flex flex-row justify-self-start self-start">
                    <div className="text-gray-800">
                        {props.icon}
                    </div>
                    <p>{props.name} &nbsp; </p>
                </div>
            </div>
            <div className="flex flex-row justify-self-center w-1/12 self-center">
                    <input type="text" 
                    name={props.name} 
                    placeholder = {props.value===0?0:""}
                    defaultValue = {props.value===0?"":props.value}
                    onChange={handleChange}
                    className="outline-none border-0 border-b border-gray-500 text-lg mb-1 
                    placeholder-gray-400 w-20 text-center focus:border-green-500 focus:placeholder-transparent
                    "/>
                </div>
            <p className = "self-center w-2/12">{props.measurement}/ year</p>
        </div>
    )
}2