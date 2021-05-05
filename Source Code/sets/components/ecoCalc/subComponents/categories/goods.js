import CategoryManager from './categoryManager'
import {GiLeatherBoot} from 'react-icons/gi';

export default function GoodsDisplay(props){
    return (
        <CategoryManager
        icon = {<GiLeatherBoot size = {80}/>}
        iconColor = "text-yellow-900"
        header = "Goods"
        previous = {true}
        previousCategory = {props.previousCategory}
        previousText = "Transit Info"
        next = {true}
        nextCategory = {props.nextCategory}
        nextText = "Services"
        >
            {props.children}
        </CategoryManager>
    )    
}