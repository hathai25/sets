import CategoryManager from './categoryManager'
import {GiHamburger} from 'react-icons/gi';

export default function FoodDisplay(props){
    return (
        <CategoryManager
        icon = {<GiHamburger size = {50}/>}
        iconColor = "text-yellow-900"
        header = "Food Consumption"
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