import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login/Login';
import Admin from './pages/app_router/AppRouter';
import { UseContext } from './globalContext/globalContext';
import { getUser } from './utils/storageUtils';
/*
应用的根组件
 */
const App = () => {
    const username = !!Object.keys(getUser()).length ? getUser() : '';
    const [user, setUser] = useState(username);
    return (
        <BrowserRouter>
            <UseContext.Provider value={{ user, setUser }}>
                <Switch>
                    {/*只匹配其中一个*/}
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Admin}></Route>
                </Switch>
            </UseContext.Provider>
        </BrowserRouter>
    );
};
export default App;
