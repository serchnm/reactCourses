import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class NavBar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div>
        <Menu style={{background:"#212B35"}} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="gray-12">
          <Menu.Item  >
           <img style={{width: "40px"}} src="./LOGOIN.png"/>
          </Menu.Item>
          <Menu.Item key="admin" >
            <Link to="/administration" style={{color:"white"}}>Administrator</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default NavBar;