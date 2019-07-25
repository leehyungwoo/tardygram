import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import { Card, CardBody } from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1
} from "../../variables/charts";

class Charts extends React.Component {
  componentWillMount() {
   
    if (window.Chart) {
    
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Card className="bg-default">
          <CardBody>
            <div className="chart">
              {/* Chart wrapper */}
              <Line
                data={chartExample1.data1}
                options={chartExample1.options}
                getDatasetAtEvent={e => console.log(e)}
              />
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Charts;