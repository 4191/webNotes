import React, { useContext } from 'react';
import { Button, Row, Col } from 'antd';
import { UseContext } from '../../globalContext/globalContext';
import './not-found.less';
/*
404页面
 */
const NotFound = () => {
    const { goHome } = useContext(UseContext);

    return (
        <Row className="not-found">
            <Col span={12} className="left"></Col>
            <Col span={12} className="right">
                <h1>404</h1>
                <h2>抱歉，你访问的页面不存在</h2>
                <div>
                    <Button type="primary" onClick={goHome}>
                        回到首页
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default NotFound;
