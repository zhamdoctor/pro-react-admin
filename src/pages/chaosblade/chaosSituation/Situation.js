import React from 'react'
import { Card, Drawer, Radio } from 'antd'

const ob = [
  {
    name: 'kubernetes',
    show: false,
    id: 1,
  },
  {
    name: 'node',
    show: false,
    id: 2,
  },
  {
    name: '云主机',
    show: false,
    id: 3,
  },
]

class Situation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 1,
    }
  }

  _this = this
  /*  isBoxsShow1 = this.state.currentIndex==1?"block":"none";
     isBoxsShow2 = this.state.currentIndex==2?"block":"none";
     isBoxsShow3 = this.state.currentIndex==3?"block":"none"; */
  // const [currentIndex,setIndex]=useState(0)

  judge = (index) => {
    switch (this.state.currentIndex) {
      case 1:
        return 'block'
      default:
        return 'none'
    }
  }

  tabChoice = (id) => {
    this.setState({
      currentIndex: id,
    })
    console.log('currentIndex:', this.state.currentIndex)
  }

  render() {
    return (
      <div>
        <Radio.Group>
          {ob.map((items) => (
            <Radio.Button
              key={items.id}
              onClick={() => {
                this.tabChoice(items.id)
              }}
            >
              ({items.name})
            </Radio.Button>
          ))}
        </Radio.Group>
        <div style={{ display: this.state.currentIndex === 3 ? 'block' : 'none' }}>
          <Card>系统资源1</Card>
          <Card>java应用</Card>
          <Card>云资源</Card>
        </div>
        <div style={{ display: this.state.currentIndex === 3 ? 'block' : 'none' }}>
          <Card>系统资源</Card>
          <Card>java应用</Card>
          <Card>云资源</Card>
        </div>
        <Card style={{ display: this.state.currentIndex === 3 ? 'block' : 'none' }}>云资源</Card>
      </div>
    )
  }
}

export default Situation
