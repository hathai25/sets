import 'react';
import { FaBusAlt, FaCar, FaGasPump, FaMotorcycle, FaMusic, FaPhotoVideo, FaTaxi, FaWineBottle } from 'react-icons/fa';
import { GiAirplaneArrival, GiBeachBucket, GiBookPile, GiBroccoli, GiChemicalTank, GiCoalWagon, GiCottonFlower, GiElectric, GiEmptyMetalBucket, GiFriedEggs, GiFruiting, GiGrain, GiHouse, GiMailbox, GiMeat, GiMedicines, GiMilkCarton, GiPaperBomb, GiPlantsAndAnimals, GiStoneBlock, GiWaterRecycling, GiWoodBeam, GiWoodenChair } from 'react-icons/gi';
import { IoMdTrain } from 'react-icons/io';
import {MdLocalLaundryService, MdComputer} from 'react-icons/md'
import {WiSmoke} from 'react-icons/wi'
import {BsFillPeopleFill} from 'react-icons/bs'
// Holds the data of every item to consider, and the values to calculate their output in fossil, cropland, ...
// Even has the icon
class CarbonItemsData {
    constructor(id, category, name, icon, measurement, carbonFactor, outsideFactor){
            this.id = id;
            this.category = category;
            this.name = name;
            this.icon = icon;
            this.measurement = measurement;
            this.carbonFactor = carbonFactor;
            this.outsideFactor = outsideFactor;

            this.value = 0;
        }
}

// For certain items where a type is needed to generate the output (such as business vs first-class
// in airplanes), we add this to modify the "outside factor"
class CarbonItemsExtraTypes {
    constructor(id, associatedID, category, type, name, valueList){
        this.id = id;
        this.associatedID = associatedID;
        this.category = category;
        this.type = type;
        this.name = name;
        this.calcValue = valueList[0].value;
        this.valueList = valueList;
    }
}


// For certain items where an extra input is needed (such as "age of house"),
// we use this to modify the "outside factor" of the object with associated ID
class CarbonItemsExtraInput{
    constructor(id, associatedID, category, type, name, defaultValue){
        this.id = id;
        this.associatedID = associatedID;
        this.category = category;
        this.type = type;
        this.name = name;
        this.value = defaultValue;
        this.defaultValue = defaultValue;
    }
}

// export data to render in React 
const Items = [
    new CarbonItemsData(1, "housing-energy", "Number of people in your household", <BsFillPeopleFill size = {30}/>, "people"),
    new CarbonItemsData(2, "housing-energy", "Electricity", <GiElectric size = {30}/> ,"kWh/ year"),
    new CarbonItemsData(3, "housing-energy", "Gas (Heating)", <WiSmoke size = {30}/>,"kg/ year"),
    new CarbonItemsData(4, "housing-energy", "Oil (Kerosene)", <FaWineBottle size = {30}/>,"liters/ year"),
    new CarbonItemsData(5, "housing-energy", "Oil (Gasoil)", <FaGasPump size = {30}/>,"liters/ year"),
    new CarbonItemsData(6, "housing-energy", "Oil (HFO)", <FaGasPump size = {30}/>,"liters/ year"),
    new CarbonItemsData(7, "housing-energy", "Gas (Propane/butane)", <GiChemicalTank size = {30}/>,"liters/ year"),
    new CarbonItemsData(8, "housing-energy", "Coal", <GiCoalWagon size = {30}/>, "kg/ year"),
    new CarbonItemsData(9, "housing-energy", "Peat", <GiStoneBlock size = {30}/>, "kg/ year"),
    new CarbonItemsData(10, "housing-energy", "Wood", <GiWoodBeam size = {30}/>, "kg/ year"),

    new CarbonItemsData(11, "food", "Grains", <GiGrain size = {30}/> ,"kg/ year"),
    new CarbonItemsData(12, "food", "Vegetables",<GiBroccoli size = {30}/> ,"kg/ year"),
    new CarbonItemsData(13, "food", "Fruit", <GiFruiting size = {30}/>,"kg/ year"),
    new CarbonItemsData(14, "food", "Eggs", <GiFriedEggs size = {30}/>,"kg/ year"),
    new CarbonItemsData(15, "food", "Dairy (fresh milk, yogurt, cheese)", <GiMilkCarton size = {30}/>, "kg/ year"),
    new CarbonItemsData(16, "food", "Meat (beef, buffalo, pork, poultry)", <GiMeat size = {30}/>, "kg/ year"),



    new CarbonItemsData(17, "transportation", "Bus", <FaBusAlt size = {30}/>,"km/ year"),
    new CarbonItemsData(18, "transportation", "Train", <IoMdTrain size = {30}/>,"km/ year"),
    new CarbonItemsData(19, "transportation", "Car", <FaCar size = {30}/>, "km/ year"),
    new CarbonItemsData(20, "transportation", "Car (second person)", <FaTaxi size = {30}/>, "km/ year"),
    new CarbonItemsData(21, "transportation", "Motorcycle", <FaMotorcycle size = {30}/>, "km/ year"),
    new CarbonItemsData(22, "transportation", "Air travel", <GiAirplaneArrival size = {30}/>, "km/ year"),
    new CarbonItemsData(23, "transportation", "", null, "flights/ year"), 
    
    new CarbonItemsData(24, "goods", "Clothing, shoes, accessories", <GiCottonFlower size = {30}/>, "kg/ year"),
    new CarbonItemsData(25, "goods", "Furniture, wood",<GiWoodenChair size = {30}/>, "kg/ year"),
    new CarbonItemsData(26, "goods", "Books", <GiBookPile size = {30}/>, "kg/ year"),
    new CarbonItemsData(27, "goods", "E-waste", <MdComputer size = {30}/>, "kg/ year"),
    new CarbonItemsData(28, "goods", "Toys and other plastics", <FaPhotoVideo size = {30}/>, "kg/ year"),

    new CarbonItemsData(29, "services", "Healthcare", <GiMedicines size = {30}/>,"VND/ year"),
    new CarbonItemsData(30, "services", "Home repair and maintanence", <GiHouse size = {30}/>, "VND/ year"),
    new CarbonItemsData(31, "services", "Education and entertainment (beyond school)", <FaMusic size = {30}/>, "VND/ year"),
    new CarbonItemsData(32, "services", "Other services (legal, etc.)", <GiMailbox size = {30}/>, "VND/ year"),

    new CarbonItemsData(33, "waste", "Wastewater",<GiWaterRecycling size = {30}/>, "kg/ year"),
    new CarbonItemsData(34, "waste", "Organic waste (other than food)", <GiPlantsAndAnimals size = {30}/>, "kg/ year"),
    new CarbonItemsData(35, "waste", "Recycled paper, plastic, glass", <GiPaperBomb size = {30}/>, "kg/ year"),
    new CarbonItemsData(36, "waste", "Non-reclyled/recyclable waste", <GiBeachBucket size = {30}/>, "kg/ year"),
]
export default Items;