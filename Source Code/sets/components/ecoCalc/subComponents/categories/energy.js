import CategoryManager from './categoryManager'
import {BsFillLightningFill} from 'react-icons/bs';

export default function EnergyDisplay(props){
    return (
        <CategoryManager
        icon = {<BsFillLightningFill size = {80}/>}
        iconColor = "text-yellow-400"
        header = "Energy consumption"
        previous = {true}
        previousCategory = {props.previousCategory}
        previousText = "Housing"
        next = {true}
        nextCategory = {props.nextCategory}
        nextText = "Transit"
        >
            {props.children}
        </CategoryManager>
    )    
}