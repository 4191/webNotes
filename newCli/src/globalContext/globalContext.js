import React from 'react';
export const themes = {
    dark: { background: '#222222' },
    light: { background: '#eeeeee' },
};

//可以定义多种类型的全局变量，不必都写到一个context下边
export const UseContext = React.createContext({
    theme: themes.dark, //这列的默认值是当找不到Provider的时候使用
    toggleTheme: () => {},
    goHome: () => {},
    user: '',
    setUser: () => {},
});
