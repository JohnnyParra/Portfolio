import { useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";

import './BarChart.css'

export default function BarChart() {
  const [chartOptions, setChartOptions] = useState<AgChartOptions>({
    height: 700,
    data: [
      { skill: 'JavaScript', years: 2 },
      { skill: 'CSS', years: 2 },
      { skill: 'HTML', years: 2 },
      { skill: 'Github', years: 2 },
      { skill: 'React', years: 1.6 },
      { skill: 'Express', years: 1.3 },
      { skill: 'MySQL', years: 1 },
      { skill: 'C++', years: 0.5 },
      { skill: 'Python', years: 0.5 },
      { skill: 'Figma', years: 0.5 },
      { skill: 'Illustrator', years: 0.4 },
      { skill: 'UE5', years: 0.3},
      { skill: 'TypeScript', years: 0.2 },
      { skill: 'PostgreSQL', years: 0.2 },
      { skill: "Wix", years: 0.2},
      { skill: "Wordpress", years: 0.1},
      { skill: 'MongoDB', years: 0.1 },
      { skill: 'Qt', years: 0.1 }
    ],
    title: {
      text: "Years of Experience Since Graduation"
    },
    series: [
      {
        type: "bar",
        direction: "horizontal",
        xKey: "skill",
        yKey:  "years",
        cornerRadius: 5,
        listeners: {
          nodeClick: (event: any) => {
            console.log(event.datum);
          }
        }
      }
    ],
    axes: [
      {
        type: "category",
        position: "left",
      },
      {
        type: "number",
        position: "bottom",
        title: {
          enabled: true,
          text: "Years",
        },
      }
    ],
  })

  return (
    <div className="bar-chart-container">
      <div className="bar-chart">
        <AgChartsReact options={chartOptions} />
      </div>
    </div>
  )
}