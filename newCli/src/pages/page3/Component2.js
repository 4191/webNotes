import React, { useContext } from 'react';
import { UseContext } from '../../globalContext/globalContext';

function Component2() {
    const { theme } = useContext(UseContext);
    return (
        <>
            <div style={{ backgroundColor: theme.background }}>component2</div>
        </>
    );
}

export default Component2;
