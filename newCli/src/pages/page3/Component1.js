import React, { useContext } from 'react';
import { UseContext } from '../../globalContext/globalContext';

function Component1() {
    const { theme, toggleTheme } = useContext(UseContext);

    return (
        <div>
            <button
                onClick={toggleTheme}
                style={{ backgroundColor: theme.background, color: 'blue' }}
            >
                点击component4
            </button>
        </div>
    );
}

export default Component1;

// 不使用hooks的写法
// (  <UseContext.Consumer>
//     {({ theme, toggleTheme }) => (
//         <button
//             onClick={toggleTheme}
//             style={{ backgroundColor: theme.background }}
//         >
//             {`Toggle Theme`}
//         </button>
//     )}
// </UseContext.Consumer> )
