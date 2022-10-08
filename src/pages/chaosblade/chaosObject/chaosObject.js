import React from 'react'
import { Button, Input } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

const { TextArea } = Input
const onChange = (e) => {
  console.log('file content:', e.target.value)
}

const ChaosObject = () => (
  <>
    <TextArea
      showCount
      style={{
        height: 120,
      }}
      onChange={onChange}
    ></TextArea>
    <Button type="primary" shape="round" icon={<CheckOutlined />}>
      确定
    </Button>
    <Button shape="round">取消</Button>
  </>
)

export default ChaosObject
