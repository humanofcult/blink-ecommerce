import React from 'react'
import { Space, Button, Switch } from 'antd';
import {UserOutlined, ShoppingFilled, ShoppingOutlined, BulbFilled, BulbOutlined} from '@ant-design/icons';

export default function Header() {
  return (

    <header>
        <Space className='navbar' size={[100,0]} align="center">
          <img src="./img/logo.svg" alt="logo" />
          <Space className='navbarButtons' size={[50,0]}>
            <Button type='primary' ghost shape='circle' size='middle' style={{border:"solid 1.5px white"}} icon={<UserOutlined style={{color: "white", fontSize: "1rem"}} />}></Button>
            <Button type='primary' ghost shape='circle' size='middle' style={{border:"solid 1.5px white"}} icon={<ShoppingOutlined style={{color: "white", fontSize: "1.2rem"}} />}></Button>
            <Switch className='switch'
              checkedChildren={<BulbOutlined/>}
              unCheckedChildren={<BulbFilled/>}
              defaultChecked
            />
          </Space>
        </Space>
        {/* <button id="burger">&#9776</button> */}
    </header>
  )
}
