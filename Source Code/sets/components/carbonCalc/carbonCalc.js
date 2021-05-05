import React, { useState, useRef, useEffect, useCallback } from 'react'
import 'tailwindcss/tailwind.css'
import ItemDisplay from './subComponents/itemsDisplay/ItemDisplay'
import Items from './subComponents/itemInfo'
import ResultDisplay from './subComponents/resultDisplay'
import FoodDisplay from './subComponents/categories/food'
import HouseEnergyDisplay from './subComponents/categories/houseing-energy'
import TransitDisplay from './subComponents/categories/transit'
import GoodsDisplay from './subComponents/categories/goods'
import ServicesDisplay from './subComponents/categories/services'
import WasteDisplay from './subComponents/categories/waste'
import CarbonCalculation from '../../../CarbonCalculation/CarbonCalculator'
import QuickNavigator from './subComponents/navigator'

let items = Items;
const calculator = new CarbonCalculation(1) 
let apiObject = {};

const areEqual = (prevProps, nextProps) => {
    if (prevProps.category === nextProps.category){
        return true;
    } else {
        return false;
    }
};

const CarbonItemList = React.memo((props)=>{
    /**
     * Display management
     */
     const carbonItemList = {
        "food": [],
        "housing-energy": [],
        "transportation": [],
        "goods": [],
        "services": [],
        "waste": [],
    };

    items.forEach((item) => {
        carbonItemList[item.category].push(
            <ItemDisplay
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                measurement={item.measurement}
                value={item.value}
                category = {item.category}
                changeValue={props.changeValue}
            />
        )
    });

    if (props.category === "housing-energy"){
        return carbonItemList["housing-energy"];
    }

    if (props.category === "food"){
        return carbonItemList["food"];
    }
    
    
    if (props.category === "transportation"){
        return carbonItemList["transportation"]
    }

    if (props.category === "goods"){
        return carbonItemList["goods"];
    }

    if (props.category === "services"){
        return carbonItemList["services"];
    }

    if (props.category === "waste"){
        return carbonItemList["waste"];
    }
}, areEqual)

export default function CarbonCalc() {

    // item to scroll to once user clicks next category
    const pageStartRef = useRef(null);

    /**
     * Category management
     */
    const categories = ["housing-energy", "food", "transportation", "goods", "services", "waste", "result"];
    const [category, setCategory] = useState(0);

    function nextCategory() {
        if (category < 6) {
            setCategory(category + 1);
        }
    }

    function previousCategory() {
        if (category > 0) {
            setCategory(category - 1);
        }
    }

    function specificCategory(cat_id){
        if (0<=cat_id && cat_id <=5){
            setCategory(cat_id)
        }
    }

    /**
     * Result management
     */
    const [sum, setSum] = useState(0);
    const [categoryValues, setCategoryValues] = useState([0,0,0,0,0,0]);

    items.forEach(item => {
        apiObject[item.name] = item.value;
    });

    function updateResult() {
        items.forEach(item => {
            apiObject[item.name] = item.value;
        });
        setSum(Math.round(calculator.findTotal()))

        setCategoryValues([updateHouseEnergy(), updateFood(), updateTransportation(),
        updateGoods(), updateServices(), updateWaste()])

        setCategory(category + 1)
    }

    const updateGenericCategory = useCallback((category) =>{
        if (category === "food"){
            return updateFood();
        }
        else if (category === "housing-energy"){
            return updateHouseEnergy();
        }
        else if (category === "transportation"){
            return updateTransportation();
        }
        else if (category === "goods"){
            return updateGoods();
        }
        else if (category === "services"){
            return updateServices();
        }
        else if (category === "waste"){
            return updateWaste();
        }
    })

    function updateHouseEnergy(){
        items.forEach(item => {
            apiObject[item.name] = item.value;
        }); 

        return (Math.round(calculator.findTotalOtherHomeEnergy(apiObject) + 
        calculator.findTotalElec(apiObject["Electricity"])));
    }

    function updateFood(){
        items.forEach(item => {
            apiObject[item.name] = item.value;
        });  

        return (calculator.findTotalFood(apiObject));
    }

    function updateTransportation(){
        items.forEach(item => {
            apiObject[item.name] = item.value;
        });   
        return (calculator.findTotalTravel(apiObject));
    }

    function updateGoods(){
        items.forEach(item => {
            apiObject[item.name] = item.value;
        });  

        return (calculator.findTotalConsumerGoods(apiObject));
    }

    function updateServices(){
        items.forEach(item => {
            apiObject[item.name] = item.value;
        });  

        return (calculator.findTotalServices(apiObject));
    }
    
    function updateWaste(){
        items.forEach(item => {
            apiObject[item.name] = item.value;
        });  

        return (calculator.findTotalWaste(apiObject));
    }

    /**
     * In-memory item management
     */

    const changeValue = useCallback((id, category, val) => {
        items[id - 1].value = val;
        updateGenericCategory(category)
    })

    const Content = () => {
        if (categories[category] === "housing-energy") {
            return (
                <HouseEnergyDisplay
                    nextCategory={nextCategory}
                    >
                        <CarbonItemList changeValue = {changeValue} category = "housing-energy"/>
                </HouseEnergyDisplay>
            )
        }
        else if (categories[category] === "food") {
            return (
                <FoodDisplay
                    previousCategory={previousCategory}
                    nextCategory={nextCategory}
                    >
                    <CarbonItemList changeValue = {changeValue} category = "food"/>
                </FoodDisplay>
            )
        }
        else if (categories[category] === "transportation") {
            return (
                <TransitDisplay
                    previousCategory={previousCategory}
                    nextCategory={nextCategory}
                    >
                        <CarbonItemList changeValue = {changeValue} category = "transportation"/>
                </TransitDisplay>
            )
        }
        else if (categories[category] === "goods") {
            return (
                <GoodsDisplay
                    previousCategory={previousCategory}
                    nextCategory={nextCategory}
                    >
                        <CarbonItemList changeValue = {changeValue} category = "goods"/>
                </GoodsDisplay>
            )
        }
        else if (categories[category] === "services") {
            return (
                <ServicesDisplay
                    previousCategory={previousCategory}
                    nextCategory={nextCategory}
                    >
                        <CarbonItemList changeValue = {changeValue} category = "services"/>
                </ServicesDisplay>
            )
        }
        else if (categories[category] === "waste") {
            return (
                <WasteDisplay
                    previousCategory={previousCategory}
                    nextCategory={updateResult}>
                        <CarbonItemList changeValue = {changeValue} category = "waste"/>
                </WasteDisplay>
            )
        }
        else { // should be the result
            return (
                <ResultDisplay
                    value={sum}
                    categoryValues = {categoryValues}
                    previousCategory={previousCategory} />
            )
        }
    }

    // scroll to top when change content
    useEffect(() => {
        pageStartRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }, [category]);

    return (
        <div>
            <div ref={pageStartRef}></div>
            <div>
            {category === 6 ? null : <QuickNavigator changeCategory = {specificCategory}/>}
            <Content className = "min-h-100vh"/>
            </div>
        </div>
    )
}