import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions
} from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

class TimeLineFeedbacks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return(console.log(this.state.data))
        // return (
        //     <View style={{paddingHorizontal: 5}}>
        //         <Text style={{fontSize: 20}}>Dados fictícios</Text>
        //         <LineChart
        //             data={{
        //                 labels: ["January", "February", "March", "April", "May", "June"],
        //                 datasets: [
        //                     {
        //                         data: [
        //                             this.props.data
        //                         ]
        //                     }
        //                 ]
        //             }}
        //             width={Dimensions.get("window").width - 10} // from react-native
        //             height={220}
        //             yAxisLabel={"$"}
        //             yAxisSuffix={"k"}
        //             chartConfig={{
        //                 backgroundColor: "#e26a00",
        //                 backgroundGradientFrom: "#C71585",
        //                 backgroundGradientTo: "#ffa726",
        //                 decimalPlaces: 2, // optional, defaults to 2dp
        //                 color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        //                 labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        //                 style: {
        //                     borderRadius: 16
        //                 },
        //                 propsForDots: {
        //                     r: "6",
        //                     strokeWidth: "2",
        //                     stroke: "#ffa726"
        //                 }
        //             }}
        //             bezier
        //             style={{
        //                 marginVertical: 8,
        //                 borderRadius: 16
        //             }}
        //         />
        //     </View>

        // );
    }
}

export default TimeLineFeedbacks