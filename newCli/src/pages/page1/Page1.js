import React from 'react';
import { reqData } from '../../service/index';

function Page1() {
    const onClick = async () => {
        const result = await reqData();
        console.log('onClick -> result', result);
    };

    return (
        <div className="site-layout-content">
            Page1
            <button onClick={onClick}>发送请求</button>
        </div>
    );
}

export default Page1;
