// LineChartComponent.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import MainBSToolTip from '../MainBS/MainBSToolTip';
import CustomizedLabel from '../MainBS/CustomizedLabel';
import '../styles/CustomScroll.css';

// 더미데이터
const data = [
  { name: '7/11', bloodsugar: 90, meal: '쌀밥 \n 갓김치' },
  { name: '7/12', bloodsugar: 125, meal: '쌀밥 \n 갓김치' },
  { name: '7/13', bloodsugar: 90, meal: '쌀밥 \n 갓김치' },
  { name: '7/14', bloodsugar: 125, meal: '쌀밥 \n 갓김치' },
  { name: '7/15', bloodsugar: 85, meal: '쌀밥 \n 갓김치' },
  { name: '7/16', bloodsugar: 130, meal: '쌀밥 \n 갓김치' },
  { name: '7/17', bloodsugar: 110, meal: '쌀밥 \n 갓김치' },
  { name: '7/11', bloodsugar: 100, meal: '쌀밥 \n 갓김치' },
  { name: '7/12', bloodsugar: 125, meal: '쌀밥 \n 갓김치' },
  { name: '7/13', bloodsugar: 90, meal: '쌀밥 \n 갓김치' },
  { name: '7/14', bloodsugar: 110, meal: '쌀밥 \n 갓김치' },
  { name: '7/15', bloodsugar: 85, meal: '쌀밥 \n 갓김치' },
  { name: '7/16', bloodsugar: 120, meal: '쌀밥 \n 갓김치' },
];

const MainBloodSugarChart = () => {
  // 데이터 중 최대 혈당량을 구함
  const dataMax = Math.max(...data.map(d => d.bloodsugar));
  const dataMin = Math.min(...data.map(d => d.bloodsugar));

  return (
    <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden' }} className="custom-scroll">
      <div style={{ width: '1000px', height: '275px' }}>
        <LineChart
          width={1000}
          height={275}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis dataKey="name" interval={0} tick={{ fontSize: 13 }} padding={{ left: 20, right: 20 }} />
          <YAxis domain={['dataMin-20', 'dataMax+5']} tickCount={6} allowDecimals={false} orientation="right" />
          {/* y축 인덱스의 최대/최소값은 혈당의 실제 최대/최소값-20 */}
          <Tooltip content={<MainBSToolTip />} />
          <ReferenceLine y={dataMax} stroke="red" strokeDasharray="3 10"></ReferenceLine>
          <ReferenceLine y={dataMin} stroke="#A0A0A0" strokeDasharray="3 10"></ReferenceLine>
          <Line
            type="linear"
            dataKey="bloodsugar"
            stroke="#414141"
            strokeWidth={2}
            dot={{ r: 3, fill: 'black' }}
            activeDot={{ r: 6, fill: '#3053f9', strokeWidth: 0 }}
            label={<CustomizedLabel dataMax={dataMax} />}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default MainBloodSugarChart;
