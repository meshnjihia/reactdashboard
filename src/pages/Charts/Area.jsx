import React from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from '@syncfusion/ej2-react-charts';
import {ChartsHeader} from '../../components'
import {areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis} from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {

  const{currentMode} = useStateContext();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <ChartsHeader
        category="Area"
        title="Inflation Rate in Percentage"
      />
    <ChartComponent
    id='area'
    height='420px'
    primaryXAxis={areaPrimaryXAxis}
    primaryYAxis={areaPrimaryYAxis}
    chartArea={{border: {width: 0}}}
    tooltip={{ enable: true}}
    background={currentMode === 'Dark' ? '#33373e' : '#fff'}
    >
      <Inject
      services={[
        SplineAreaSeries,
        DateTime,
        Legend
      ]}
      />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => <SeriesDirective
          key={index}
          {...item}
        />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Area