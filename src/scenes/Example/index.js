import React, {Component} from 'react'
import { Card } from 'antd-mobile'
import Chart from '../../../components/Chart'
import s from './compete.css'


class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData:[]
    }
  }
  componentDidMount = () => {
    this.getChartData()
  }
  getChartData = () => {
    service.getData()
      .then(data => {
        this.setState({ chartData: data })
      })
  }

  render() {
    const { chartData } = this.state

    return (
      <div>
        <Card full>
            <Card.Header
              title="top5"
              thumb={<div className={`${s.cardHeaderIcon} ${s.top5Icon}`}/>}
            />
          <Card.Body style={{padding: '10px'}}>
            <Chart data={chartData}  />
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Example
