import React, {Component} from 'react'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

class BarComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      option: this.getOtion()
    }
  }
  componentWillReceiveProps = (nextProps) => {
    const data = nextProps.data

    this.renderMap(data)
  }
  getOtion = () => {
    return {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: []
    }
  }
  renderMap = (data) => {
    const option = this.state.option
    option.series = data
    option.legend.data = legendData
    this.setState({option})
  }
  render() {
    const { option } = this.state

    return (
      <ReactEcharts
        option={option}
        notMerge={true}
        style={{height: '350px', width: '100%'}}
        className='react_for_echarts'
      />
    )
  }
}

export default BarComponent

