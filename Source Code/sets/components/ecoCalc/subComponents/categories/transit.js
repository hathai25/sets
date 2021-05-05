import CategoryManager from './categoryManager'
import {GiBus} from 'react-icons/gi';

export default function TransitDisplay(props){
    return (
        <CategoryManager
        icon = {<GiBus size = {80}/>}
        iconColor = "text-red-400"
        header = "Transit Info"
        previous = {true}
        previousCategory = {props.previousCategory}
        previousText = "Energy Consumption"
        next = {true}
        nextCategory = {props.nextCategory}
        nextText = "Goods"
        >
            {props.children}
        </CategoryManager>
    )    
}