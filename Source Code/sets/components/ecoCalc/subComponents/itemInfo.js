import 'react';
import {GiFruiting, GiSlicedBread, GiNoodles, GiCorn, GiCoffeeBeans, GiMilkCarton,
    GiIceCreamCone, GiFriedEggs, GiPig, GiChickenOven, GiCow, GiFishCooked, GiPowderBag, GiButter,
    GiBeerBottle, GiCoffeeMug, GiFlowers, GiHouse, GiCoalWagon, GiAirplaneArrival,
    GiCottonFlower, GiWool, GiGlowingHands, GiWoodenChair, GiEmptyMetalBucket, GiPapers,
    GiCarWheel,GiMetalPlate, GiLeatherBoot, GiGlassShot, GiCigarette, GiVacuumCleaner, GiMailbox, 
    GiPaperBomb,GiMetalDisc,GiCheeseWedge, GiWoodBeam, GiWoodenFence, GiElectric, GiKitchenKnives,
    GiMedicines, GiBeachBucket} from 'react-icons/gi'
import {FaBlender, FaBeer, FaWineBottle, FaBusAlt, FaCar, FaTaxi, FaMotorcycle, FaPhotoVideo, FaHotel, 
    FaTrash, FaPhone, FaMusic, FaBookReader} from 'react-icons/fa'
import {IoMdTrain, IoMdRestaurant} from 'react-icons/io'
import {WiSmoke} from 'react-icons/wi'
import {MdLocalLaundryService, MdComputer} from 'react-icons/md'

// Holds the data of every item to consider, and the values to calculate their output in fossil, cropland, ...
// Even has the icon
class CarbonItemsData {
    constructor(id, category, name, icon, measurement, fossilConversion, croplandConversion, pastureConversion,
        forestConversion, builtUpLandConversion, fisheriesConversion, outsideFactor){
            this.id = id;
            this.category = category;
            this.name = name;
            this.icon = icon;
            this.measurement = measurement;
            this.fossilConversion = fossilConversion;
            this.croplandConversion = croplandConversion;
            this.pastureConversion = pastureConversion;
            this.forestConversion = forestConversion;
            this.builtUpLandConversion = builtUpLandConversion;
            this.fisheriesConversion = fisheriesConversion;
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
    new CarbonItemsData(1, "food", "Veggies, potatoes, fruit", <GiFruiting size = {40}/> ,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(2, "food", "Bread and bakery products",<GiSlicedBread size = {40}/> ,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(3, "food", "Flour, rice, noodles, cereal products", <GiNoodles size = {40}/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(4, "food", "Maize", <GiCorn size = {40}/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(5, "food", "Beans and other dried pulses", <GiCoffeeBeans size = {40}/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(6, "food", "Milk, cream, yogurt, sour cream", <GiMilkCarton size = {40}/>, "liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(7, "food", "Ice cream, other frozen dairy", <GiIceCreamCone size = {40}/>, "liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(8, "food", "Cheese, butter", <GiCheeseWedge size = {40}/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(9, "food", "Eggs",<GiFriedEggs size = {40}/>, "number", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(10, "food", "Pork", <GiPig size = {40}/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(11, "food", "Chicken, turkey", <GiChickenOven size = {40}/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(12, "food", "Beef", <GiCow size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(13, "food", "Fish", <GiFishCooked size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(14, "food", "Sugar", <GiPowderBag size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(15, "food", "Vegetable oil (seed or olive oil)", <GiBeerBottle size = {40}/>, "liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(16, "food", "Margarine",<GiButter size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(17, "food", "Coffee and tea", <GiCoffeeMug size = {40}/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(18, "food", "Juice and wine", <FaBlender size = {40}/>, "liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(19, "food", "Beer", <FaBeer size = {40}/>, "liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(20, "food", "Garden", <GiFlowers size = {40}/>, "square meters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(21, "food", "Eating out", <IoMdRestaurant size = {40}/>,"VND", 1, 1, 1, 1, 1, 1, 1),

    new CarbonItemsData(22, "housing", "House or Apartment", <GiHouse size = {40}/> ,"square meters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsExtraInput(23, 22, "input", "housing", "age of residence", 1),
    new CarbonItemsData(24, "housing", "Construction wood", <GiWoodBeam size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(25, "housing", "Yard", <GiWoodenFence size = {40}/> , "square meters", 1, 1, 1, 1, 1, 1, 1),

    new CarbonItemsData(26, "energy", "Electricity", <GiElectric size = {40}/> ,"kWh", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(27, "energy", "Natural gas", <WiSmoke size = {40}/>,"therms", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(28, "energy", "Firewood", <GiWoodBeam size = {40}/>,"liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(29, "energy", "Fuel oil, kerosene", <FaWineBottle size = {40}/>,"liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(30, "energy", "Coal", <GiCoalWagon size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),

    new CarbonItemsData(31, "transit", "Bus", <FaBusAlt size = {40}/>,"km", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(32, "transit", "Train", <IoMdTrain size = {40}/>,"km", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(33, "transit", "Car", <FaCar size = {40}/>, "km", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(34, "transit", "Taxi/ Grab/ others", <FaTaxi size = {40}/>, "km", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(35, "transit", "Motorcycle", <FaMotorcycle size = {40}/>, "km", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(36, "transit", "Airplane", <GiAirplaneArrival size = {40}/>, "km", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsExtraTypes(37, 36, "typing", "transit", "airplane type", 
    [{name: "economy", value: 1}, {name:"business", value:2}, {name: "first-class", value: 3}]),
    

    new CarbonItemsData(38, "goods", "Cotton", <GiCottonFlower size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(39, "goods", "Wool", <GiWool size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(40, "goods", "Synthetic", <GiGlowingHands size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(41, "goods", "Furniture (wooden)",<GiWoodenChair size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(42, "goods", "Furniture (plastic/ metal)", <GiEmptyMetalBucket size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(43, "goods", "Major appliances", <MdLocalLaundryService size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(44, "goods", "Electronic equipment", <MdComputer size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(45, "goods", "Small appliances", <GiKitchenKnives size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(46, "goods", "Durable paper products", <GiPapers size = {40}/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(47, "goods", "Car parts for repair", <GiCarWheel size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(48, "goods", "Metal items", <GiMetalPlate size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(49, "goods", "Leather", <GiLeatherBoot size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(50, "goods", "Plastic products and photos", <FaPhotoVideo size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(51, "goods", "Porcelain, glass", <GiGlassShot size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(52, "goods", "Medicine", <GiMedicines size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(53, "goods", "Hygiene products, cleaning stuff", <GiVacuumCleaner size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(54, "goods", "Cigarettes, tobacco products", <GiCigarette size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),


    new CarbonItemsData(55, "services", "International postal services",<GiMailbox size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(56, "services", "Domestic local services", <GiMailbox size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(57, "services", "Hotels, motels", <FaHotel size = {40}/>, "VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(58, "services", "Water, sewer, garbage service",<FaTrash size = {40}/>, "VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(59, "services", "Dry cleaning and laundry service", <MdLocalLaundryService size = {40}/>, "VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(60, "services", "Telephone", <FaPhone size = {40}/>, "VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(61, "services", "Medical insurance services", <GiMedicines size = {40}/>,"VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(62, "services", "Household insurance", <GiHouse size = {40}/>, "VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(63, "services", "Entertainment", <FaMusic size = {40}/>, "VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(64, "services", "Education", <FaBookReader size = {40}/>, "VND", 1, 1, 1, 1, 1, 1, 1),

    new CarbonItemsData(65, "waste", "Paper and household waste",<GiPaperBomb size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(66, "waste", "Aluminum waste", <GiMetalDisc size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(67, "waste", "Other metals", <GiMetalPlate size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(68, "waste", "Glass", <GiGlassShot size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(69, "waste", "Plastics",<GiBeachBucket size = {40}/>, "kg", 1, 1, 1, 1, 1, 1, 1),
]

export default Items;