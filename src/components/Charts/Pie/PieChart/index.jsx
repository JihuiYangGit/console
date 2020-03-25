/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default class Chart extends React.Component {
  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  static defaultProps = {
    width: 100,
    height: 100,
    dataKey: 'value',
  }

  render() {
    const { width, height, data, dataKey } = this.props

    return (
      <ResponsiveContainer width={width} height={height} debounce={1}>
        <PieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            innerRadius="60%"
            outerRadius="100%"
            animationDuration={1000}
          >
            {data.map(entry => (
              <Cell
                key={`cell-${entry.name}`}
                {...entry.itemStyle}
                strokeWidth={0}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
