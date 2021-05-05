import CategoryManager from './categoryManager'
import {GiMailbox} from 'react-icons/gi';

export default function ServicesDisplay(props){
    return (
        <CategoryManager
        icon = {<GiMailbox size = {80}/>}
        iconColor = "text-blue-900"
        header = "Services"
        previous = {true}
        previousCategory = {props.previousCategory}
        previousText = "Goods"
        next = {true}
        nextCategory = {props.nextCategory}
        nextText = "Waste"
        >
            {props.children}
        </CategoryManager>
    )    
}