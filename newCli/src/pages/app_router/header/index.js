import React, { useState, useEffect, useContext } from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link as RouteLink, withRouter } from 'react-router-dom';
import { dealPath, dealNav } from '../../../config/menuConfig';
import { LogoutOutlined } from '@ant-design/icons';
import { removeUser } from '../../../utils/storageUtils';
import { UseContext } from '../../../globalContext/globalContext';
import './index.less';
const { Header } = Layout;
const { SubMenu } = Menu;

function HeaderTop(props) {
    const [selectedKeys, setSelectedKeys] = useState(null);
    const { setUser } = useContext(UseContext);
    const pathname = props.history.location.pathname;

    const onClickMenu = (params) => {
        const { keyPath } = params;
        setSelectedKeys(keyPath);
    };

    const logout = () => {
        removeUser();
        setUser('');
        props.history.push('/login');
    };

    useEffect(() => {
        let path = pathname.split('/')[1];
        setSelectedKeys(dealPath(path));
    }, [pathname]);

    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={selectedKeys ? selectedKeys : ['1']}
                onClick={onClickMenu}
                defaultSelectedKeys={['1']}
            >
                {dealNav.map((item) => {
                    const { key, path, name, subMenu } = item;
                    if (subMenu) {
                        return (
                            <SubMenu
                                key={key}
                                title={name}
                                className="subMenu-item"
                            >
                                {item.children.map((child) => (
                                    <Menu.Item key={child.key}>
                                        <RouteLink to={child.path}>
                                            <span>{child.name}</span>
                                        </RouteLink>
                                    </Menu.Item>
                                ))}
                            </SubMenu>
                        );
                    } else {
                        return (
                            <Menu.Item key={key} className="menu-item">
                                <RouteLink to={path}>
                                    <span>{name}</span>
                                </RouteLink>
                            </Menu.Item>
                        );
                    }
                })}
            </Menu>
            <span className="logout">
                <Button type="text" onClick={logout}>
                    <LogoutOutlined style={{ color: 'white' }} />
                </Button>
            </span>
        </Header>
    );
}

export default withRouter(HeaderTop);
