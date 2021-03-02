import React from 'react';
import { Chart as _Chart } from 'react-charts';

export default function Chart({ type, data, width, height }) {
  const _data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: data
      }
    ]
  )

  const series = React.useMemo(
    () => ({
      type: type
    })
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: false }
    ]
  )

  return (
    <div
      style={{
        width: width ?? '400px',
        height: height ?? '300px'
      }}
    >
      <_Chart data={_data} axes={axes} series={series} />
    </div>
  )
}