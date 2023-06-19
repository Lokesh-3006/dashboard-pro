import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel, } from 'victory';
import { Stack } from 'react-bootstrap';
import { ChevronUp } from 'react-bootstrap-icons';



const Graph = (props) => {
  const data1 = [
    { quarter: 1, earnings: 300000 },
    { quarter: 2, earnings: 800000 },
  ];
  const rupee = "\u20B9"

  return (<Stack
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Stack style={{ display: 'flex', flexDirection: 'row', color: 'whitesmoke', justifyContent: 'space-between', flex: 1, }}>
      <Stack style={{ fontSize: 8, marginTop: 10 }}>
        Target VS <br />
        Actual(Oct'22)
      </Stack>
      <Stack style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#094db1', borderRadius: 10 }}>
        <ChevronUp size={10} color='green' />
        <p style={{ margin: 0, fontSize: 8 }}>50%</p>
      </Stack>
    </Stack>
    <Stack style={{ flex: 2 }}>
      <VictoryChart
        domainPadding={{ x: [90, 100], y: [-30, 50] }}
        style={{
          parent: {
            color: 'white',
            stroke: 'white'
          },
        }}
        animate={{
          duration: 1000,
          onLoad: { duration: 1000 }
        }}
      >
        <VictoryAxis
          padding={20}
          tickValues={[1, 2]}
          tickFormat={['Target', 'Actual']}
          style={{
            axis: {
              stroke: 'white'
            },
            axisEnd: {
              stroke: 'white'
            },
            tickLabels: {
              fontSize: 15,
              stroke: 'white'
            }
          }}
        />
        <VictoryAxis
          padding={20}
          dependentAxis
          theme={VictoryTheme.material}
          style={{
            axis: {
              stroke: 'white',
            },
            tickLabels: {
              fontSize: 15,
              stroke: 'white'
            },
            ticks: { stroke: "white", size: 20 }
          }}
          tickFormat={(x) => (`${x / 100000}L`)}
        />
        <VictoryBar
          style={{
            data: {
              fill: ({ datum }) => datum.quarter === 1 ? '#34ebc3' : '#e7e319',
            },
          }}
          labels={({ datum }) => {
            return `${rupee} ${datum.earnings / 100000}L`
          }}
          labelComponent={<VictoryLabel dy={40}
            style={[
              { fill: "black", fontSize: 22 },
            ]} />}
          barWidth={90}
          data={data1}
          x='quarter'
          y='earnings'
        />
      </VictoryChart>
    </Stack>
  </Stack >)
}

export default Graph