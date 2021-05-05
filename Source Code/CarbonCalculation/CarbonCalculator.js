"use strict"
import CarbonFactors from "./CarbonFactors.json"

class CarbonCalculation{

    /**
     * constructor 
     * @param {Number} num_of_people 
     */
    constructor(num_of_people){
        //check params
        if(typeof num_of_people != 'number') throw "num_of_people has to be number";

        this.num_of_people = num_of_people;
        this.total_co2 = {
            totalElec: 0,
            "OtherHomeEnergyFactor": 0,
            "TravelFactor": 0,
            "FoodFactor": 0,
            "ConsumerGoodsFactor": 0,
            "ServicesFactor": 0,
            "WasteFactor": 0,
        };
        let eco_keys = Object.keys(CarbonFactors["ElectricitySource"]);
        
        // find total
        let elec_total = 0;
        eco_keys.forEach(function(ele){
            elec_total += CarbonFactors.ElectricitySource[ele];
        });

        // find  percentage
        this.elec_percentage = new Object();
        eco_keys.forEach((ele) => {
            this.elec_percentage[ele] = CarbonFactors.ElectricitySource[ele]/elec_total;
        });
    }

    // /**
    //  * find electricity share
    //  */
    // findElectricityShare(){
    //     let eco_keys = Object.keys(CarbonFactors["ElectricitySource"]);
        
    //     // find total
    //     let elec_total = 0;
    //     eco_keys.forEach(function(ele){
    //         elec_total += CarbonFactors.ElectricitySource[ele];
    //     });

    //     // find  percentage
    //     this.elec_percentage = new Object();
    //     eco_keys.forEach(function(ele){
    //         this.elec_percentage[ele] = CarbonFactors.ElectricitySource[ele]/total;
    //     });
    // }

    /**
     * generic finding total method
     * @param {Object} value_obj 
     * @param {String} subsection 
     */
    findGenericTotal(value_obj, subsection_factor){
        let result = 0;
        let value_keys = Object.keys(value_obj);
        value_keys.forEach(function(ele){
            if (CarbonFactors[subsection_factor][ele] != null){
                result += value_obj[ele]*CarbonFactors[subsection_factor][ele];
            }            
        });

        this.total_co2[subsection_factor] = result;
        return result;
    }

    /**
     * find total electricity
     * @param {Number} total_elec 
     */
    findTotalElec(total_elec){
        let result = 0;
        let elec_keys = Object.keys(this.elec_percentage);
        elec_keys.forEach(ele  =>{
            result += this.elec_percentage[ele]*total_elec*CarbonFactors.ElectricityFactor[ele];
        });
        
        this.total_co2.totalElec = result;
        return result;
    }

    /**
     * find total other home energy emission
     * @param {Object} value_obj 
     */
    findTotalOtherHomeEnergy(value_obj){
        return this.findGenericTotal(value_obj, "OtherHomeEnergyFactor");
    }

    /**
     * find total travel emission
     * @param {Object} value_obj 
     */
    findTotalTravel(value_obj){
        return this.findGenericTotal(value_obj, "TravelFactor");
    }

    /**
     * find total food emission
     * @param {Object} value_obj 
     */
    findTotalFood(value_obj){
        return this.findGenericTotal(value_obj, "FoodFactor");
    }

    /**
     * find total consumer goods emission
     * @param {Object} value_obj 
     */
    findTotalConsumerGoods(value_obj){
        return this.findGenericTotal(value_obj, "ConsumerGoodsFactor");
    }

    /**
     * find total services emission
     * @param {Object} value_obj 
     */
    findTotalServices(value_obj){
        return this.findGenericTotal(value_obj, "ServicesFactor");
    }

    /**
     * find total waste emission
     * @param {Object} value_obj 
     */
    findTotalWaste(value_obj){
        return this.findGenericTotal(value_obj, "WasteFactor");
    }

    /**
     * find total emission
     */
    findTotal(){
        let sum = 0;
        for (let [key, value] of Object.entries(this.total_co2)) {
            sum += value;
        }
        return sum;

    }
}

export default CarbonCalculation;