import React from 'react'
import { Menu } from 'antd';
const { SubMenu } = Menu;
const menuData = [
  {
    id: 1,
    title: '展开父节点',
    subMenu: [
      {
        id: 11,
        text: '一层'
      },
      {
        id: 12,
        text: '二层'
      },
      {
        id: 13,
        text: '三层'
      },
      {
        id: 14,
        text: '四层'
      },
      {
        id: 15,
        text: '五层'
      },
      {
        id: 16,
        text: '六层'
      }
    ]
  }, {
    id: 2,
    title: '展开子节点',
    subMenu: [
      {
        id: 21,
        text: '一层'
      },
      {
        id: 22,
        text: '二层'
      },
      {
        id: 23,
        text: '三层'
      },
      {
        id: 24,
        text: '四层'
      },
      {
        id: 25,
        text: '五层'
      },
      {
        id: 26,
        text: '六层'
      }
    ]
  }
];

const NodeContextMenu = ({ x = -300, y = 0, setNodeContextMenu=()=>{} }) => {
  const handleClick = () => {
    setNodeContextMenu()
  }
  return (
    <Menu onClick={handleClick} style={{ width: 180, position: 'absolute', left: x+200, top: y }} mode="vertical">
    {menuData.map(menu => menu.subMenu? (
      <SubMenu key={menu.id} title={menu.title}>
        {menu.subMenu ? menu.subMenu.map(item => (<Menu.Item key={item.id}>{ item.text}</Menu.Item>)):''}
      </SubMenu>
    ) : (<Menu.Item key={menu.id}>{menu.title}</Menu.Item>))}
  </Menu>
  )
}

export default NodeContextMenu