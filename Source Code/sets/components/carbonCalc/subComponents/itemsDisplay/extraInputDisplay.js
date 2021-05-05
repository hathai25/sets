import 'tailwindcss/tailwind.css'

export default function ExtraInputDisplay(props){
    function handleChange(event) {
        const inp = event.target.value
        props.changeOutsideFactor(props.associatedID, inp);
        props.changeValue(props.id, inp)
        event.preventDefault();
    }

    return (
        <div className = "flex flex-row justify-center items-start mb-4">
            <div className = "p-2 m-2 w-6/12">
            </div>
            <div className = "w-1/12">
                    <input type="text" 
                    name={props.name} 
                    placeholder = {props.value===props.defValue? props.defValue:""}
                    defaultValue = {props.value===props.defValue? "":props.value}
                    onChange={handleChange}
                    className="outline-none border-0 border-b border-gray-500 text-lg mb-1 
                    placeholder-gray-400 w-20 text-center focus:border-green-500 focus:placeholder-transparent
                    "/>
            </div>
            <div className = "w-2/12 self-center"> {props.name}</div>
        </div>
    )
}