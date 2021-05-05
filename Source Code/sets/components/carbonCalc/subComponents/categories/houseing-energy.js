import CategoryManager from './categoryManager'
import {GiHouse} from 'react-icons/gi';

export default function HouseEnergyDisplay(props){
    return (
        <CategoryManager
        icon = {<GiHouse size = {80}/>}
        iconColor = "text-blue-900"
        header = "Housing"
        previous = {false}
        next = {true}
        nextCategory = {props.nextCategory}
        nextText = "Food"
        >
            {props.children}
        </CategoryManager>
    )    
}