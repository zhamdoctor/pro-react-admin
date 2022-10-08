import React from 'react'
import { Card } from 'antd'
/* 展示基础训练场景：1. */
const BasicPracticeSituation = () => (
  <div>
    <Card title="Pod演练" extra={<a href="#">跳转</a>} style={{ width: 300 }}>
      <a href="#">
        <p>网络层面</p>
      </a>
      <a href="#">
        <p>cpu层面</p>
      </a>
      <a href="#">
        <p>内存层面</p>
      </a>
    </Card>
  </div>
)

export default BasicPracticeSituation
