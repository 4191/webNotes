import React, { useState, useCallback, useContext, useEffect } from 'react';
import './app_router.css';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import Page1 from '../page1/Page1';
import Page2 from '../page2/Page2';
import Page3 from '../page3/Page3';
import Header from './header';
import NotFound from '../not-found/NotFound';
import { UseContext, themes } from '../../globalContext/globalContext';

const { Content, Footer } = Layout;

function AppRouter(props) {
    const [theme, setTheme] = useState(themes.dark);
    const { user } = useContext(UseContext);

    const toggleThemeFunc = () => {
        setTheme((theme) =>
            theme === themes.dark ? themes.light : themes.dark
        );
    };

    const goHomeFunc = () => {
        props.history.replace('/');
    };

    const toggleTheme = useCallback(toggleThemeFunc);
    const goHome = useCallback(goHomeFunc);

    useEffect(() => {
        if (user.length === 0) {
            props.history.push('/login');
        }
    });

    return (
        <Layout className="layout">
            <Header></Header>
            <Content style={{ padding: '0 50px' }}>
                {/* context 嵌套单个路由switch不管用 */}
                <UseContext.Provider value={{ theme, toggleTheme, goHome }}>
                    <Switch>
                        <Redirect exact from="/" to="/page1" />
                        <Route path="/page3" component={Page3} />
                        <Route path="/page1" component={Page1} />
                        <Route path="/page2" component={Page2} />
                        <Route component={NotFound} />
                    </Switch>
                </UseContext.Provider>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
}

export default AppRouter;
