const NavigatorItem = (props) => {
    return (
        <button onClick = {()=>{props.changeCategory(props.id)}}
        className="px-2 py-1 text-2xl border-0 border-b border-green-300 bg-white text-green-500 mt-8 mb-4 
        border-opacity-0 transition duration-200 ease-in-out hover:border-opacity-100">
            {props.name}
        </button>
    )
}

const QuickNavigator = (props) => {
    return (
        <div className="flex w-8/12 justify-between ml-auto mr-auto my-8">
            <NavigatorItem name="Housing" changeCategory = {props.changeCategory} id = {0}/>
            <NavigatorItem name="Food" changeCategory = {props.changeCategory} id = {1}/>
            <NavigatorItem name="Transit" changeCategory = {props.changeCategory} id = {2}/>
            <NavigatorItem name="Goods" changeCategory = {props.changeCategory} id = {3}/>
            <NavigatorItem name="Services" changeCategory = {props.changeCategory} id = {4}/>
            <NavigatorItem name="Waste" changeCategory = {props.changeCategory} id = {5}/>
        </div>
    )
}

export default QuickNavigator