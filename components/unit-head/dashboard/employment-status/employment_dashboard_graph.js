// install (please make sure versions match peerDependencies)
// npm install --save @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
import React from 'react'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
  {
    "EmploymentStatus": "Full-time",
    "MCSU": 14,
    "MCSUColor": "hsl(88, 70%, 50%)",
    "Chem": 4,
    "ChemColor": "hsl(102, 70%, 50%)",
    "Physics/Geology": 117,
    "Physics/GeologyColor": "hsl(127, 70%, 50%)",
  },
  {
    "EmploymentStatus": "Part-time",
    "MCSU": 98,
    "MCSUColor": "hsl(109, 70%, 50%)",
    "Chem": 194,
    "ChemColor": "hsl(151, 70%, 50%)",
    "Physics/Geology": 17,
    "Physics/GeologyColor": "hsl(177, 70%, 50%)",
  },
  {
    "EmploymentStatus": "Temporary",
    "MCSU": 32,
    "hot dogColor": "hsl(67, 70%, 50%)",
    "Chem": 146,
    "ChemColor": "hsl(215, 70%, 50%)",
    "Physics/Geology": 170,
    "Physics/GeologyColor": "hsl(244, 70%, 50%)",
  },
  {
    "EmploymentStatus": "Tenured",
    "MCSU": 13,
    "hot dogColor": "hsl(234, 70%, 50%)",
    "Chem": 173,
    "ChemColor": "hsl(302, 70%, 50%)",
    "Physics/Geology": 197,
    "Physics/GeologyColor": "hsl(178, 70%, 50%)",
  }
]



class EmploymentDashboardGraph extends React.Component{
	render(){
		return(
		<div id = "graph" style = {{height: 700}}>
			<ResponsiveBar
        data={data}
        keys={[ 'MCSU', 'Chem', 'Physics/Geology' ]}
        indexBy='EmploymentStatus'
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Employment Type/Employment Status', //label
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Count', //label
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
	</div>
		)
	}
}

export default EmploymentDashboardGraph
