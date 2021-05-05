import CategoryManager from './categoryManager'
import {FaTrashRestore} from 'react-icons/fa';

export default function WasteDisplay(props){
    return (
        <CategoryManager
        icon = {<FaTrashRestore size = {80}/>}
        iconColor = "text-green-700"
        header = "Waste"
        previous = {true}
        previousCategory = {props.previousCategory}
        previousText = "Services"
        next = {true}
        nextCategory = {props.nextCategory}
        nextText = "Calculate my footprint"
        >
            {props.children}
        </CategoryManager>
    )    
}