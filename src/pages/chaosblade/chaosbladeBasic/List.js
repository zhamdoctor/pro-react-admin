import { Steps } from 'antd'
import {
  AreaChartOutlined,
  FieldTimeOutlined,
  OrderedListOutlined,
  RightCircleOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useState, React } from 'react'
import ChaosObject from '@pages/chaosblade/chaosObject/chaosObject'
import Situation from '@pages/chaosblade/chaosSituation/Situation'

const elements = [
  {
    title: '演练对象',
    content: <ChaosObject />,
    icon: <UserOutlined />,
  },
  {
    title: '演练场景',
    content: <Situation />,
    icon: <AreaChartOutlined />,
  },
  {
    title: '演练排序',
    content: <ChaosObject />,
    icon: <OrderedListOutlined />,
  },
  {
    title: '演练时间',
    content: <ChaosObject />,
    icon: <FieldTimeOutlined twoToneColor="#eb2f96" />,
  },
  {
    title: '演练开始',
    content: <ChaosObject />,
    icon: <RightCircleOutlined />,
  },
]
const { Step } = Steps

const List = () => {
  const [current, setCurrent] = useState(0)
  const [spinRound, setSpinRound] = useState(true)
  const onChange = (value) => {
    setCurrent(value)
  }
  return (
    <>
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        style={{ marginTop: '-5px' }}
        className="site-navigation-steps"
      >
        {elements.map((item) => (
          <Step status="finish" key={item.title} title={item.title} icon={item.icon} />
        ))}
      </Steps>
      <br />
      <div className="steps-content">{elements[current].content}</div>
      <div className="steps-action"></div>
    </>
  )
}

export default List
