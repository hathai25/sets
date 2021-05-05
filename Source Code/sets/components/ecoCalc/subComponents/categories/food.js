import CategoryManager from './categoryManager'
import {GiHamburger} from 'react-icons/gi';

export default function FoodDisplay(props){
    return (
        <CategoryManager
        icon = {<GiHamburger size = {80}/>}
        iconColor = "text-yellow-900"
        header = "Food Consumption"
        previous = {false}
        next = {true}
        nextCategory = {props.nextCategory}
        nextText = "Housing"
        >
            {props.children}
        </CategoryManager>
    )    
}