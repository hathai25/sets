import 'tailwindcss/tailwind.css'
import { IoIosCloudOutline } from 'react-icons/io'
import { PieChart } from 'react-minimal-pie-chart';

export default function ResultDisplay(props) {

    const ComparisonBars = (props) => {

        const userPercentage = props.userTotal / (props.worldAverage*1000);

        if (userPercentage > 1) {
            const worldPercentageString = Math.round(1 / userPercentage * 50) + "%";
            return (
                <div>
                    <p className="text-3xl mb-0">Your annual emissions</p>
                    <div className="flex items-center -mt-4">
                        <div className="shadow w-1/2 bg-green-400 rounded-lg py-2 px-16">
                        </div>
                        <p className="text-3xl ml-auto"><b>{(props.userTotal/1000).toFixed(2)}</b> tons of CO2</p>
                    </div>

                    <p className="text-xl mb-0">World average</p>
                    <div className="flex items-center -mt-4">
                        <div className="shadow bg-green-300 rounded-lg py-2 px-2"
                            style={{ width: worldPercentageString }}>
                            {/* <div className ="bg-teal text-xs leading-none py-1 text-center text-white"></div> */}
                        </div>
                        <p className="text-3xl ml-auto"><b>18.68</b> tonnes of CO2</p>
                    </div>
                </div>
            )
        }
        else {
            const userPercentageString = Math.round(userPercentage * 50) + "%";
            return (
                <div>
                    <p className="text-3xl mb-0">Your annual emissions</p>
                    <div className="flex items-center -mt-4">
                        <div className="shadow bg-green-400 rounded-lg py-2 px-2"
                            style={{ width: userPercentageString }}>
                            {/* <div className ="bg-teal text-xs leading-none py-1 text-center text-white"></div> */}
                        </div>
                        <p className="text-3xl ml-auto"><b>{props.userTotal.toFixed(2)}</b> tons of CO2</p>
                    </div>

                    <p className="text-2xl mb-0">World average</p>
                    <div className="flex items-center -mt-4">
                        <div className="shadow w-1/2 bg-green-400 rounded-lg py-2 px-16">
                            {/* <div className ="bg-teal text-xs leading-none py-1 text-center text-white"></div> */}
                        </div>
                        <p className="text-3xl ml-auto"><b>18.68</b> tonnes of CO2</p>
                    </div>
                </div>
            )
        }
    }


    const PieChartContent = (props) => {
        return (
            <div className = " w-10/12 ml-auto mr-auto">
            <h2 className = "ml-auto mr-auto -mb-24 text-center">Distribution of your emissions</h2>
            <PieChart
                label={({ dataEntry }) => {return (dataEntry.title + ": " + dataEntry.value.toFixed(2))}}
                labelPosition = {110}
                labelStyle={(index) => ({
                    fontSize: '2px',
                  })}
                radius = {25}
                animate
                data = {[
                {title: 'Housing', value: props.values[0], color: '#D1D5DB'},
                {title: 'Food', value: props.values[1], color: '#FBBF24'}, 
                {title: 'Transit', value: props.values[2], color: '#F9A8D4'},
                {title: 'Goods', value: props.values[3], color: '#93C5FD'},
                {title: 'Services', value: props.values[4], color: '#2563EB'},
                {title: 'Waste', value: props.values[5], color: '#34D399'},
            ]}
            />
            </div>
            
            // <div className = "w-1/3 ml-auto mr-auto">
            // <PieChart
            //     data={[
            //         { title: 'One', value: 10, color: '#E38627' },
            //         { title: 'Two', value: 15, color: '#C13C37' },
            //         { title: 'Three', value: 20, color: '#6A2135' },
            //     ]}
            // />
            // </div>
        )
    }

    return (
        <div className="flex flex-col ml-auto mr-auto my-8 mt-24 w-8/12">

            <div className="flex ml-auto mr-auto items-center">
                <IoIosCloudOutline size={80} />
                <h1 className="ml-10 text-4xl">
                    Results
                </h1>
            </div>

            <hr className="w-full border-0 border-b-2 border-green-400 ml-auto mr-auto mb-4"></hr>

            <ComparisonBars userTotal={props.value} worldAverage={18.68} />

            <PieChartContent values={props.categoryValues} />

            <div className="w-full flex items-center mt-6">
                <button onClick={props.previousCategory}
                    className="text-xl text-white bg-green-400 px-8 py-2 rounded-sm border-transparent
                transition duration-200 ease-in-out
                hover:bg-green-500 focus:bg-green-600 focus:outline-none">
                    Edit Numbers
                </button>
            </div>
        </div >

    )
}